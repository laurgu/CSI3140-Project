import List from "../List";
import SearchBar from "./searchbar";
import {useEffect, useState} from "react";
import {fetchData} from "../../api/documents";

const searchStyle = {
    margin: '4vh auto'
}

function Search() {
    const [query, setQuery] = useState({})
    const [list, setList] = useState([]);

    useEffect(() => {
        fetchData({
            title: query.title,
        }).then(result => result.filter((document) => {
            if (query.client)
                return document.client.includes(query.client);
            else
                return true
        }).filter((document) => {
            if (query._id)
                return document._id.includes(query._id);
            else
                return true
        })).then(setList)
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