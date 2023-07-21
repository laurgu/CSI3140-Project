import React, {useState} from "react";
import FormRenderer from "@data-driven-forms/react-form-renderer/form-renderer";
import componentTypes from "@data-driven-forms/react-form-renderer/component-types";
import useFormApi from "@data-driven-forms/react-form-renderer/use-form-api";
import FormSpy from "@data-driven-forms/react-form-renderer/form-spy";
import TextField from "@data-driven-forms/mui-component-mapper/text-field";
import Button from "@mui/material/Button";
import {DatePicker} from "@data-driven-forms/mui-component-mapper";
import {putData} from "../../api/documents";
import {Grid} from "@mui/material";
import NewField from "./newfield";

const componentMapper = {
    [componentTypes.TEXT_FIELD]: TextField,
    [componentTypes.DATE_PICKER]: DatePicker,
};

const FormTemplate = ({setShow, schema}) => {
    const {handleSubmit, onReset, onCancel, getState} = useFormApi();
    const {submitting, valid, pristine} = getState();

    let len = schema.fields.length;
    let left = [];
    let right = [];
    for (var i = 0; i < len; i += 2) {
        left.push(schema.fields[i]);
        schema.fields[i + 1] && right.push(schema.fields[i + 1]);
    }

    return (
        <form onSubmit={handleSubmit}>
            {schema.title}
            <Grid container spacing={2}>
                <Grid container item xs={6} direction="column">
                    {left.map((field, index) => {
                        if (field.hidden) return null;
                        return (
                            <div key={index} style={{margin: "10px",}}>
                                {field.label}
                                <TextField
                                    key={index}
                                    name={field.name}
                                    label={field.label}
                                    type={field.type}
                                    isRequired={field.isRequired}
                                    helperText={field.helperText}
                                    initialValue={field.initialValue}
                                    // value={field.value || field.initialValue}
                                />
                            </div>
                        );
                    })}
                </Grid>
                <Grid container item xs={6} direction="column">
                    {right.map((field, index) => {
                        if (field.hidden) return null;
                        return (
                            <div key={index} style={{margin: "10px",}}>
                                {field.label}
                                <TextField
                                    key={index}
                                    name={field.name}
                                    label={field.label}
                                    type={field.type}
                                    isRequired={field.isRequired}
                                    helperText={field.helperText}
                                    initialValue={field.initialValue}
                                />
                            </div>
                        );
                    })}
                </Grid>
            </Grid>
            <FormSpy>
                {() => (
                    <div style={{marginTop: 8}}>
                        <Button
                            disabled={submitting || !valid || pristine}
                            style={{marginRight: 8}}
                            type="submit"
                            color="primary"
                            variant="contained"
                        >
                            Submit
                        </Button>
                        <Button variant="contained" onClick={onCancel} style={{marginRight: 8}}>
                            Cancel
                        </Button>
                    </div>
                )}
            </FormSpy>
        </form>
    );
};

const asyncSubmit = async (doc) => {
    console.log("Submitting");
    let clean = {
        _id: doc._id
    };
    doc.fields.filter((field) => !field.hidden).forEach((field) => {
        clean[field.name] = document.getElementsByName(field.name)[0].value;
    });
    console.log(clean);
    await putData(clean);
    console.log("Submitted");
};

function FormControls({doc, setReload}) {
    return (
        <FormRenderer
            FormTemplate={FormTemplate}
            componentMapper={componentMapper}
            schema={doc}
            onSubmit={() => asyncSubmit(doc)}
            onCancel={() => setReload(true)}
            onReset={() => console.log("Resetting")}
        />
    );
}

FormControls.displayName = "Form controls";

export default FormControls;
