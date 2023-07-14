import Element from "./element";


function container() {

    let data = [
        {
            name: "Element 1",
            description: "This is the first element",
            client: "Client 1",
            date: "2021-09-01",
            type: "typea"
        },
        {
            name: "Element 2",
            description: "This is the second element",
            date: "2021-09-02",
            type: "typeb"
        }
        ]

    return (
        <div>
            {data.map((item) => (
                <Element name={item.name} description={item.description} client={item.client} date={item.date} />
            ))}

        </div>
    )
}

export default container