import List from "../List";
import SearchBar from "./search";
import {useEffect, useState} from "react";
import {fetchData, putData} from "../../api/documents";

const searchStyle = {
    margin: '4vh auto'
}

function Search() {
    const [query, setQuery] = useState({})
    const [list, setList] = useState([]);

    useEffect(() => {
        fetchData(query).then(result => setList(result))
    }, [query])


    return (
        <div style={searchStyle}>
            <h3>Search</h3>
            <SearchBar onQuery={setQuery}/>
            <List list={list}/>
        </div>
    )
}

export default Search