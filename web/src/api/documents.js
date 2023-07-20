async function fetchData(query) {
    let url = 'http://localhost:7000/documents';
    if (query.title) {
        url += `?title=${query.title}`
    }

    try {
        return await fetch(url).then(response => response.json())
    } catch (e) {
        console.log(e)
        return []
    }
}

async function putData(data) {
    const url = 'http://localhost:7000/documents';
    try {
        return await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => response.json())
    } catch (e) {
        console.log(e)
        return []
    }
}

export {fetchData, putData};


