import { Box, Button, Stack, Typography, useTheme } from '@mui/material'

interface Props {
	street: string
	location: [number, number]
	status: string
	role: number
	currentNameOrganization: string
}

const ProfileSupports = ({
	street,
	location,
	status,
	role,
	currentNameOrganization,
}: Props) => {
	let colorStatus = ''
	const theme = useTheme()

	if (status === 'Принято') colorStatus = '#319025'
	if (status === 'Отклонено') colorStatus = '#A20404'
	if (status === 'Ожидание') colorStatus = '#000000'

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
					<Typography sx={{ fontSize: '20px' }}>{street}</Typography>
					<Typography>{location}</Typography>
				</Box>
				{role !== 1 && <Typography>{currentNameOrganization}</Typography>}
				<Box>
					{role === 1 && (
						<Typography sx={{ color: colorStatus }}>{status}</Typography>
					)}
					{role === 2 && (
						<Stack>
							<Button
								sx={{
									margin: '5px',
									padding: '10px 40px',
									borderRadius: '0px',
									backgroundColor: 'black',
									color: 'white',
								}}
							>
								Принять
							</Button>
							<Button
								sx={{
									margin: '5px',
									padding: '10px 40px',
									borderRadius: '0px',
									backgroundColor: theme.palette.secondary.main,
									color: 'white',
								}}
							>
								Отклонить
							</Button>
						</Stack>
					)}
					{role === 3 && (
						<Stack>
							<Typography sx={{ fontWeight: 'bold' }}>
								Запрос на подключение
							</Typography>
							<Typography>Ожидание</Typography>
						</Stack>
					)}
				</Box>
			</Box>
		</Stack>
	)
}

export default ProfileSupports
