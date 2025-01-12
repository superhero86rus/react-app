import { useState, useEffect } from 'react';

// Хук для работы с Local Storage
export function useLocalStorage(key) {
	const [data, setData] = useState();

	useEffect(() => {
		const res = JSON.parse(localStorage.getItem(key));
		if(res)
			setData(res);

	}, []);

	const saveData = (newData) => {
		localStorage.setItem(key, JSON.stringify(newData));
		setData(newData);
	};

	console.log('Data: ' + JSON.stringify(data));
	return [data, saveData];
}