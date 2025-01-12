import './JournalList.css';
import CardButton  from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import { useContext, useMemo } from 'react';
import { UserContext } from '../../context/user.context';

function JournalList({ items }) {

	const { userId } = useContext(UserContext);

	const sortItems = (a, b) => {
		if(a.date > b.date) return 1;
		else return -1;
	};

	// Каждый раз когда меняются зависимости, мы должны пересчитать элементы
	const filteredItems = useMemo(() => items
		.filter(el => el.userId === userId)
		.sort(sortItems), [items, userId]);

	if(items.length === 0){
		return <p>Записей пока нет. Добавьте первую...</p>;
	}

	return <>{filteredItems
		.map(el => (
			<CardButton key={el.id}>
				<JournalItem 
					title={el.title} 
					post={el.post} 
					date={el.date}
				/>
			</CardButton>
		)) }</>;
}

export default JournalList;