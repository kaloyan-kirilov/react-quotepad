import { useState } from 'react';
import { VscSaveAs } from 'react-icons/vsc';

const QuoteForm = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [author, setAuthor] = useState('')
    const [username, setUsername] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        onAdd({ text, author, username })

        setText('')
        setAuthor('')
        setUsername('')

        setTimeout(showMessage, 800);
    }

    const submitMessage = document.querySelector('.submit-message')

    const showMessage = () => {
        submitMessage.style.opacity = '1'
        submitMessage.style.pointerEvents = 'auto'
    }

    return (
        <form className='quote-form' onSubmit={onSubmit}>
            <div className='form-group'>
                <label>Quote :</label>
                <input type='text' maxLength='210' placeholder='Enter quote...' value={text} onChange={(e) => setText(e.target.value)} required />
            </div>
            <div className='form-group'>
                <label>Author :</label>
                <input type='text' maxLength='25' placeholder='Enter name of the author...' value={author} onChange={(e) => setAuthor(e.target.value)} required />
            </div>
            <button className='write-button'><VscSaveAs className='write-icon' /> Write</button>
        </form>
    )
}

export default QuoteForm;