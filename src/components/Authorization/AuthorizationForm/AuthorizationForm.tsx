import { Box, TextField, Typography, useTheme } from '@mui/material'
import { Formik, ErrorMessage, Form } from 'formik'
import styles from './styles.module.css'
import { CustomButton } from '../../ui/Button'
import { NavLink, useNavigate } from 'react-router-dom'
import { useLazyAuthMeQuery, useLoginMutation } from '../../../api/authApi'
import { useAppDispatch } from '../../../hooks/react-redux'
import { setAuth } from '../../../store/slice/authSlice'
import { setUser } from '../../../store/slice/userSlice'

const AuthorizationForm = () => {
	const theme = useTheme()
	const navigate = useNavigate()

	const dispatch = useAppDispatch()
	const [login] = useLoginMutation()
	const [authMe] = useLazyAuthMeQuery()

	return (
		<Formik
			initialValues={{
				username: '',
				password: '',
			}}
			onSubmit={async (values, { setSubmitting }) => {
				try {
					const response = await login({
						username: values.username,
						password: values.password,
					}).unwrap()

					if (response.auth_token) {
						localStorage.setItem('token', response.auth_token)
						dispatch(setAuth(true))

						const user = await authMe().unwrap()
						dispatch(setUser(user))

						navigate('/map')
					}

					setSubmitting(false)
				} catch (error) {
					setSubmitting(false)
					console.error('Login failed:', error)
				}
			}}
		>
			{({ values, handleChange, handleBlur, isSubmitting }) => (
				<Form className={styles.form}>
					<TextField
						variant='standard'
						type='text'
						name='username'
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.username}
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

					<NavLink to='/recover'>
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

					<CustomButton sx={{ mt: 8, mb: 1 }} type='submit' disabled={isSubmitting}>
						Войти
					</CustomButton>

					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Typography sx={{ color: theme.palette.secondary.main }}>Нет аккаунта?</Typography>
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
