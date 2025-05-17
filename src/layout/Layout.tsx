import { Outlet, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { Box, Container } from '@mui/material'
import Navigation from '../components/Navigation/Navigation'
import { useAppDispatch, useAppSelector } from '../hooks/react-redux'
import { useEffect } from 'react'
import { useAuthMeQuery } from '../api/authApi'
import { clearUser, setUser } from '../store/slice/userSlice'
import { setAuth, setInitialized } from '../store/slice/authSlice'

const Layout = () => {
	const isInitialized = useAppSelector(state => state.authSlice.isInitialized)
	const dispatch = useAppDispatch()

	const navigate = useNavigate()

	const { data, isLoading, error } = useAuthMeQuery(undefined, { skip: isInitialized })

	useEffect(() => {
		if (isInitialized) return

		if (!isLoading) {
			if (data) {
				dispatch(setAuth(true))
				dispatch(setUser(data))
			} else {
				dispatch(setAuth(false))
				dispatch(clearUser())
			}
			dispatch(setInitialized(true))
		}

		const queryError = error as { status?: number }

		if (queryError?.status === 401 || queryError?.status === 403) {
			dispatch(setInitialized(true))
			navigate('/login')
		}
	}, [data, isLoading, error, dispatch])

	return (
		<Container sx={{ padding: '20px 200px 30px 200px' }}>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<img src={logo} alt='logo' />
				<Navigation />
			</Box>
			{!isInitialized && isLoading && <h1>Загрузка...</h1>}
			{isInitialized && <Outlet />}
		</Container>
	)
}

export default Layout
