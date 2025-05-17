import { Button, Stack, useTheme } from '@mui/material'
import { useApproveConnectionRequestMutation } from '../../../api/profileApi'

interface Props {
	id: number
	answer: 'pole_a_answer' | 'pole_b_answer'
	refetch: () => void
}

const ProfileRequestsButtons = ({ id, answer, refetch }: Props) => {
	const theme = useTheme()

	const [approveConnection] = useApproveConnectionRequestMutation()

	const handleApprove = async () => {
		try {
			await approveConnection({ id, answer })
			refetch()
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Stack>
			<Button
				sx={{
					margin: '5px',
					padding: '10px 40px',
					borderRadius: '0px',
					backgroundColor: 'black',
					color: 'white',
				}}
				onClick={handleApprove}
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
	)
}

export default ProfileRequestsButtons
