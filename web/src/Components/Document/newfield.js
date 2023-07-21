import {Box, Input, InputLabel, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {useEffect, useState} from "react";


const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};


function NewField({doc, setDoc, show, setShow}) {

    const [name, setName] = useState('');
    const [type, setType] = useState('text');
    const [valid, setValid] = useState(false);
    const [showInvalid, setShowInvalid] = useState(false);

    useEffect(() => {
        if ((type === 'number' || type === 'text') && name.match(/^[a-zA-Z]+$/))
            if (doc.fields.filter(field => field.name === name.toLowerCase()).length === 0) {
                setValid(true);
                return;
            }

        setValid(false);
    }, [name, type]);

    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleTypeChange = (event) => {
        setType(event.target.value);
    }

    return (
        <Modal open={show}
               onClose={() => setShow(false)}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description">
            <Box sx={modalStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>

                <InputLabel htmlFor="name">Name</InputLabel>
                <Input id="name" onChange={handleNameChange} value={name}/>

                <InputLabel htmlFor="type">Type</InputLabel>
                <Input id="type" onChange={handleTypeChange} value={type}/>

                {showInvalid && <p>Invalid input</p>}

                <Button onClick={() => {
                    if (valid) {
                        setShow(false);
                        let newDoc = {...doc};
                        newDoc.fields.push({
                            component: 'text-field',
                            name: name.toLowerCase(),
                            type: type,
                            label: name,
                            isRequired: false,
                        })
                        setDoc(newDoc);
                    } else {
                        setShowInvalid(true);
                    }
                }}>
                    Add
                </Button>
            </Box>
        </Modal>
    )
}

export default NewField;
