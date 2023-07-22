import {Box, TextField} from "@mui/material";

const inputStyle = {
    maxWidth: "30%",
}

const boxStyle = {
    margin: '2vh auto',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
}

function SearchBar({onQuery}) {

    function handleInput(e) {
        // console.log(e.target.value);
        onQuery({
            title: document.getElementsByName('title')[0].value,
            _id: document.getElementsByName('id')[0].value,
            client: document.getElementsByName('client')[0].value
        });
    }

    return (
        <div>
            <Box component="Form" style={boxStyle}>
                <TextField style={inputStyle} id="title" label="Search Title" type="text" name="title" onInput={handleInput}/>
                <TextField style={inputStyle} id="id" label="Search ID" type="text" name="id" onInput={handleInput}/>
                <TextField style={inputStyle} id="client" label="Search Field" type="text" name="client" onInput={handleInput}/>
            </Box>
        </div>
    )
}

export default SearchBar