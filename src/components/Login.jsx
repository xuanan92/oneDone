import { React, useState } from 'react'

function Login() {
	const [inputName, setinputName] = useState('')
	const [inputPass, setinputPass] = useState('')

	return (
		<div>
			<form>
				<input type = "text" className='border' onChange={(event) =>  setinputName(event.target.value)} name = "username" value = {inputName} />
				<input type = "text" className='border' onChange={(event) =>  setinputPass(event.target.value)} name= "password" value = {inputPass} />
				<button type="submit">Submit</button>
			</form>
		</div>
	)
	

}

export default Login
