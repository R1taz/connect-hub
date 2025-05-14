import { Box, useTheme } from '@mui/material'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './styles.module.css'
import userSVG from '../../assets/user.svg'

const Navigation = () => {
	const theme = useTheme()
	const location = useLocation()

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
			{location.pathname !== '/map' && location.pathname !== '/profile' ? (
				<NavLink to='/login' className={`${styles.entrance} ${styles.link}`}>
					Войти
				</NavLink>
			) : (
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
