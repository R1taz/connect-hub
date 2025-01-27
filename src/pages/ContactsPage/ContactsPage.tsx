import { Box, Grid2, Typography, useTheme } from '@mui/material'
import DividerCustom from '../../components/ui/DividerCustom'
import planetSVG from '../../assets/planet.svg'

const ContactsPage = () => {
	const theme = useTheme()

	return (
		<Grid2 container>
			<Grid2 size={12} sx={{ display: 'flex', alignItems: 'end', mt: '120px' }}>
				<Typography variant='h3'>КОНТАКТЫ</Typography>
			</Grid2>

			<Grid2 size={3}></Grid2>
			<Grid2 size={5} sx={{ mt: 5 }}>
				<Typography sx={{ mb: 2, color: theme.palette.secondary.main }}>
					Адрес
				</Typography>
				<Typography sx={{ mb: 6 }}>Город, Улица, Дом</Typography>

				<Typography sx={{ mb: 2, color: theme.palette.secondary.main }}>
					Телефон обратной связи
				</Typography>
				<Typography sx={{ mb: 6 }}>+7 (XXX) XXX-XX-XX</Typography>

				<Typography sx={{ mb: 2, color: theme.palette.secondary.main }}>
					Эл. почта
				</Typography>
				<Typography sx={{ mb: 2 }}>@info.comX-XX-XX</Typography>
			</Grid2>

			<Grid2 size={4}>
				<img
					src={planetSVG}
					style={{
						position: 'absolute',
						right: '-80px',
						width: '35%',
					}}
				/>
			</Grid2>

			<Grid2 size={12} sx={{ mt: 25 }}>
				<DividerCustom />

				<Box
					sx={{
						mt: 5,
						mb: 3,
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<Typography>Политика коденфициальности</Typography>
					<Typography>Cookies</Typography>
				</Box>
			</Grid2>
		</Grid2>
	)
}

export default ContactsPage
