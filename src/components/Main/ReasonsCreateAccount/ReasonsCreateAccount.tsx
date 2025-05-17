import { Box, Grid2, Stack, Typography, useTheme } from '@mui/material'
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded'
import { NavLink } from 'react-router-dom'
import planetSVG from '../../../assets/planet.svg'

const ReasonsCreateAccount = () => {
	// Достаём объект темы из MaterialUI
	const theme = useTheme()

	// Grid2 это компонент из библиотеки MaterialUI
	// он принимает size которая принимает значение столбцов в грид сетки
	// Grid2 с атрибутом container это обёртка контейнер, которая задаёт определённые стили
	// для всей грид сетки

	// Typography это компонент, который в зависимости от значения variants равен определённому тегу
	return (
		<Grid2 container sx={{ mt: 25 }}>
			<Grid2 size={{ lg: 6, md: 6, xs: 12 }}>
				<Typography
					sx={{ fontFamily: '"ActayWide", sans-serif', fontSize: { xs: '24px', md: '42px' } }}
					variant='h2'
				>
					ЗАЧЕМ ВАМ ЗАВОДИТЬ АККАУНТ?
				</Typography>
			</Grid2>
			<Grid2 size={6}></Grid2>
			<Grid2 size={{ lg: 3.5, md: 3.5, xs: 0 }}></Grid2>
			<Grid2 size={{ lg: 4.8, md: 4.8, xs: 8 }}>
				<Typography sx={{ mt: 3 }}>
					Если вы цените комфорт и удобство в использовании наших услуг, то мы предлагаем вам{' '}
					<NavLink to='/registration' style={{ color: theme.palette.primary.main }}>
						пройти регистрацию
					</NavLink>{' '}
					на нашем сайте.
				</Typography>
				<Stack
					gap={4}
					sx={{
						mt: 5,
						borderLeftWidth: '2px',
						borderLeftColor: theme.palette.secondary.main,
						borderLeftStyle: 'solid',
						paddingLeft: '10px',
					}}
				>
					<Typography>Отслеживанние состояния и поиск оптимальных опор</Typography>
					<Typography>Отправка заявки на подключение к опорам в один клик!</Typography>
					<Typography>Устранение нелегальных подключений к опорам</Typography>
					<Typography>Публикация актуальной информации для поиска новых провайдеров</Typography>
				</Stack>

				<Box sx={{ mt: '50px', display: 'flex' }}>
					<NavLink to='/registration'>
						<Typography variant='h6'>ЗАПРОСИТЬ РЕГИСТРАЦИЮ</Typography>
					</NavLink>
					<ArrowOutwardRoundedIcon sx={{ marginLeft: 1, fontSize: 30 }} />
				</Box>
			</Grid2>

			<img
				src={planetSVG}
				style={{
					position: 'absolute',
					right: '-60px',
					width: '35%',
				}}
			/>
		</Grid2>
	)
}

export default ReasonsCreateAccount
