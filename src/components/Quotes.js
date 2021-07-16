import Quote from './Quote'

const Quotes = ({ quotes }) => {
    return (
        <div className='quotes-container'>
            {quotes.map((quote) => (
                <Quote key={quote.id} quote={quote} />
            ))}
        </div>
    )
}

export default Quotes;