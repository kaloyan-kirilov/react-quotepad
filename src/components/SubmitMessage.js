import { FaRegThumbsUp } from 'react-icons/fa';

function SubmitMessage() {
    const submitMessage = document.querySelector('.submit-message')

    const click = () => {
        submitMessage.style.opacity = '0'
        submitMessage.style.pointerEvents = 'none'
    }

    return (
        <div className="submit-message">
            <div className="message-body">
                <p>Your quote has been written.</p>
                <p>Thank you for your contribution!</p>
                <button className="message-button" onClick={click}><FaRegThumbsUp style={{ fontSize: '.8em' }} />Okay</button>
            </div>
        </div>
    )
}

export default SubmitMessage