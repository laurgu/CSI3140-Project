import React from "react";
import FormRenderer from "@data-driven-forms/react-form-renderer/form-renderer";
import componentTypes from "@data-driven-forms/react-form-renderer/component-types";
import useFormApi from "@data-driven-forms/react-form-renderer/use-form-api";
import FormSpy from "@data-driven-forms/react-form-renderer/form-spy";
import TextField from "@data-driven-forms/mui-component-mapper/text-field";
import Button from "@mui/material/Button";
import {DatePicker} from "@data-driven-forms/mui-component-mapper";
import {putData} from "../../api/api";
import {Grid} from "@mui/material";
import {Field} from "./field";

const componentMapper = {
    [componentTypes.TEXT_FIELD]: TextField,
    [componentTypes.DATE_PICKER]: DatePicker,
};

let setDocForm;

const FormTemplate = ({setDoc, schema}) => {
    const {handleSubmit, onReset, onCancel, getState} = useFormApi();
    const {submitting, valid, pristine} = getState();

    let len = schema.fields.length;
    let left = [];
    let right = [];
    for (var i = 0; i < len; i += 2) {
        left.push(schema.fields[i]);
        schema.fields[i + 1] && right.push(schema.fields[i + 1]);
    }

    const remove = (field) => {
        let newDoc = {...schema};
        newDoc.fields = schema.fields.filter((f) => f.name !== field.name);
        setDocForm({...newDoc})
    }

    return <form onSubmit={handleSubmit}>
        {schema.title}
        <Grid container spacing={2}>
            <Grid container item xs={6} direction="column">
                {left.map((field, index) => {
                    if (field.hidden) return null;
                    return <Field field={field} index={index * 2} remove={remove}/>;
                })}
            </Grid>
            <Grid container item xs={6} direction="column">
                {right.map((field, index) => {
                    if (field.hidden) return null;
                    return <Field field={field} index={index * 2 + 1} remove={remove}/>;
                })}
            </Grid>
        </Grid>
        <FormSpy>
            {() => <div style={{marginTop: 8}}>
                <Button
                    disabled={submitting || !valid || pristine}
                    style={{marginRight: 8}}
                    type="submit"
                    color="primary"
                    variant="contained"
                >
                    Submit
                </Button>
                <Button variant="contained" onClick={onReset} style={{marginRight: 8}}>
                    Reset
                </Button>
                <Button variant="contained" onClick={onCancel} style={{marginRight: 8}}>
                    Cancel
                </Button>
            </div>}
        </FormSpy>
    </form>;
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

function FormControls({doc, setReload, setDoc}) {
    setDocForm = setDoc;
    return (
        <FormRenderer
            FormTemplate={FormTemplate}
            componentMapper={componentMapper}
            schema={doc}
            onSubmit={() => asyncSubmit(doc)}
            onCancel={() => window.location.assign("/")}
            onReset={() => window.location.reload()}
        />
    );
}

FormControls.displayName = "Form controls";

export default FormControls;
