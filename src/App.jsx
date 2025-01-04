import './App.css';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import { useState, useEffect } from 'react';

const INITIAL_DATA = [
	// {
	// 	id: 1,
	// 	title: 'Поход в горы',
	// 	post: 'Горные походы открывают удивительный ландшафт',
	// 	date: new Date()
	// },

	// {
	// 	id: 2, 
	// 	title: 'Катание на велосипеде',
	// 	post: 'Катание на велосипеде полезно для здоровья',
	// 	date: new Date()
	// },

	// {
	// 	id: 3,
	// 	title: 'Закаливание',
	// 	post: 'Принимать контрастный душ может быть не просто',
	// 	date: new Date()
	// }
];

function App() {

	const [items, setItems] = useState([]);

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('data'));
		if(data){
			setItems(data.map(item=>({
				...item,
				date: new Date(item.date)
			})));
		}else console.log('Нет данных в localStorage');
	}, []);

	useEffect(() => {
		if(items.length){
			console.log('Запись!');
			localStorage.setItem('data', JSON.stringify(items));
		}
	}, [items]);

	const addItem = item => {
		setItems(oldItems => [...oldItems, {
			id: Math.max(...oldItems.map(i => i.id)) + 1,
			post: item.post,
			title: item.title,
			date: new Date(item.date)
		}]);
	};
	
	return (

		<div className='app'>

			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList items={items}/>
			</LeftPanel>

			<Body>
				<JournalForm onSubmit={addItem}/>
			</Body>

		</div>
	);
}

export default App;