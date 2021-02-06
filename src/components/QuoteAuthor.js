const QuoteAuthor = (props) => {
    return (
        <div id="author" className="flex-row pb-4"><p className=" place-content-end">{'-- ' + props.author}</p></div>
    )
}

export default QuoteAuthor