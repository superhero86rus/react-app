import './Button.css';
import { memo } from 'react';

function Button({ children, onClick }) {
	console.log('Исполняется Button');

	return (
		<button onClick={onClick} className='button accent'>{children}</button>
	);
}

export default memo(Button);