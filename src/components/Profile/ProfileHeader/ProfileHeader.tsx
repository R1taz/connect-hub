import { Button, Grid2, Typography, useTheme } from '@mui/material'

const ProfileHeader = () => {
	const theme = useTheme()

	return (
		<Grid2
			container
			sx={{
				alignItems: 'center',
				padding: '40px 20px',
				backgroundColor: theme.palette.primary.main,
			}}
		>
			<Grid2 size={7}></Grid2>
			<Grid2 size={3} sx={{ color: 'white' }}>
				<Typography variant='h4'>"ООО" МТС</Typography>
			</Grid2>
			<Grid2 size={1}></Grid2>
			<Grid2 size={1}>
				<Button sx={{ padding: '0px', color: 'white' }}>Выйти</Button>
			</Grid2>
		</Grid2>
	)
}

export default ProfileHeader
