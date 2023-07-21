import {Link, useParams} from "react-router-dom";
import FormControls from "./form";
import {useEffect, useState} from "react";
import {fetchData} from "../../api/documents";
import Button from '@mui/material/Button';
import NewField from "./newfield";

const documentStyle = {
    margin: '20px',
    padding: '20px',
}

function Document() {
    const {id} = useParams();

    const [show, setShow] = useState(false);
    const [doc, setDoc] = useState({
        title: "Error",
        fields: []
    });
    const [reload, setReload] = useState(false)
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        fetchData({id: id}).then((data) => {
            console.log("Loaded Data:");
            console.log(data);
            console.log(' ');
            let values = {
                fields: [
                    {
                        component: 'text-field',
                        name: '_id',
                        hidden: true,
                        initialValue: data._id
                    }
                ]
            };

            for (const [key, value] of Object.entries(data)) {
                values.fields.push({
                    component: 'text-field',
                    name: key,
                    label: key,
                    isRequired: false,
                    initialValue: value,
                    hidden: key.charAt(0) === '_',
                })
            }

            values.id = data._id;
            setDoc(values);
            if (reload) setReload(false);
            if (!loaded) setLoaded(true);
        });
    }, [id, reload]);


    return (
        <div style={documentStyle}>
            <Link to="/">Home</Link>
            <h1>Document {id}</h1>
            <div style={{margin: "20px 0px", padding: "10px" }}>
                <FormControls doc={doc} setReload={() => window.location.reload()}/>
                <Button variant="contained" onClick={() => setShow(true)} style={{marginTop: "10px"}}>
                    Add Field
                </Button>
            </div>

            <NewField doc={doc} setDoc={setDoc} setShow={setShow} show={show}/>
        </div>
    )
}


export default Document;