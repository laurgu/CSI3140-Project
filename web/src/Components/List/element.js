

function element (props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p>{props.client}</p>
            <p>{props.date}</p>
        </div>
    )
}

export default element