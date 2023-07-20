import React from 'react';
import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer';
import componentTypes from '@data-driven-forms/react-form-renderer/component-types';
import validatorTypes from '@data-driven-forms/react-form-renderer/validator-types';
import useFormApi from '@data-driven-forms/react-form-renderer/use-form-api';
import FormSpy from '@data-driven-forms/react-form-renderer/form-spy';
import TextField from '@data-driven-forms/mui-component-mapper/text-field';
import Button from '@mui/material/Button';
import {DatePicker} from "@data-driven-forms/mui-component-mapper";
import {putData} from "../../api/documents";
import {useParams} from "react-router-dom";
import {GlobalStyles} from "@mui/material";

const componentMapper = {
    [componentTypes.TEXT_FIELD]: TextField,
    [componentTypes.DATE_PICKER]: DatePicker,
};


const FormTemplate = ({ formFields, schema }) => {
    const { handleSubmit, onReset, onCancel, getState } = useFormApi();
    const { submitting, valid, pristine } = getState();

    return (
        <form onSubmit={handleSubmit}>
            {schema.title}
            {
                schema.fields.map((field, index) => {
                    if (field.hidden)
                        return null;

                    return (
                        <div key={index} style={{margin: '10px' }}>
                            {field.label}
                            <TextField
                                key={index}
                                name={field.name}
                                label={field.label}
                                type={field.type}
                                isRequired={field.isRequired}
                                helperText={field.helperText}
                            />
                        </div>
                    )
                })
            }
            <FormSpy>
                {() => (
                    <div style={{ marginTop: 8 }}>
                        <Button disabled={submitting || !valid} style={{ marginRight: 8 }} type="submit" color="primary" variant="contained">
                            Submit
                        </Button>
                        <Button disabled={pristine} style={{ marginRight: 8 }} onClick={onReset} variant="contained">
                            Reset
                        </Button>
                        <Button variant="contained" onClick={onCancel}>
                            Cancel
                        </Button>
                    </div>
                )}
            </FormSpy>
        </form>
    );
};

function asyncSubmit(values, api) {
    return putData(values)
}

function FormControls({doc, setReload}) {
    return (
        <FormRenderer
            FormTemplate={FormTemplate}
            componentMapper={componentMapper}
            schema={doc}
            onSubmit={asyncSubmit}
            onCancel={() => setReload(true)}
            onReset={() => console.log('Resetting')}
        />
    );
}

FormControls.displayName = 'Form controls';

export default FormControls;