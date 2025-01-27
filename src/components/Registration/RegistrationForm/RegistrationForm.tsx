import { Box, TextField, Typography, useTheme } from '@mui/material'
import { Formik, ErrorMessage, Form } from 'formik'
import styles from './styles.module.css'
import { useState } from 'react'
import { CustomButton } from '../../ui/Button'
import ArrowDownSVG from '../../../assets/arrowDown.svg'
import ArrowTopSVG from '../../../assets/arrowTop.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import СonsentСheckbox from '../../ui/СonsentСheckbox'
import axios from 'axios'
import { BASE_URL } from '../../../constants/constants'
import { setLoginAndPass } from '../../../store/slice/authSlice'
import { useAppDispatch } from '../../../hooks/react-redux'

const RegistrationForm = () => {
	const theme = useTheme()
	const [open, setOpen] = useState(false)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	return (
		<Formik
			initialValues={{
				name: '',
				type: '',
				telephone: '',
				email: '',
			}}
			onSubmit={async (values, { setSubmitting }) => {
				try {
					const response = await axios.post<{
						login: string
						password: string
						result_code: number
					}>(`${BASE_URL}/register`)

					if (response.data.result_code === 0) {
						dispatch(setLoginAndPass(response.data))
						navigate('/map')
					}

					setSubmitting(false)
				} catch (error) {
					setSubmitting(false)
				}
			}}
		>
			{({ values, handleChange, handleBlur, isSubmitting }) => (
				<Form className={styles.form}>
					<TextField
						variant='standard'
						type='text'
						name='name'
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.name}
						sx={{
							my: 4,
							display: 'block',
							'& .MuiInputBase-root': { width: '100%' },
						}}
						placeholder='НАИМЕНОВАНИЕ ОРГАНИЗАЦИИ'
					/>
					<ErrorMessage name='name' component='div' />

					<TextField
						variant='standard'
						type='type'
						name='type'
						InputProps={{
							readOnly: true,
							endAdornment: open ? (
								<img src={ArrowTopSVG} />
							) : (
								<img src={ArrowDownSVG} />
							),
						}}
						onClick={() => setOpen(prev => !prev)}
						sx={{
							my: 4,
							display: 'block',
							'& .MuiInputBase-root': { width: '100%' },
							'& .MuiInputBase-root input': {
								transform: 'rotate(180)',
								width: '100%',
								cursor: 'default',
							},
						}}
						placeholder='ТИП ОРГАНИЗАЦИИ'
					/>
					<ErrorMessage name='type' component='div' />

					{open && (
						<>
							<TextField
								variant='standard'
								type='text'
								name='type'
								value={values.type}
								sx={{
									my: 4,
									display: 'block',
									'& .MuiInputBase-root': { width: '100%' },
								}}
								placeholder='СЕТЕВОЙ ПРОВАЙДЕР'
							/>

							<TextField
								variant='standard'
								type='text'
								name='type'
								value={values.type}
								sx={{
									my: 4,
									display: 'block',
									'& .MuiInputBase-root': { width: '100%' },
								}}
								placeholder='МАГИСТРАЛЬНЫЙ ПРОВАЙДЕР'
							/>
						</>
					)}

					<TextField
						variant='standard'
						type='telephone'
						name='telephone'
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.telephone}
						sx={{
							my: 4,
							display: 'block',
							'& .MuiInputBase-root': { width: '100%' },
						}}
						placeholder='ТЕЛЕФОН ОБРАТНОЙ СВЯЗИ'
					/>
					<ErrorMessage name='telephone' component='div' />

					<TextField
						variant='standard'
						type='email'
						name='email'
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.email}
						sx={{
							my: 2,
							display: 'block',
							'& .MuiInputBase-root': { width: '100%' },
						}}
						placeholder='EMAIL'
					/>
					<ErrorMessage name='email' component='div' />

					<СonsentСheckbox />

					<CustomButton
						sx={{ mt: 5, mb: 1 }}
						type='submit'
						disabled={isSubmitting}
					>
						Отправить
					</CustomButton>

					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Typography
							sx={{
								display: 'inline-block',
								color: theme.palette.secondary.main,
							}}
						>
							Аккаунт создан?
						</Typography>
						<NavLink
							to='/login'
							style={{ marginLeft: '4px', color: theme.palette.primary.main }}
						>
							Войти
						</NavLink>
					</Box>
				</Form>
			)}
		</Formik>
	)
}

export default RegistrationForm
