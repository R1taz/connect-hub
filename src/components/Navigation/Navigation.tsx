import { Box } from '@mui/material'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'

const Navigation = () => {
	return (
		<Box sx={{ display: 'flex' }}>
			<NavLink to='/' className={styles.link}>
				Главная
			</NavLink>
			<NavLink to='/' className={styles.link}>
				О нас
			</NavLink>
			<NavLink to='/' className={styles.link}>
				Контакты
			</NavLink>
			<NavLink to='/' className={`${styles.entrance} ${styles.link}`}>
				Войти
			</NavLink>
		</Box>
	)
}

export default Navigation
