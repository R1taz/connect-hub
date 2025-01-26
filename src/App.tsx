import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import MainPage from './pages/MainPage/MainPage'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'
import AuthorizationPage from './pages/AuthorizationPage/AuthorizationPage'
import MapPage from './pages/MapPage/MapPage'
import Test from './pages/test/test'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<MainPage />} />
				<Route path='/registration' element={<RegistrationPage />} />
				<Route path='/login' element={<AuthorizationPage />} />
				<Route path='/map' element={<MapPage />} />
				<Route path='test' element={<Test />} />
			</Route>
		</Routes>
	)
}

export default App
