import { Box, Typography, useTheme } from '@mui/material'
import { AcceptStatus, TypeOrganization } from '../../../interfaces/usersInterfaces'

interface Props {
	type: TypeOrganization
	acceptStatus: AcceptStatus | undefined
	isSuperUser: boolean
}

const ProfileTitle = ({ type, acceptStatus, isSuperUser }: Props) => {
	// Здесь мы из хранилища Redux Toolkit достаём тип организации
	const theme = useTheme()

	// если аккаунт подтверждён, то status равен ему, иначе если ты супер юзер, то status равен
	// принято, иначе если ты не подтверждён, то status равен ожидание
	const status = acceptStatus ? acceptStatus : isSuperUser ? 'Принято' : 'Ожидание'

	let colorStatus

	// в зависимости от статуса подтверждённости выбирается цвет
	if (acceptStatus && acceptStatus === 'Ожидание') colorStatus = '#000000'
	if ((acceptStatus && acceptStatus === 'Принято') || isSuperUser) colorStatus = '#319025'
	if (acceptStatus && acceptStatus === 'Отклонено') colorStatus = '#A20404'

	// Box это тоже аналог div, но который лучше подходит для адаптивности
	// Typography это компонент, который в зависимости от значения variants равен определённому тегу
	return (
		<>
			<Box sx={{ mt: 6, display: 'flex' }}>
				<Typography variant='h4' sx={{ my: 5 }}>
					Статус подтверждения аккаунта:{' '}
				</Typography>
				<Typography variant='h4' sx={{ ml: 2, my: 5, display: 'inline-block', color: colorStatus }}>
					{status}
				</Typography>
			</Box>

			{/* Если ты подтверждён или супер юзер, то ты можешь видеть запросы на подключение */}
			{(acceptStatus || isSuperUser) && (
				<Box sx={{ mt: 6, display: 'flex', justifyContent: 'space-between' }}>
					<Typography variant='h4'>ЗАПРОСЫ НА ПОДСОЕДИНЕНИЕ</Typography>

					{type === 'магистральный провайдер' && (
						<Typography sx={{ color: theme.palette.secondary.main }}>статус</Typography>
					)}
				</Box>
			)}
		</>
	)
}

export default ProfileTitle
