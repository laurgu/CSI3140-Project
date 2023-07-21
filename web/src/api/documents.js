async function fetchData(query, route = "documents") {
    let url = "http://localhost:7000/" + route + "/";
    if (query.title) {
        url += `?title=${query.title}`;
    }
    if (query.id) {
        url += `?_id=${query.id}`;
    }
    if (query.client) {
        url += `?client=${query.client}`;
    }

    try {
        return await fetch(url).then((response) => response.json());
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
            },
        }).then((response) => response.json());
    } catch (e) {
        console.log(e);
        return [];
    }
}

export {fetchData, putData};
