import {Link} from "react-router-dom";
import {deleteId} from "../../api/api";


const elementStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px auto',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}

function element(props) {
    return (
        <div style={elementStyle}>
            <p><b>{props.name}</b></p>
            <p><b>ID:</b> {props._id}</p>
            <p>{props.description}</p>
            <p>{props.client}</p>
            <p>{props.date}</p>
            <Link to={`/document/${props._id}`}>View</Link>
            <Link onClick={() => {
                deleteId(props._id);
                props.setReload(true)
            }} to={'/'}>Delete</Link>
        </div>
    )
}

export default element