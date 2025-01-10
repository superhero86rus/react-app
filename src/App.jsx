import './App.css';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import { useLocalStorage } from './hooks/useLocalStorage.hook';
import { UserContext } from './context/user.context';

// const INITIAL_DATA = [
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
// ];

function mapItems(items) {
	if(!items){
		return [];
	}

	return items.map(i => ({
		...i,
		date: new Date(i.date)
	}));
}

function App() {

	const [items, setItems] = useLocalStorage(['data']);

	const addItem = item => {
		setItems([...mapItems(items), {
			post: item.post,
			title: item.title,
			date: new Date(item.date),
			id: Math.max(...items.map(i => i.id)) + 1
		}]);
	};
	
	return (
		<UserContext.Provider value={{ userId: 1}}>
			<div className='app'>
				<LeftPanel>
					<Header/>
					<JournalAddButton/>
					<JournalList items={mapItems(items)}/>
				</LeftPanel>
				<Body>
					<JournalForm onSubmit={addItem}/>
				</Body>
			</div>
		</UserContext.Provider>
	);
}

export default App;