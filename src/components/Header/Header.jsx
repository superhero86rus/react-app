import styles from './Header.module.css';
import SelectUser from '../SelectUser/SelectUser';

function Header() {
	return (
		<>
			<img className={styles.logo} src="/logo.svg" alt="React Journal"></img>
			<SelectUser/>
		</>
	);
}

export default Header;