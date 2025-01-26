import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Main from './pages/Main/Main'
import Registration from './pages/Registration/Registration'
import Authorization from './pages/Authorization/Authorization'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Main />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/login' element={<Authorization />} />
			</Route>
		</Routes>
	)
}

export default App
