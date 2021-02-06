const TweetQuote = (props) => {
    return <a id="tweet-quote" 
        href={`https://twitter.com/intent/tweet?hashtags=quotes&hashtags=unix&hashtags=fortune&related=freecodecamp&text=${props.text} --${props.author}`} 
        target="_blank"
        className="background-blue-600">
            Tweet Me
        </a>
}

export default TweetQuote