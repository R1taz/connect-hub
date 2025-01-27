import { Grid2, Typography } from '@mui/material'
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded'
import RecoverForm from '../../components/RecoverPassword/RecoverForm/RecoverForm'

const RecoverPasswordPage = () => {
	return (
		<Grid2 container sx={{ mb: 10 }}>
			<Grid2 size={6} sx={{ mt: '120px' }}>
				<Typography variant='h3' sx={{ display: 'inline-block' }}>
					ВОССТАНОВИТЬ
				</Typography>
				<ArrowOutwardRoundedIcon sx={{ marginLeft: 1, fontSize: '50px' }} />{' '}
				<Typography variant='h3'>ПАРОЛЬ</Typography>
			</Grid2>

			<Grid2 size={6}></Grid2>
			<Grid2 size={3}></Grid2>
			<Grid2 size={4.7} sx={{ mt: 5 }}>
				<Typography sx={{ mb: 2 }}>
					Укажите эл. почту, на которую зарегистрирован аккаунт, мы вышлем Ваши
					логин и пароль
				</Typography>

				<RecoverForm />
			</Grid2>
		</Grid2>
	)
}

export default RecoverPasswordPage
