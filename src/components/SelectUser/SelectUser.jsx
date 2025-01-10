const changeUser = (e) => {
	console.log(e.target.value);
};

function SelectUser() {
	return (
		<>
			<select name='user' id='user' onChange={changeUser}>
				<option value='1'>Антон</option>
				<option value='2'>Василий</option>
			</select>
		</>
	);
}

export default SelectUser;