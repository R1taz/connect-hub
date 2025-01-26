import React, { useState } from 'react'

const Test = () => {
	const [posts, setPosts] = useState<any[]>([])

	const handleSubmit = async () => {
		let res = await fetch('http://localhost/RestAPI_back/index')
		let posts = await res.json()
		setPosts(prev => [...prev, posts])
	}

	return (
		<>
			<button onClick={handleSubmit}>Отправить запрос</button>
			<div>{posts}</div>
		</>
	)
}

export default Test
