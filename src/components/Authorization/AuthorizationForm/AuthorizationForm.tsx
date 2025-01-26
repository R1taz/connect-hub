import { Box, TextField, Typography } from '@mui/material'
import { Formik, ErrorMessage, Form } from 'formik'
import styles from './styles.module.css'
import { CustomButton } from '../../ui/Button'
import { NavLink } from 'react-router-dom'

const AuthorizationForm = () => {
	return (
		<Formik
			initialValues={{
				login: '',
				password: '',
			}}
			/* validate={} */
			onSubmit={(values, { setSubmitting }) => {
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

					<NavLink to='/registration'>
						<Typography sx={{ color: 'gray' }}>
							Забыли пароль? Восстановить
						</Typography>
					</NavLink>

					<CustomButton
						sx={{ mt: 8, mb: 1 }}
						type='submit'
						disabled={isSubmitting}
					>
						Войти
					</CustomButton>

					<Box sx={{ display: 'flex' }}>
						<Typography>Нет аккаунта?</Typography>
						<NavLink to='' style={{ marginLeft: '4px' }}>
							Запросить аккаунт
						</NavLink>
					</Box>
				</Form>
			)}
		</Formik>
	)
}

export default AuthorizationForm
