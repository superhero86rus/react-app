import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';

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
      <>
        <h1>Test</h1>
        <p>Testing completed!</p>
        <Button/>

        <CardButton>Новое воспоминание</CardButton>

        <CardButton>
          <JournalItem title={data[0].title} text={data[0].text} date={data[0].date}/>
        </CardButton>

        <CardButton>
          <JournalItem title={data[1].title} text={data[1].text} date={data[1].date}/>
        </CardButton>

        <CardButton>
          <JournalItem title={data[2].title} text={data[2].text} date={data[2].date}/>
        </CardButton>
      </>
    );
}

export default App;