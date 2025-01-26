import { Box, Divider, Grid2, Stack, Typography } from '@mui/material'
import logoSVG from '../../../assets/logo.svg'
import styles from './styles.module.css'

const Footer = () => {
	return (
		<>
			<Grid2 container sx={{ mt: 30 }}>
				<Grid2 size={3}>
					<img src={logoSVG} className={styles.logo} alt='logo' />
				</Grid2>

				<Grid2 size={4}>
					<Typography>Навигация</Typography>

					<Stack>
						<Typography>Главная</Typography>
						<Typography>О нас</Typography>
						<Typography>Контакты</Typography>
					</Stack>

					<Typography>Адрес</Typography>
					<Typography>1 rue du mail, 75002, Paris, France</Typography>
				</Grid2>

				<Grid2 size={4}>
					<Typography>media@info.com</Typography>
					<Typography>
						Вы также можете связаться с нами по электронной почте!
					</Typography>
				</Grid2>

				<Grid2 size={1}></Grid2>
			</Grid2>

			<Divider
				sx={{
					mt: 6,
					mb: 3,
				}}
			/>

			<Box
				sx={{ mt: 5, mb: 3, display: 'flex', justifyContent: 'space-between' }}
			>
				<Typography>Политика коденфициальности</Typography>
				<Typography>Cookies</Typography>
			</Box>
		</>
	)
}

export default Footer
