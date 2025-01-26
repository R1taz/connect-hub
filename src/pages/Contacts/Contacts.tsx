import { Box, Divider, Grid2, Typography } from '@mui/material'

const Contacts = () => {
	return (
		<Grid2 container>
			<Grid2 size={12} sx={{ display: 'flex', alignItems: 'end', mt: '120px' }}>
				<Typography variant='h3'>ВОЙТИ</Typography>
			</Grid2>

			<Grid2 size={3}></Grid2>
			<Grid2 size={5} sx={{ mt: 5 }}>
				<Typography sx={{ mb: 2 }}>Адрес</Typography>
				<Typography sx={{ mb: 6 }}>Город, Улица, Дом</Typography>

				<Typography sx={{ mb: 2 }}>Телефон обратной связи</Typography>
				<Typography sx={{ mb: 6 }}>+7 (XXX) XXX-XX-XX</Typography>

				<Typography sx={{ mb: 2 }}>Эл. почта</Typography>
				<Typography sx={{ mb: 2 }}>@info.comX-XX-XX</Typography>

				<Divider sx={{ mt: 7 }}></Divider>

				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Typography>Политика коденфициальности</Typography>
					<Typography>Cookies</Typography>
				</Box>
			</Grid2>
		</Grid2>
	)
}

export default Contacts
