import SelectUser from '../SelectUser/SelectUser';
import { useCallback, useState } from 'react';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

const logos = ['/logo.svg', '/vite.svg'];

function Header() {

	const [logoIndex, setLogoIndex] = useState(0);
	console.log('Исполняется Header');

	// Если зависимости не меняются, тогда мы запоминаем функцию
	const toggleLogo = useCallback(() => {
		setLogoIndex(state => Number(!state));
	}, []);

	return (
		<>
			<Logo image={logos[0]}/>
			<SelectUser/>
			<Button onClick={toggleLogo}>Сменить логотип</Button>
		</>
	);
}

export default Header;