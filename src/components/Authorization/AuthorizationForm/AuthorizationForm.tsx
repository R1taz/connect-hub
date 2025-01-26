import { Box, TextField, Typography, useTheme } from '@mui/material'
import { Formik, ErrorMessage, Form } from 'formik'
import styles from './styles.module.css'
import { CustomButton } from '../../ui/Button'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { entranceSchema } from '../../../helpers/validateEntrance'
import { BASE_URL } from '../../../constants/constants'

const AuthorizationForm = () => {
	const theme = useTheme()
	const navigate = useNavigate()

	return (
		<Formik
			initialValues={{
				login: '',
				password: '',
			}}
			validationSchema={entranceSchema}
			onSubmit={async (values, { setSubmitting }) => {
				const response = await axios.post(`${BASE_URL}/login`, values)

				if (response.data.result_code) {
					if (response.data.role === 1) {
						console.log(1)
					}
					if (response.data.role === 2) {
						console.log(2)
					}
					if (response.data.role === 3) {
						console.log(3)
					}
					navigate('/')
				} else {
					alert('ошибка')
				}

				console.log(values)
				setSubmitting(false)
			}}
		>
			{({ values, handleChange, handleBlur, isSubmitting }) => (
				<Form className={styles.form}>
					<TextField
						variant='standard'
						type='text'
						name='login'
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.login}
						sx={{
							my: 4,
							display: 'block',
							'& .MuiInputBase-root': { width: '100%' },
						}}
						placeholder='ЛОГИН'
					/>
					<ErrorMessage name='name' component='div' />

					<TextField
						variant='standard'
						type='password'
						name='password'
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.password}
						sx={{
							my: 4,
							display: 'block',
							'& .MuiInputBase-root': { width: '100%' },
						}}
						placeholder='ПАРОЛЬ'
					/>
					<ErrorMessage name='telephone' component='div' />

					<NavLink to=''>
						<Typography
							sx={{
								display: 'inline-block',
								color: theme.palette.secondary.main,
							}}
						>
							Забыли пароль?
						</Typography>{' '}
						<Typography
							sx={{
								color: theme.palette.secondary.main,
								display: 'inline-block',
								textDecoration: 'none',
								borderBottom: '1px solid',
								borderColor: theme.palette.secondary.main,
								paddingBottom: '0.1px',
							}}
						>
							Восстановить
						</Typography>
					</NavLink>

					<CustomButton
						sx={{ mt: 8, mb: 1 }}
						type='submit'
						disabled={isSubmitting}
					>
						Войти
					</CustomButton>

					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Typography sx={{ color: theme.palette.secondary.main }}>
							Нет аккаунта?
						</Typography>
						<NavLink
							to='/registration'
							style={{
								marginLeft: '4px',
								color: theme.palette.primary.main,
							}}
						>
							Запросить аккаунт
						</NavLink>
					</Box>
				</Form>
			)}
		</Formik>
	)
}

export default AuthorizationForm
