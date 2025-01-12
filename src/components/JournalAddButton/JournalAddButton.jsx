import CardButton from '../CardButton/CardButton';
import './JournalAddButton.css';

function JournalAddButton({ clearForm }) {

	return (
		<CardButton className='journal-add' onClick={clearForm}>
			<img width='4%' src='/plus.png'></img>
            Новое воспоминание
		</CardButton>
	);
}

export default JournalAddButton;