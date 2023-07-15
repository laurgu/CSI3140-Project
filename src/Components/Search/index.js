import {useState} from "react";

// const uri = "mongodb+srv://csi3140:<password>@csi3140.tdiheil.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(uri);

function Search() {


    const [list, setList] = useState([])
    const handleSubmit = async (event) => {
        event.preventDefault();
        //
        // try {
        //     const db = client.db("CSI3140");
        //     const documents = db.collection("documents");
        //
        //     const query = {type: "typea"};
        //     const options = {}
        //
        //     const cursor = documents.find(query, options);
        //
        //     const results = await cursor.toArray();
        //     setList(results);
        //
        // } catch (error) {
        //     console.error(error);
        // } finally {
        //     await client.close();
        // }

    }

    return (
        <div>
            <h1>Search</h1>
            <div>
                {list.map((item) => (
                    <h3>{item.name}</h3>
                ))}
            </div>
        </div>
    )
}

export default Search