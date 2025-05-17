import { Button, Grid2, Typography, useTheme } from '@mui/material'
import TrendingFlatRoundedIcon from '@mui/icons-material/TrendingFlatRounded'
import { useAppDispatch, useAppSelector } from '../../../hooks/react-redux'
import { clearUser } from '../../../store/slice/userSlice'
import { setAuth } from '../../../store/slice/authSlice'
import { useNavigate } from 'react-router-dom'

interface Props {
	isSuperUser: boolean
}

const ProfileHeader = ({ isSuperUser }: Props) => {
	const theme = useTheme()

	const organizationName = useAppSelector(
		state => state.userSlice.user?.user_info?.organization.name
	)
	const dispatch = useAppDispatch()

	const name = organizationName ? organizationName : isSuperUser ? 'Администрация' : ''

	const navigate = useNavigate()

	const handleLogout = () => {
		dispatch(clearUser())
		dispatch(setAuth(false))
		localStorage.removeItem('token')
		navigate('/login')
	}

	return (
		<Grid2
			container
			sx={{
				alignItems: 'center',
				padding: '40px 20px',
				backgroundColor: theme.palette.primary.main,
			}}
		>
			<Grid2 size={0}></Grid2>
			<Grid2 size={10} sx={{ color: 'white' }}>
				<Typography variant='h4'>{name}</Typography>
			</Grid2>
			<Grid2 size={1}></Grid2>
			<Grid2 size={1}>
				<Button sx={{ padding: '0px', color: 'white' }} onClick={handleLogout}>
					<Typography component='span'>Выйти</Typography>
					<TrendingFlatRoundedIcon sx={{ marginLeft: '10px' }} />
				</Button>
			</Grid2>
		</Grid2>
	)
}

export default ProfileHeader
