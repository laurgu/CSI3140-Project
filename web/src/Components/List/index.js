import Element from "./element";

function List({list}) {

    if (list.error) {
        return <div><p>Error...</p><p>{list.error.value}</p></div>
    }

    return (
        <div>
            {list.map((item) => (
                <Element name={item.title}
                         _id={item._id}
                         description={item.description}
                         client={item.client}
                         date={item.date}/>
            ))}
        </div>
    )
}

export default List