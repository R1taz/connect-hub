import { Box, Typography, useTheme } from '@mui/material'
import { AcceptStatus, TypeOrganization } from '../../../interfaces/usersInterfaces'

interface Props {
	type: TypeOrganization
	acceptStatus: AcceptStatus | undefined
	isSuperUser: boolean
}

const ProfileTitle = ({ type, acceptStatus, isSuperUser }: Props) => {
	const theme = useTheme()

	const status = acceptStatus ? acceptStatus : isSuperUser ? 'Принято' : 'Ожидание'
	let colorStatus

	if (acceptStatus && acceptStatus === 'Ожидание') colorStatus = '#000000'
	if ((acceptStatus && acceptStatus === 'Принято') || isSuperUser) colorStatus = '#319025'
	if (acceptStatus && acceptStatus === 'Отклонено') colorStatus = '#A20404'

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
