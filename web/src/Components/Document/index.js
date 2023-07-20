import {Link, useParams} from "react-router-dom";
import FormControls from "./form";
import {useEffect, useState} from "react";
import {fetchData, putData} from "../../api/documents";
import Button from '@mui/material/Button';
import NewField from "./newfield";

const documentStyle = {
    margin: '20px',
    padding: '20px',
}

function Document() {
    const { id } = useParams();

    const [show, setShow] = useState(false);
    const [doc, setDoc] = useState({
        title: "Error",
        fields: []
    });
    const [reload, setReload] = useState(false)


    useEffect(() => {
        fetchData({id: id}).then((data) => {
            let values = {
                fields: [
                    {
                        component: 'text-field',
                        name: '_id',
                        hidden: true,
                        initialValue: data.values().next().value._id
                    }
                ]
            };

            for (const [key, value] of Object.entries(data.values().next().value)) {
                values.fields.push({
                    component: 'text-field',
                    name: key,
                    label: key,
                    isRequired: false,
                    initialValue: value,
                    hidden: key.charAt(0) === '_',
                })
            }


            setDoc(values);
            if (reload) setReload(false);
        });
    }, [id, reload]);


    return (
        <div style={documentStyle}>
            <Link to="/">Home</Link>
            <h1>Document {id}</h1>
            <div style={{margin: "20px 0px"}}>
                <FormControls doc={doc} setReload={setReload}/>
            </div>
            <Button variant="contained" onClick={() => setShow(true)}>
                Add Field
            </Button>
            <NewField doc={doc} setDoc={setDoc} setShow={setShow} show={show}/>
        </div>
    )
}


export default Document;