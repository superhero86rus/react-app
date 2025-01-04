import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import InventoryIcon from '@mui/icons-material/Inventory';

const INITIAL_STATE = {
	title: true,
	post: true,
	date: true
};

function JournalForm({ onSubmit }) {

	// Валидация полей
	const [formValidState, setFormValidState] = useState(INITIAL_STATE);

	useEffect(() => {

		let timerID;

		if(!formValidState.date || !formValidState.post || !formValidState.title){
			timerID = setTimeout(() => {
				console.log('Очистка состояния');
				setFormValidState(INITIAL_STATE);
			}, 2000);
		}

		return () => {
			clearTimeout(timerID);
		};
	}, [formValidState]);

	const addJournalItem = (e) => {
		e.preventDefault(); // Оставляет дефолтное поведение

		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);

		let isFormValid = true;

		if(!formProps.title?.trim().length){
			setFormValidState(state => ({...state, title: false}));
			isFormValid = false;
		}else setFormValidState(state => ({...state, title: true}));

		if(!formProps.post?.trim().length){
			setFormValidState(state => ({...state, post: false}));
			isFormValid = false;
		}else setFormValidState(state => ({...state, post: true}));

		if(!formProps.date){
			setFormValidState(state => ({...state, date: false}));
			isFormValid = false;
		}else setFormValidState(state => ({...state, date: true}));

		if(!isFormValid) return;

		onSubmit(formProps);
	};

	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>

			{/* Наименование */}
			<div>
				<input type='text' name='title' className={cn(styles['input-title'], {
					[styles['invalid']]: !formValidState.title
				})} />
			</div>

			{/* Дата*/}
			<div className={styles['form-row']}>
				<label htmlFor='date' className={styles['form-label']}>
					<CalendarMonthIcon/>
					<span>Дата</span>
				</label>
				<input type='date' name='date' id='date' className={cn(styles['input'], {
					[styles['invalid']]: !formValidState.date
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
				[styles['invalid']]: !formValidState.post
			})} ></textarea>
			<Button text='Сохранить' />
		</form>
	);
}

export default JournalForm;