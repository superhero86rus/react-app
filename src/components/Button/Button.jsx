import './Button.css';

function Button({ children, onClick }) {
	console.log('Исполняется Button');

	return (
		<button onClick={onClick} className='button accent'>{children}</button>
	);
}

export default Button;