

const elementStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}

function element (props) {
    return (
        <div style={elementStyle}>
            <p><b>{props.name}</b></p>
            <p><b>ID:</b> {props.id}</p>
            <p>{props.description}</p>
            <p>{props.client}</p>
            <p>{props.date}</p>
        </div>
    )
}

export default element