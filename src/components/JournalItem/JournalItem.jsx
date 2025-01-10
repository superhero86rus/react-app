import './JournalItem.css';

function JournalItem({ title, post, date }) {

	const formattedDate = new Intl.DateTimeFormat('ru-RU').format(date);

	return (
		<div className='journal-item'>
			<h2 className='journal-item_header'>{title}</h2>
			<h2 className='journal-item_body'>
				<div className='journal-item_date'>{formattedDate}</div>
				<div className='journal-item_text'>{post}</div>
			</h2>
		</div>
	);
}

export default JournalItem;