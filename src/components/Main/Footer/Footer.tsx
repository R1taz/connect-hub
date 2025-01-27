import { Box, Divider, Grid2, Stack, Typography, useTheme } from '@mui/material'
import logoSVG from '../../../assets/logo.svg'
import styles from './styles.module.css'
import DividerCustom from '../../ui/DividerCustom'

const Footer = () => {
	const theme = useTheme()

	return (
		<>
			<Grid2 container sx={{ mt: 30 }}>
				<Grid2 size={3}>
					<img src={logoSVG} className={styles.logo} alt='logo' />
				</Grid2>

				<Grid2 size={4}>
					<Typography sx={{ color: theme.palette.secondary.main }}>
						Навигация
					</Typography>

					<Stack sx={{ mt: 2 }}>
						<Typography>Главная</Typography>
						<Typography>О нас</Typography>
						<Typography>Контакты</Typography>
					</Stack>

					<Typography sx={{ mt: 3, color: theme.palette.secondary.main }}>
						Адрес
					</Typography>
					<Typography sx={{ mt: 1 }}>Город, Улица, Дом</Typography>
				</Grid2>

				<Grid2 size={4}>
					<Typography>XXX@info.com</Typography>
					<Typography sx={{ mt: 1 }}>
						Вы также можете связаться с нами по электронной почте!
					</Typography>
				</Grid2>

				<Grid2 size={1}></Grid2>
			</Grid2>

			<DividerCustom />

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
