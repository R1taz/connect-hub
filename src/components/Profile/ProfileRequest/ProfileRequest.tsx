import { Box, Stack, Typography } from '@mui/material'
import { TypeOrganization } from '../../../interfaces/usersInterfaces'
import ProfileRequestButtons from './ProfileRequestButtons'
import { formatStatus } from '../../../helpers/formatStatus'
import { useAppSelector } from '../../../hooks/react-redux'

// Типизация параметров ProfileRequests
interface Props {
	street: string | string[]
	status?: number
	type?: TypeOrganization
	currentNameOrganization: string | string[]
	pillarId?: number
	answer?: 'pole_a_answer' | 'pole_b_answer'
	refetchConnectionLinks?: () => void
}

// Принимает id опоры, ответ, улицу или массив улиц, статус, тип организации, имя или имена провайдеров
// функцию перезапроса за подключёнными линиями
const ProfileRequests = ({
	pillarId,
	answer,
	street,
	status,
	type,
	currentNameOrganization,
	refetchConnectionLinks,
}: Props) => {
	// получаем из хранилища Redux значение супер юзер ли пользователь
	const isSuperUser = useAppSelector(state => state.userSlice.user?.is_superuser)
	let colorStatus = ''

	// в зависимости от статуса устанавливаем цвет
	if (status === 1) colorStatus = '#000000'
	if (status === 2) colorStatus = '#319025'
	if (status === 3) colorStatus = '#A20404'

	// Box это тоже аналог div, но который лучше подходит для адаптивности
	// Typography это компонент, который в зависимости от значения variants равен определённому тегу
	// Stack это компонент, который по умолчанию аналогичен div с display:flex и flexDirection: column
	return (
		<Stack
			sx={{
				padding: '5px',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Box>
					{/* Если у нас street это не массив, то мы выводим название улицы */}
					{!Array.isArray(street) ? (
						<Typography sx={{ fontSize: '20px' }}>{street}</Typography>
					) : (
						/* Иначе здесь мы идём по массиву и выводим улицы */
						<Stack direction='column' spacing={2}>
							{street.map((s, i) => (
								<Typography key={i} sx={{ fontSize: '20px' }}>
									{s}
								</Typography>
							))}
						</Stack>
					)}
				</Box>

				{/* Если мы электросетевая или супер юзер */}
				{(type === 'электросетевая компания' || isSuperUser) && (
					<Box>
						{/* Если у нас street это не массив, то мы выводим название организации */}
						{!Array.isArray(currentNameOrganization) ? (
							<Typography>{currentNameOrganization}</Typography>
						) : (
							/* Иначе здесь мы идём по массиву и выводим названия организаций */
							<Stack direction='column' spacing={2}>
								{currentNameOrganization.map((name, i) => (
									<Typography key={i} sx={{ fontSize: '20px' }}>
										{name}
									</Typography>
								))}
							</Stack>
						)}
					</Box>
				)}

				<Box>
					{/* Если акк подтверждён и мы магистральный провайдер, то выводим статус запроса */}
					{status && type === 'магистральный провайдер' && (
						<Typography sx={{ color: colorStatus, fontWeight: 'bold' }}>
							{formatStatus(status)}
						</Typography>
					)}

					{/* Если электросетевая компания, то выводим кнопки обработки запроса */}
					{type === 'электросетевая компания' && (
						<ProfileRequestButtons
							id={pillarId!}
							answer={answer!}
							refetch={refetchConnectionLinks!}
						/>
					)}

					{/* Если акк подтверждён и мы супер юзер, то выводим статус запроса */}
					{status && isSuperUser && (
						<Stack sx={{ alignItems: 'end' }}>
							<Typography sx={{ fontWeight: 'bold', fontSize: '18px' }}>
								Запрос на подключение
							</Typography>
							<Typography sx={{ fontSize: '17px' }}>{formatStatus(status)}</Typography>
						</Stack>
					)}
				</Box>
			</Box>
		</Stack>
	)
}

export default ProfileRequests
