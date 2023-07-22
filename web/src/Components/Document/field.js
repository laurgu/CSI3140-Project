import TextField from "@data-driven-forms/mui-component-mapper/text-field";
import {IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

export const Field = ({field, index, remove}) => <div key={index} style={{margin: "10px",}}>
    {field.label}
    {index}
    <div style={{display: "flex"}}>
        <TextField
            key={index}
            name={field.name}
            label={field.label}
            type={field.type}
            isRequired={field.isRequired}
            helperText={field.helperText}
            initialValue={field.initialValue}
        />
        <IconButton aria-label="delete" disabled={field.isRequired} onClick={() => remove(field)}>
            <DeleteIcon/>
        </IconButton>
    </div>

</div>