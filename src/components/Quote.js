const Quote = ({ quote }) => {
    return (
        <div className='quote'>
            <div className='quote-text'>"{quote.quote}"</div>
            <div className='author'>- {quote.author}</div>
        </div>
    )
}

export default Quote;