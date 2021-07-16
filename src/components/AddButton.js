const AddButton = ({ onClick, text, icon }) => {
    return (
        <button className='add-button' onClick={onClick}>{text} {icon}</button>
    )
}

export default AddButton;