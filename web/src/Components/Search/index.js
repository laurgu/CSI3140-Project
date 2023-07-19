import {useState} from "react";

// const uri = "mongodb+srv://csi3140:<password>@csi3140.tdiheil.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(uri);

function Search({onQuery}) {

    function handleInput(e) {
        console.log(e.target.value);
        onQuery({
            title: e.target.value
        });
    }

    return (
        <div>
            <h1>Search</h1>
            <div>
                <label htmlFor="name">Title</label>
                <input type="text" onInput={handleInput}/>
            </div>
        </div>
    )
}

export default Search