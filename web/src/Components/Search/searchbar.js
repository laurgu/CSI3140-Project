const inputStyle = {
    marginRight: '2vw',
}

const labelStyle = {
    marginRight: '5px',
}

function SearchBar({onQuery}) {

    function handleInput(e) {
        // console.log(e.target.value);
        onQuery({
            title: document.getElementsByName('title')[0].value,
            _id: document.getElementsByName('id')[0].value,
            client: document.getElementsByName('client')[0].value
        });
    }

    return (
        <div>
            <div style={{
                margin: '2vh auto',
                display: 'flex',
                label: {
                    marginRight: '15px'
                }
            }}>
                <label style={labelStyle}>Title</label>
                <input style={inputStyle} type="text" onInput={handleInput} name={'title'}/>
                <label style={labelStyle}>ID</label>
                <input style={inputStyle} type="text" onInput={handleInput} name={'id'}/>
                <label style={labelStyle}>Client</label>
                <input style={inputStyle} type="text" onInput={handleInput} name={'client'}/>
            </div>
        </div>
    )
}

export default SearchBar