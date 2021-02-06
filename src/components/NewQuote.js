const NewQuote = (props) => {
    return (
        <input type="button" 
            id="new-quote" 
            value="New Quote"
            className="border-1 border-solid rounded-md border-blue-600" 
            onClick={props.handleClick}/>
    )
}

export default NewQuote