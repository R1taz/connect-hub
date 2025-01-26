import { Box, Grid2, Stack, Typography } from '@mui/material'
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded'

const ReasonsCreateAccount = () => {
	return (
		<Grid2 container sx={{ mt: 25 }}>
			<Grid2 size={9}>
				<Typography sx={{ fontFamily: '"ActayWide", sans-serif' }} variant='h2'>
					Зачем вам заводить аккаунт?
				</Typography>
			</Grid2>
			<Grid2 size={3}></Grid2>
			<Grid2 size={3}></Grid2>
			<Grid2 size={5}>
				<Typography sx={{ mt: 3 }}>
					Если вы цените комфорт и удобство в использовании наших услуг, то мы
					предлагаем вам пройти регистрацию на нашем сайте.
				</Typography>
				<Stack
					gap={4}
					sx={{ mt: 5, borderLeft: '2px solid gray', paddingLeft: '10px' }}
				>
					<Typography>
						Отслеживанние состояния и поиск оптимальных опор
					</Typography>
					<Typography>
						Отправка заявки на подключение к опорам в один клик!
					</Typography>
					<Typography>Устранение нелегальных подключений к опорам</Typography>
					<Typography>
						Публикация актуальной информации для поиска новых провайдеров
					</Typography>
				</Stack>

				<Box sx={{ mt: '50px', display: 'flex' }}>
					<Typography variant='h6'>ЗАПРОСИТЬ РЕГИСТРАЦИЮ</Typography>
					<ArrowOutwardRoundedIcon sx={{ marginLeft: 1 }} />
				</Box>
			</Grid2>
		</Grid2>
	)
}

export default ReasonsCreateAccount
