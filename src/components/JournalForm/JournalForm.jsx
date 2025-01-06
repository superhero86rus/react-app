import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { useEffect, useReducer, useState, useRef } from 'react';
import cn from 'classnames';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import InventoryIcon from '@mui/icons-material/Inventory';
import { INITIAL_STATE, formReducer} from './JournalForm.state';
import Input from '../Input/Input';

function JournalForm({ onSubmit }) {

	// Валидация полей
	// const [formValidState, setFormValidState] = useState(INITIAL_STATE);

	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, isFormReadyToSubmit, values } = formState;
	const titleRef = useRef();
	const dateRef = useRef();
	const postRef = useRef();
	
	const focusError = (isValid) => {
		switch(true){
		case !isValid.title:
			titleRef.current.focus();
			break;
		case !isValid.date:
			dateRef.current.focus();
			break;
		case !isValid.post:
			postRef.current.focus();
			break;
		default:
			titleRef.current.focus();
			break;
		}
	};

	useEffect(() => {

		let timerID;

		if(!isValid.date || !isValid.post || !isValid.title){

			focusError(isValid);
			timerID = setTimeout(() => {
				
				dispatchForm({type: 'RESET_VALIDITY'});
				// setFormValidState(INITIAL_STATE);
			}, 2000);
		}

		return () => {
			clearTimeout(timerID);
		};
	}, [isValid]);

	useEffect(() => {
		if(isFormReadyToSubmit) {
			onSubmit(values);
			dispatchForm({type: 'CLEAR'});
			console.log('Clering state!');
		}

	}, [isFormReadyToSubmit, values, onSubmit]);

	// Универсальный метод
	const onChange = (e) => {
		dispatchForm({type: 'SET_VALUE', payload: { [e.target.name] : e.target.value }});
	};

	const addJournalItem = (e) => {
		e.preventDefault(); // Оставляет дефолтное поведение

		// const formData = new FormData(e.target);
		// const formProps = Object.fromEntries(formData);

		dispatchForm({type: 'SUBMIT'});
	};

	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>

			{/* Наименование */}
			<div>
				<Input type='text' ref={titleRef} isValid={isValid.title} onChange={onChange} value={values.title} name='title' appearance='title'/>
			</div>

			{/* Дата*/}
			<div className={styles['form-row']}>
				<label htmlFor='date' className={styles['form-label']}>
					<CalendarMonthIcon/>
					<span>Дата</span>
				</label>
				<Input type='date' ref={dateRef} isValid={isValid.date} onChange={onChange} value={values.date} name='date' id='date' />
			</div>

			{/* Метки */}
			<div className={styles['form-row']}>
				<label htmlFor='tag' className={styles['form-label']}>
					<FolderOpenIcon/>
					<span>Метки</span>
				</label>
				<Input type='text' onChange={onChange} value={values.tag} name='tag' id='tag' />
			</div>

			{/* Текст */}
			<textarea name='post' ref={postRef} id='post' rows='10' onChange={onChange} value={values.post} className={cn(styles['input'], {
				[styles['invalid']]: !isValid.post
			})} ></textarea>
			<Button text='Сохранить' />
		</form>
	);
}

export default JournalForm;