import { Grid2, Typography } from '@mui/material'
import { TypeOrganization } from '../../../interfaces/usersInterfaces'
import { CustomButton } from '../../ui/Button'
import { useAppDispatch, useAppSelector } from '../../../hooks/react-redux'
import { useSendConnectionRequestMutation } from '../../../api/profileApi'
import { addConnection } from '../../../store/slice/profileSlice'
import { handleSubmitRequest } from '../../../helpers/handleSubmitRequest'
import { IConnection } from '../../../interfaces/profileInterfaces'
import { IConnectionLink } from '../../../interfaces/mapInterfaces'

// типизация параметров MapButtons
interface Props {
	type: TypeOrganization
	selectedLinks: number[]
	setSelectedLinks: React.Dispatch<React.SetStateAction<number[]>>
	isSetData: boolean
	connectionLinks: IConnectionLink[]
	setIsSetData: () => void
	refetchConnectionLinks: () => void
}

// принимает тип организации, выбранные линии, подключённые линии, состояние изменения данных,
// функцию установки изменения данных, функцию добавления в выбранные ссылки, функцию перезапроса
// за подключёнными ссылками
const MapButtons = ({
	type,
	selectedLinks,
	connectionLinks,
	isSetData,
	setSelectedLinks,
	setIsSetData,
	refetchConnectionLinks,
}: Props) => {
	// получаем статус подтверждённости акканута
	const acceptStatus = useAppSelector(state => state.userSlice.user?.user_info?.accept_status)

	// Достаём специальную функцию из библиотеки React-Redux для обработки действий
	const dispatch = useAppDispatch()

	// Вызываем функцию из библиотеки Redux Toolkit Query, которая отдаёт нам функцию
	// отправки запроса на подключение
	const [sendConnectRequest] = useSendConnectionRequestMutation()

	// Grid2 это компонент из библиотеки MaterialUI
	// он принимает size которая принимает значение столбцов в грид сетки
	// Grid2 с атрибутом container это обёртка контейнер, которая задаёт определённые стили
	// для всей грид сетки

	return (
		<>
			{/* если ты электросетевая компания и аккаунт подтверждён, ты видишь эти кнопки */}
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

			{/* если ты магистральный провайдер и аккаунт подтверждён, ты видишь эти кнопки */}
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
								{
									/* Если состояние изменения данных = true,
									то массив выбранных линий становится пустым */
								}
								if (isSetData) setSelectedLinks([])
								// и состояние изменения данных мы меняем на false
								setIsSetData()
							}}
						>
							{/* Если состояние изменения данных = true, то отображается первая фраза, иначе вторая */}
							{isSetData ? 'ОТМЕНИТЬ ПОДКЛЮЧЕНИЕ' : 'ВЫБРАТЬ ОПОРЫ НА ПОДКЛЮЧЕНИЕ'}
						</CustomButton>

						{/* Если состояние изменения данных = true */}
						{isSetData && (
							<CustomButton
								sx={{ width: '100%', padding: '25px 20px' }}
								onClick={async () => {
									/* Здесь вызывается функция которая отправляет наш запрос */
									await handleSubmitRequest({
										selectedLinks,
										setSelectedLinks,
										connectionLinks,
										addConnection: (connect: IConnection) => dispatch(addConnection(connect)),
										sendConnectRequest,
										refetchConnectionLinks,
									})
									// состояние изменения данных мы меняем на false
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
