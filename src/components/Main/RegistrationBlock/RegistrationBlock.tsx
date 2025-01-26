import { Box, Grid2, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded'

const RegistrationBlock = () => {
	return (
		<Grid2 container sx={{ mt: 5 }}>
			<Grid2 size={3}>
				<Typography>Регистрация</Typography>
			</Grid2>

			<Grid2 size={4}>
				<Typography variant='body1'>
					Если у вас ещё нет аккаунта на нашем сервисе, попросите менеджера
					помочь вам с регистрацией.
				</Typography>
				<Box sx={{ display: 'flex', mt: 1 }}>
					<NavLink className={styles.entrance} to='/login'>
						<Typography
							sx={{
								display: 'inline-block',
								color: 'gray',
								marginRight: '5px',
							}}
						>
							Аккаунт создан?
						</Typography>
						Войти
					</NavLink>
				</Box>
			</Grid2>

			<Grid2 size={3}></Grid2>

			<Grid2 size={3}></Grid2>
			<Grid2 sx={{ mt: '50px', display: 'flex' }}>
				<NavLink to='/registration' className={styles.registration}>
					<Typography variant='h6'>ЗАПРОСИТЬ РЕГИСТРАЦИЮ</Typography>
					<ArrowOutwardRoundedIcon sx={{ marginLeft: 1 }} />
				</NavLink>
			</Grid2>
		</Grid2>
	)
}

export default RegistrationBlock
