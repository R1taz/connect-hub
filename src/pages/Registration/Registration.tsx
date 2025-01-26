import { Grid2, Typography } from '@mui/material'
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded'
import Form from '../../components/Registration/Form/Form'

const Registration = () => {
	return (
		<Grid2 container>
			<Grid2 size={12} sx={{ display: 'flex', alignItems: 'end', mt: '120px' }}>
				<Typography variant='h3'>ЗАПРОСИТЬ РЕГИСТРАЦИЮ</Typography>
				<ArrowOutwardRoundedIcon sx={{ marginLeft: 1, fontSize: '65px' }} />
			</Grid2>

			<Grid2 size={3}></Grid2>
			<Grid2 size={5} sx={{ mt: 5 }}>
				<Typography sx={{ mb: 2 }}>
					Регистрация занимает несколько минут.
				</Typography>
				<Typography>
					Укажите свои контактные данные, мы свяжемся с вами, чтобы обсудить все
					детали и ответить на любые возникшие вопросы.
				</Typography>

				<Form />
			</Grid2>
		</Grid2>
	)
}

export default Registration
