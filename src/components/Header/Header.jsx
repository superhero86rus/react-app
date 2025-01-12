import SelectUser from '../SelectUser/SelectUser';
import { useState } from 'react';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

const logos = ['/logo.svg', '/vite.svg'];

function Header() {

	const [logoIndex, setLogoIndex] = useState(0);
	console.log('Исполняется Header');

	const toggleLogo = () => {
		setLogoIndex(state => Number(!state));
	};

	return (
		<>
			<Logo image={logos[logoIndex]}/>
			<SelectUser/>
			<Button onClick={toggleLogo}>Сменить логотип</Button>
		</>
	);
}

export default Header;