import { Box, TextField, Typography, useTheme } from '@mui/material'
import { Formik, ErrorMessage, Form } from 'formik'
import styles from './styles.module.css'
import { CustomButton } from '../../ui/Button'
import { NavLink } from 'react-router-dom'
import { entranceSchema } from '../../../helpers/validateEntrance'
import { BASE_URL } from '../../../constants/constants'
import axios from 'axios'
import СonsentСheckbox from '../../ui/СonsentСheckbox'

const RecoverForm = () => {
	const theme = useTheme()

	return (
		<Formik
			initialValues={{
				email: '',
			}}
			validationSchema={entranceSchema}
			onSubmit={async (values, { setSubmitting }) => {
				const response = await axios.post(`${BASE_URL}/recover`, values)

				// logic here
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
						value={values.email}
						sx={{
							my: 4,
							display: 'block',
							'& .MuiInputBase-root': { width: '100%' },
						}}
						placeholder='ЭЛ. ПОЧТА'
					/>
					<ErrorMessage name='name' component='div' />

					<СonsentСheckbox />

					<CustomButton
						sx={{ mt: 8, mb: 1 }}
						type='submit'
						disabled={isSubmitting}
					>
						Запросить логин и пароль
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

export default RecoverForm
