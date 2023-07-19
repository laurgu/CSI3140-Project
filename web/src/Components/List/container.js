import Element from "./element";
import { useDebounce } from "@uidotdev/usehooks";
import {useEffect, useState} from "react";
import fetchData from "../../api/documents";


function Container({query}) {

    const [data, setData] = useState([]);


    useEffect(() => {
        fetchData(query).then(result => setData(result))
    }, [query])


    return (
        <div>
            {data.map((item) => (
                <Element name={item.title} description={item.description} client={item.client} date={item.date} />
            ))}
        </div>
    )
}

export default Container