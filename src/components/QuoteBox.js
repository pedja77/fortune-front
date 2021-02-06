import React from 'react'
import axios from 'axios'
import QuoteText from './QuoteText'
import QuoteAuthor from './QuoteAuthor'
import NewQuote from './NewQuote'
import TweetQuote from './TweetQuote'

class QuoteBox extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            fortune: '',
            author: ''
        }
        this.getNewQuote = this.getNewQuote.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    getNewQuote() {
        axios
            .get('https://fortunesserver.pedja77.repl.co/api/fortune')
            .then(response => {
                this.setState({
                    fortune: response.data.fortune,
                    author: response.data.author
                })
            })
            .catch(err => console.log(err))
    }

    handleClick(e) {
        e.preventDefault()
        this.getNewQuote()
    }

    componentDidMount() {
        this.getNewQuote()
    }
    render() {
        return (
            <div className="border-2 border-double border-blue-300 rounded-md p-2">
                <div id="quote-box">
                    <QuoteText text={this.state.fortune} />
                    <QuoteAuthor author={this.state.author} />
                    <div className="flex-row flex place-content-between">
                        <NewQuote handleClick={this.handleClick} />
                        <TweetQuote text={this.state.fortune} author={this.state.author}/>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default QuoteBox