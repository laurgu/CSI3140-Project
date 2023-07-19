import Container from "./container";
import Search from "../Search";
import {useState} from "react";

function List() {
    const [query, setQuery] = useState({})

    return (
        <div>
            <Search onQuery={setQuery}/>
            <Container query={query}/>
        </div>
    )
}

export default List