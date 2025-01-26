import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Main from './pages/MainPage/MainPage'
import Registration from './pages/RegistrationPage/RegistrationPage'
import Authorization from './pages/AuthorizationPage/AuthorizationPage'
import MapPage from './pages/MapPage/MapPage'
import Contacts from './pages/Contacts/Contacts'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Main />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/login' element={<Authorization />} />
				<Route path='/map' element={<MapPage />} />
				<Route path='/contacts' element={<Contacts />} />
			</Route>
		</Routes>
	)
}

export default App
