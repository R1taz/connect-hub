import { Grid2, Typography } from '@mui/material'

const Title = () => {
	return (
		<Grid2 container sx={{ mt: '120px' }}>
			<Grid2 size={12}>
				<Typography variant='h1' sx={{ fontSize: '4.5rem' }}>
					МЫ СЛЕДИМ ЗА КАЖДОЙ НИТЬЮ —
				</Typography>
			</Grid2>
			<Grid2 size={3}></Grid2>
			<Grid2 size={9}>
				<Typography variant='h2' sx={{ fontSize: '3rem' }}>
					ВАША СВЯЗЬ ВСЕГДА В ПОРЯДКЕ!
				</Typography>
			</Grid2>
		</Grid2>
	)
}

export default Title
