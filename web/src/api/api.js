import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:7000", // Update the baseURL to match your backend's address
});


async function fetchData(query, route = "documents") {
    let url = "http://localhost:7000/" + route + "/";

    if (query.title) {
        url += `?title=${query.title}`;
    }
    if (query._id) {
        url += `?_id=${query._id}`;
    }
    if (query.client) {
        url += `?client=${query.client}`;
    }

    try {
        let res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token"),
            }
        }).then((response) => response.json());
        if (res.length === 0) {
            return [];
        } else if (res.message) {
            window.location.href = "/login";
            return [];
        } else {
            return res;
        }
    } catch (e) {
        return [];
    }
}

async function putData(data) {
    const url = "http://localhost:7000/documents";
    try {
        console.log("Data being PUT:", data);
        return await fetch(url, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token"),
            },
        }).then((response) => response.json())
    } catch (e) {
        console.log(e);
        return [];
    }
}

async function deleteId(id) {
    const url = "http://localhost:7000/documents/" + id;
    try {
        console.log("Data being deleted: ", id);
        return await fetch(url, {
            method: "DELETE",
            headers: {
                "Authorization": localStorage.getItem("token"),
            },
        })
    } catch (e) {
        console.log(e);
        return [];
    }
}

export {api, fetchData, putData, deleteId};
