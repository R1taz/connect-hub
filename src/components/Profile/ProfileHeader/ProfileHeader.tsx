import { Button, Grid2, Typography, useTheme } from '@mui/material'
import TrendingFlatRoundedIcon from '@mui/icons-material/TrendingFlatRounded'
import { useAppDispatch, useAppSelector } from '../../../hooks/react-redux'
import { clearUser } from '../../../store/slice/userSlice'
import { setAuth } from '../../../store/slice/authSlice'
import { useNavigate } from 'react-router-dom'

// типизация параметров ProfileHeader
interface Props {
	isSuperUser: boolean
}

const ProfileHeader = ({ isSuperUser }: Props) => {
	// Достаём объект темы из MaterialUI
	const theme = useTheme()

	// достаём имя нашей организации из хранилища Redux Toolkit
	const organizationName = useAppSelector(
		state => state.userSlice.user?.user_info?.organization.name
	)

	// Достаём специальную функцию из библиотеки React-Redux для обработки действий
	const dispatch = useAppDispatch()

	// если есть имя организации, то name равен ему, иначе если ты супер юзер, то ты администрация
	// иначе если ты не подтверждён, то названия нету
	const name = organizationName ? organizationName : isSuperUser ? 'Администрация' : ''

	// функция навигации из React Router Dom
	const navigate = useNavigate()

	// функция выхода
	const handleLogout = () => {
		// зануляем объект user в Redux
		dispatch(clearUser())
		// флаг авторизации делаем равным false
		dispatch(setAuth(false))
		// удаляем из хранилища браузера токен
		localStorage.removeItem('token')
		// делаем редирект на стр логина
		navigate('/login')
	}

	// Grid2 это компонент из библиотеки MaterialUI
	// он принимает size которая принимает значение столбцов в грид сетки
	// 1 Grid2 занимает все 12 столбцов
	// 2 и 3 Grid2 имеют size 3 и 9, это означает, что один занимает 3 столбца, а второй 9

	// Typography это компонент, который в зависимости от значения variants равен определённому тегу

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
