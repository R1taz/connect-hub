import { ErrorMessage, Form, Formik } from 'formik'
import styles from './styles.module.css'
import { TextField } from '@mui/material'
import { CustomButton } from '../../ui/Button'
import { useAddPillarMutation } from '../../../api/mapApi'
import { useAppDispatch } from '../../../hooks/react-redux'
import { addPillar } from '../../../store/slice/mapSlice'
import { useLazyGetOrganizationByIdQuery } from '../../../api/authApi'
import { IOrganization } from '../../../interfaces/authInterfaces'

interface Props {
	coords: [number, number]
	ownerId: number
	organizations: IOrganization[]
	onClose: () => void
}

const MapForm = ({ coords, onClose, ownerId, organizations }: Props) => {
	const [addPillarFn] = useAddPillarMutation()
	const [getOrganization] = useLazyGetOrganizationByIdQuery()
	const dispatch = useAppDispatch()

	return (
		<Formik
			initialValues={{
				street: '',
				building: '',
				index: '',
				maxConnection: '',
			}}
			onSubmit={async (values, { setSubmitting }) => {
				try {
					if (values.maxConnection === '' || values.building === '' || values.street == '') return

					const { data: newPillar } = await addPillarFn({
						longitude: +coords[0].toFixed(6),
						latitude: +coords[1].toFixed(6),
						street: values.street,
						building: +values.building,
						index: values.index,
						max_connections: +values.maxConnection,
						owner_id: ownerId,
					})

					console.log(newPillar)

					if (newPillar) {
						const ownerId = organizations.find(org => org.name === newPillar.owner.name)
						const { data: organization } = await getOrganization(ownerId?.id!)
						if (organization)
							dispatch(
								addPillar({
									...newPillar,
									longitude: String(newPillar.longitude),
									latitude: String(newPillar.latitude),
									owner: {
										email: organization.email,
										name: organization.name,
										phone: organization.phone,
									},
								})
							)
					}

					onClose()
					setSubmitting(false)
				} catch (error) {
					setSubmitting(false)
					console.log(error)
					onClose()
				}
			}}
		>
			{({ values, handleChange, handleBlur, isSubmitting }) => (
				<Form className={styles.form}>
					<TextField
						variant='standard'
						type='text'
						name='street'
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.street}
						sx={{
							my: 4,
							display: 'block',
							'& .MuiInputBase-root': { width: '100%' },
						}}
						placeholder='Улицу'
					/>
					<ErrorMessage name='street' component='div' />

					<TextField
						variant='standard'
						type='text'
						name='building'
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.building}
						sx={{
							my: 4,
							display: 'block',
							'& .MuiInputBase-root': { width: '100%' },
						}}
						placeholder='Дом'
					/>
					<ErrorMessage name='building' component='div' />

					<TextField
						variant='standard'
						type='text'
						name='index'
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.index}
						sx={{
							my: 4,
							display: 'block',
							'& .MuiInputBase-root': { width: '100%' },
						}}
						placeholder='Индекс дома'
					/>
					<ErrorMessage name='index' component='div' />

					<TextField
						variant='standard'
						type='text'
						name='maxConnection'
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.maxConnection}
						sx={{
							my: 4,
							display: 'block',
							'& .MuiInputBase-root': { width: '100%' },
						}}
						placeholder='Максимальное количество подключений'
					/>
					<ErrorMessage name='maxConnection' component='div' />

					<CustomButton
						sx={{ width: '100%', padding: '20px', mt: 3 }}
						type='submit'
						disabled={isSubmitting}
					>
						ОТПРАВИТЬ ЗАПРОС НА ПОДКЛЮЧЕНИЕ
					</CustomButton>
					<CustomButton
						sx={{
							width: '100%',
							padding: '20px',
							background: 'white',
							color: 'black',
							border: 'black solid 2px',
							mt: 2,
						}}
						type='submit'
						disabled={isSubmitting}
						onClick={onClose}
					>
						ОТМЕНИТЬ ДОБАВЛЕНИЕ
					</CustomButton>
				</Form>
			)}
		</Formik>
	)
}

export default MapForm
