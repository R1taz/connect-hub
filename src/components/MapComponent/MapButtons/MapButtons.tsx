import { Grid2, Typography } from '@mui/material'
import { TypeOrganization } from '../../../interfaces/usersInterfaces'
import { CustomButton } from '../../ui/Button'
import { useAppDispatch, useAppSelector } from '../../../hooks/react-redux'
import { useSendConnectionRequestMutation } from '../../../api/profileApi'
import { addConnection } from '../../../store/slice/profileSlice'
import { handleSubmitRequest } from '../../../helpers/handleSubmitRequest'
import { IConnection } from '../../../interfaces/profileInterfaces'
import { IConnectionLink } from '../../../interfaces/mapInterfaces'

interface Props {
	type: TypeOrganization
	selectedLinks: number[]
	setSelectedLinks: React.Dispatch<React.SetStateAction<number[]>>
	isSetData: boolean
	connectionLinks: IConnectionLink[]
	setIsSetData: () => void
	refetchConnectionLinks: () => void
}

const MapButtons = ({
	type,
	selectedLinks,
	connectionLinks,
	isSetData,
	setSelectedLinks,
	setIsSetData,
	refetchConnectionLinks,
}: Props) => {
	const acceptStatus = useAppSelector(state => state.userSlice.user?.user_info?.accept_status)
	const dispatch = useAppDispatch()

	const [sendConnectRequest] = useSendConnectionRequestMutation()

	return (
		<>
			{type === 'электросетевая компания' && acceptStatus === 'Принято' && (
				<Grid2 container sx={{ marginBottom: 15 }}>
					<Grid2 size={8}>
						<Typography variant='h4'>
							{isSetData ? 'Кликнете на карту, чтобы выбрать место опоры' : ''}
						</Typography>
					</Grid2>
					<Grid2 size={4}>
						<CustomButton onClick={setIsSetData} sx={{ width: '100%', padding: '25px 20px' }}>
							{isSetData ? 'ОТМЕНИТЬ ДОБАВЛЕНИЕ' : 'ДОБАВИТЬ ОПОРУ'}
						</CustomButton>
					</Grid2>
				</Grid2>
			)}

			{type === 'магистральный провайдер' && acceptStatus === 'Принято' && (
				<Grid2 container sx={{ marginBottom: 15 }}>
					<Grid2 size={7}>
						<Typography variant='h4'>
							{isSetData ? 'Кликайте на линии, чтобы выбрать их' : ''}
						</Typography>
					</Grid2>
					<Grid2 size={1}></Grid2>
					<Grid2 size={4}>
						<CustomButton
							sx={{
								width: '100%',
								padding: '25px 20px',
								background: isSetData ? 'white' : 'black',
								color: isSetData ? 'black' : 'white',
								border: isSetData ? 'black solid 2px' : 'none',
								mb: 2,
							}}
							onClick={() => {
								if (isSetData) setSelectedLinks([])
								setIsSetData()
							}}
						>
							{isSetData ? 'ОТМЕНИТЬ ПОДКЛЮЧЕНИЕ' : 'ВЫБРАТЬ ОПОРЫ НА ПОДКЛЮЧЕНИЕ'}
						</CustomButton>
						{isSetData && (
							<CustomButton
								sx={{ width: '100%', padding: '25px 20px' }}
								onClick={async () => {
									await handleSubmitRequest({
										selectedLinks,
										setSelectedLinks,
										connectionLinks,
										addConnection: (connect: IConnection) => dispatch(addConnection(connect)),
										sendConnectRequest,
										refetchConnectionLinks,
									})
									setIsSetData()
								}}
							>
								ОТПРАВИТЬ ЗАПРОС НА ПОДКЛЮЧЕНИЕ
							</CustomButton>
						)}
					</Grid2>
				</Grid2>
			)}
		</>
	)
}

export default MapButtons
