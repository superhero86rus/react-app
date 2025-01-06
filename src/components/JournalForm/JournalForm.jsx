import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { useEffect, useReducer, useState } from 'react';
import cn from 'classnames';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import InventoryIcon from '@mui/icons-material/Inventory';
import { INITIAL_STATE, formReducer} from './JournalForm.state';

function JournalForm({ onSubmit }) {

	// Валидация полей
	// const [formValidState, setFormValidState] = useState(INITIAL_STATE);

	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, isFormReadyToSubmit, values } = formState;

	useEffect(() => {

		let timerID;

		if(!isValid.date || !isValid.post || !isValid.title){
			timerID = setTimeout(() => {
				console.log('Очистка состояния');
				dispatchForm({type: 'RESET_VALIDITY'});
				// setFormValidState(INITIAL_STATE);
			}, 2000);
		}

		return () => {
			clearTimeout(timerID);
		};
	}, [isValid]);

	useEffect(() => {
		if(isFormReadyToSubmit) onSubmit(values);
	}, [isFormReadyToSubmit]);

	const addJournalItem = (e) => {
		e.preventDefault(); // Оставляет дефолтное поведение

		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);

		dispatchForm({type: 'SUBMIT', payload: formProps});
	};

	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>

			{/* Наименование */}
			<div>
				<input type='text' name='title' className={cn(styles['input-title'], {
					[styles['invalid']]: !isValid.title
				})} />
			</div>

			{/* Дата*/}
			<div className={styles['form-row']}>
				<label htmlFor='date' className={styles['form-label']}>
					<CalendarMonthIcon/>
					<span>Дата</span>
				</label>
				<input type='date' name='date' id='date' className={cn(styles['input'], {
					[styles['invalid']]: !isValid.date
				})} />
			</div>

			{/* Метки */}
			<div className={styles['form-row']}>
				<label htmlFor='tag' className={styles['form-label']}>
					<FolderOpenIcon/>
					<span>Метки</span>
				</label>
				<input type='text' name='tag' id='tag' className={styles['input']}/>
			</div>

			{/* Текст */}
			<textarea name='post' id='multiline' rows='10' className={cn(styles['input'], {
				[styles['invalid']]: !isValid.post
			})} ></textarea>
			<Button text='Сохранить' />
		</form>
	);
}

export default JournalForm;