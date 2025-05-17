import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Main from './pages/MainPage/MainPage'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'
import AuthorizationPage from './pages/AuthorizationPage/AuthorizationPage'
import MapPage from './pages/MapPage/MapPage'
import ContactsPage from './pages/ContactsPage/ContactsPage'
import RecoverPasswordPage from './pages/RecoverPasswordPage/RecoverPasswordPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import AuthProvider from './components/AuthProvider/AuthProvider'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Main />} />
				<Route path='/registration' element={<RegistrationPage />} />
				<Route path='/login' element={<AuthorizationPage />} />
				<Route
					path='/map'
					element={
						<AuthProvider>
							<MapPage />
						</AuthProvider>
					}
				/>
				<Route path='/contacts' element={<ContactsPage />} />
				<Route path='/recover' element={<RecoverPasswordPage />} />
				<Route
					path='/profile'
					element={
						<AuthProvider>
							<ProfilePage />
						</AuthProvider>
					}
				/>
			</Route>
		</Routes>
	)
}

export default App
