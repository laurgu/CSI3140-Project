import {Link, useParams} from "react-router-dom";
import FormControls from "./form";
import React, {useEffect, useState} from "react";
import {deleteId, fetchData} from "../../api/api";
import Button from '@mui/material/Button';
import NewField from "./newfield";

const documentStyle = {
    margin: "20px",
    padding: "20px",
};

function Document() {
    const {id} = useParams();

    const [show, setShow] = useState(false);
    const [doc, setDoc] = useState({
        _id: id,
        title: "Error",
        fields: [],
    });
    const [reload, setReload] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [required, setRequired] = useState([]);

    useEffect(() => {
        fetchData({_id: id}).then((data) => {
            let values = {
                fields: [
                    {
                        component: "text-field",
                        name: "_id",
                        hidden: true,
                        initialValue: data._id,
                    },
                ],
            };

            if ( !loaded) {
                let r = []
                for (const [key] of Object.entries(data)) {
                    if (key.charAt(0) !== "_") {
                        r.push(key);
                    }
                }
                setRequired(r);
            }

            for (const [key, value] of Object.entries(data)) {
                values.fields.push({
                    component: "text-field",
                    name: key,
                    label: key,
                    isRequired: required.includes(key),
                    initialValue: value,
                    hidden: key.charAt(0) === "_",
                });
            }
            values._id = data._id;
            setDoc(values);
            if (reload) setReload(false);
            if (!loaded) setLoaded(true);
        });
    }, [id, reload, loaded, required]);

    return (
        <div style={documentStyle}>
            <Link to="/">Home</Link>
            <h1>Document {id}</h1>
            <div style={{margin: "20px 0px", padding: "10px"}}>
                <FormControls
                    doc={doc}
                    setDoc={setDoc}
                    setReload={() => window.location.reload()}
                />
                <Button
                    variant="contained"
                    onClick={() => setShow(true)}
                >
                    Add Field
                </Button>
                <Button
                    variant="outlined"
                    color="error"
                    style={{margin: "10px"}}
                    onClick={() => {
                        console.log(window.location);
                        deleteId(doc._id).then(() => {
                            window.location.assign("/");
                        });
                }}>
                    Delete
                </Button>
            </div>

            <NewField doc={doc} setDoc={setDoc} setShow={setShow} show={show}/>
        </div>
    );
}

export default Document;
