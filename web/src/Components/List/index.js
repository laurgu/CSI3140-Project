import {useEffect, useState} from "react";
import fetchData from "../../api/documents";
import Element from "./element";

function List({list}) {

    return (
        <div>
            {list.map((item) => (
                <Element name={item.title} id={item._id} description={item.description} client={item.client} date={item.date} />
            ))}
        </div>
    )
}

export default List