import './App.css';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import { useLocalStorage } from './hooks/useLocalStorage.hook';
import { UserContextProvider } from './context/user.context';
import { useState } from 'react';

function mapItems(items) {
	if(!items){
		return [];
	}

	console.log('Items: ' + JSON.stringify(items));

	return items.map(i => ({
		...i,
		date: new Date(i.date)
	}));
}

function App() {
	console.log('Исполняется App');

	const [items, setItems] = useLocalStorage(['data']);
	const [selectedItem, setSelectedItem] = useState({});

	const addItem = item => {

		console.log('Add item: ' + item);

		// Новый элемент
		if(!item.id){
			setItems([...mapItems(items), {
				...item,
				date: new Date(item.date),
				id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1
			}]);
		} else { // Существующий элемент

			setItems([...mapItems(items).map(i => {
				if(i.id === item.id){
					return {
						...item
					};
				}

				return i;
			})]);
		}
	};
	
	return (
		<UserContextProvider>
			<div className='app'>
				<LeftPanel>
					<Header/>
					<JournalAddButton/>
					<JournalList items={mapItems(items)} setItem={setSelectedItem}/>
				</LeftPanel>
				<Body>
					<JournalForm onSubmit={addItem} data={selectedItem}/>
				</Body>
			</div>
		</UserContextProvider>
	);
}

export default App;