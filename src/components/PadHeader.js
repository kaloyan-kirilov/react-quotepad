import AddButton from './AddButton';
import { BsPencilSquare } from 'react-icons/bs';

const Header = ({ toggle, showForm }) => {
    return (
        <header className='app-header'>
            <h1 className='app-title'>QuotePad</h1>
            <AddButton text={showForm ? 'Close' : 'Add'} icon={!showForm && <BsPencilSquare className='icon' />} onClick={toggle} />
        </header>
    )
}

export default Header;