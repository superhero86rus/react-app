import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import { useState } from 'react';
import JournalForm from './components/JournalForm/JournalForm';

function App() {

	const data = [
		{
			title: 'Поход в горы',
			text: 'Горные походы открывают удивительный ландшафт',
			date: new Date()
		},

		{
			title: 'Катание на велосипеде',
			text: 'Катание на велосипеде полезно для здоровья',
			date: new Date()
		},

		{
			title: 'Закаливание',
			text: 'Принимать контрастный душ может быть не просто',
			date: new Date()
		}
	];

	return (

		<div className='app'>

			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList>
					<CardButton>
						<JournalItem title={data[0].title} text={data[0].text} date={data[0].date}/>
					</CardButton>

					<CardButton>
						<JournalItem title={data[1].title} text={data[1].text} date={data[1].date}/>
					</CardButton>

					<CardButton>
						<JournalItem title={data[2].title} text={data[2].text} date={data[2].date}/>
					</CardButton>
				</JournalList>
			</LeftPanel>

			<Body>
				<JournalForm/>
			</Body>

		</div>
	);
}

export default App;