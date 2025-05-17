import { Box, Stack, Typography } from '@mui/material'
import { TypeOrganization } from '../../../interfaces/usersInterfaces'
import ProfileRequestButtons from './ProfileRequestButtons'
import { formatStatus } from '../../../helpers/formatStatus'
import { useAppSelector } from '../../../hooks/react-redux'

interface Props {
	street: string
	status?: number
	type?: TypeOrganization
	currentNameOrganization: string
	pillarId?: number
	answer?: 'pole_a_answer' | 'pole_b_answer'
	refetchConnectionLinks?: () => void
}

const ProfileRequests = ({
	pillarId,
	answer,
	street,
	status,
	type,
	currentNameOrganization,
	refetchConnectionLinks,
}: Props) => {
	const isSuperUser = useAppSelector(state => state.userSlice.user?.is_superuser)
	let colorStatus = ''

	if (status === 1) colorStatus = '#000000'
	if (status === 2) colorStatus = '#319025'
	if (status === 3) colorStatus = '#A20404'

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
				<Box sx={{ width: '25%' }}>
					<Typography sx={{ fontSize: '20px' }}>{street.toUpperCase()}</Typography>
					{/* <Typography>{location}</Typography> */}
				</Box>

				{type === 'электросетевая компания' && (
					<Typography>{currentNameOrganization.toUpperCase()}</Typography>
				)}

				<Box>
					{status && type === 'магистральный провайдер' && (
						<Typography sx={{ color: colorStatus, fontWeight: 'bold' }}>
							{formatStatus(status)}
						</Typography>
					)}

					{type === 'электросетевая компания' && (
						<ProfileRequestButtons
							id={pillarId!}
							answer={answer!}
							refetch={refetchConnectionLinks!}
						/>
					)}

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
