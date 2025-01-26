import { Box } from '@mui/material'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './styles.module.css'

const Navigation = () => {
	const location = useLocation()

	return (
		<Box sx={{ display: 'flex' }}>
			<NavLink to='/' className={styles.link}>
				Главная
			</NavLink>
			{location.pathname !== '/login' &&
				location.pathname !== '/registration' && (
					<NavLink to='/' className={styles.link}>
						О нас
					</NavLink>
				)}
			{location.pathname !== '/login' &&
				location.pathname !== '/registration' && (
					<NavLink to='/' className={styles.link}>
						Контакты
					</NavLink>
				)}
			<NavLink to='/' className={`${styles.entrance} ${styles.link}`}>
				Войти
			</NavLink>
		</Box>
	)
}

export default Navigation
