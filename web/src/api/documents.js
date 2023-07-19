async function fetchData(query) {
    let url = 'http://localhost:7000/documents';
    if (query.title) {
        url += `?title=${query.title}`
    }

    return await fetch(url).then(response => response.json())
}

export default fetchData
