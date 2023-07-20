

function SearchBar({onQuery}) {

    function handleInput(e) {
        console.log(e.target.value);
        onQuery({
            title: e.target.value
        });
    }

    return (
        <div>
            <div>
                <label htmlFor="name">Title</label>
                <input type="text" onInput={handleInput}/>
            </div>
        </div>
    )
}

export default SearchBar