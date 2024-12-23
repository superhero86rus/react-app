import './JournalItem.css';

function JournalItem() {

    const title = 'Подготовка к обновлению курсов';
    const date = new Date();
    const text = 'Рандомный текск для того., чтобы проверить дизайн';

    return (
        <div className='journal-item'>
            <h2 className='journal-item_header'>{title}</h2>
            <h2 className='journal-item_body'>
                <div className='journal-item_date'>{date.toString()}</div>
                <div className='journal-item_text'>{text}</div>
            </h2>
        </div>
    );
}

export default JournalItem;