import { Box, Typography, useTheme } from '@mui/material'
import { useAppSelector } from '../../../hooks/react-redux'

const ProfileTitle = () => {
	const role = useAppSelector(state => state.authSlice.role)
	const theme = useTheme()

	return (
		<Box sx={{ mt: 12, display: 'flex', justifyContent: 'space-between' }}>
			<Typography variant='h4'>ЗАПРОСЫ НА ПОДСОЕДИНЕНИЕ</Typography>

			{role === 1 && (
				<Typography sx={{ color: theme.palette.secondary.main }}>
					статус
				</Typography>
			)}
		</Box>
	)
}

export default ProfileTitle
