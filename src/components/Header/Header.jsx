import SelectUser from '../SelectUser/SelectUser';
import Logo from '../Logo/Logo';

const logos = ['/logo.svg', '/vite.svg'];

function Header() {

	console.log('Исполняется Header');

	return (
		<>
			<Logo image={logos[0]}/>
			<SelectUser/>
		</>
	);
}

export default Header;