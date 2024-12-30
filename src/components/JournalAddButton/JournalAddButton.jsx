import CardButton from '../CardButton/CardButton';
import './JournalAddButton.css';

function JournalAddButton() {

	return (
		<CardButton className='journal-add'>
			<img width='4%' src='/plus.png'></img>
            Новое воспоминание
		</CardButton>
	);
}

export default JournalAddButton;