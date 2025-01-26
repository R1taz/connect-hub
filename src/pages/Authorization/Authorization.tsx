import { Grid2, Typography } from '@mui/material'
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded'
import AuthorizationForm from '../../components/Authorization/AuthorizationForm/AuthorizationForm'

const Authorization = () => {
	return (
		<Grid2 container>
			<Grid2 size={12} sx={{ display: 'flex', alignItems: 'end', mt: '120px' }}>
				<Typography variant='h3'>ВОЙТИ</Typography>
				<ArrowOutwardRoundedIcon sx={{ marginLeft: 1, fontSize: '65px' }} />
			</Grid2>

			<Grid2 size={3}></Grid2>
			<Grid2 size={5} sx={{ mt: 5 }}>
				<Typography sx={{ mb: 2 }}>Благодарим за выбор нас!</Typography>
				<Typography>
					Это позволит вам сохранить контроль над вашей связью и всегда быть в
					курсе последних обновлений.
				</Typography>

				<AuthorizationForm />
			</Grid2>
		</Grid2>
	)
}

export default Authorization
