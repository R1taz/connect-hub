import { Box, useTheme } from '@mui/material'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './styles.module.css'
import userSVG from '../../assets/user.svg'
import { useAppSelector } from '../../hooks/react-redux'

const Navigation = () => {
	const theme = useTheme()
	const location = useLocation()

	const isAuth = useAppSelector(state => state.authSlice.isAuth)

	return (
		<Box sx={{ display: 'flex', alignItems: 'center' }}>
			<NavLink to='/' className={styles.link}>
				Главная
			</NavLink>

			{location.pathname !== '/login' &&
				location.pathname !== '/registration' &&
				location.pathname !== '/contacts' && (
					<NavLink to='/' className={styles.link}>
						О нас
					</NavLink>
				)}

			{location.pathname !== '/login' &&
				location.pathname !== '/registration' &&
				location.pathname !== '/contacts' && (
					<NavLink to='/contacts' className={styles.link}>
						Контакты
					</NavLink>
				)}

			<NavLink to='/map' className={styles.link}>
				Опоры
			</NavLink>

			{!isAuth && (
				<NavLink to='/login' className={`${styles.entrance} ${styles.link}`}>
					Войти
				</NavLink>
			)}
			{isAuth && (
				<NavLink
					to='/profile'
					style={{ color: theme.palette.primary.main }}
					className={styles.link}
				>
					<img src={userSVG} className={styles.user} />
				</NavLink>
			)}
		</Box>
	)
}

export default Navigation
