import { useState, useEffect } from "react";
import InfoText from "./components/InfoText";
import PadHeader from "./components/PadHeader";
import Quotes from "./components/Quotes";
import NoQuotes from "./components/NoQuotes";
import QuoteForm from "./components/QuoteForm";
import FooterText from "./components/FooterText";
import SubmitMessage from "./components/SubmitMessage";
import FontPreload from "./components/FontPreload";
import firebase from 'firebase/app';
import 'firebase/database';
import firebaseConfig from './config/firebaseConfig';

firebase.initializeApp(firebaseConfig);

const quoteStorage = firebase.database().ref('quotes')

function App() {
  const [showQuoteForm, setShowQuoteForm] = useState(false)

  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    const getQuotes = async () => {
      quoteStorage.on('value', (snapshot) => {
        const fireQuotes = snapshot.val()

        if (fireQuotes !== null) {
          const quotesArray = Object.values(fireQuotes)
          setQuotes(quotesArray)
        } 
      })
    }

    getQuotes()
  }, [])

  // Add New Quote
  const addQuote = (quote) => {
    const id = Math.floor(Math.random() * 100000000) + 1

    const saveQuote = quoteStorage.push()
    saveQuote.set({
      id: id,
      quote: quote.text,
      author: quote.author
    })
  }

  // Toggle Add Form
  const toggleForm = () => {
    setShowQuoteForm(!showQuoteForm)
  }

  return (
    <div className="container">
      <InfoText />
      <div className="quote-pad">
        <PadHeader toggle={toggleForm} showForm={showQuoteForm} />
        {showQuoteForm && <QuoteForm onAdd={addQuote} />}
        {quotes.length > 0 ? <Quotes quotes={quotes} /> : <NoQuotes />}
      </div>
      <FooterText />
      <SubmitMessage />
      <FontPreload />
      <div className="background-img"></div>
    </div>
  );
}

export default App;