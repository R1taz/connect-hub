import {
	Box,
	FormControl,
	InputAdornment,
	Menu,
	MenuItem,
	TextField,
	Typography,
	useTheme,
} from '@mui/material'
import { Formik, ErrorMessage, Form } from 'formik'
import styles from './styles.module.css'
import { useState } from 'react'
import { CustomButton } from '../../ui/Button'
import ArrowDownSVG from '../../../assets/arrowDown.svg'
import ArrowTopSVG from '../../../assets/arrowTop.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import СonsentСheckbox from '../../ui/СonsentСheckbox'
import { useGetOrganizationsQuery, useRegistrationMutation } from '../../../api/authApi'
import { TypeOrganization } from '../../../interfaces/usersInterfaces'

const RegistrationForm = () => {
	const theme = useTheme()
	const navigate = useNavigate()

	const { data, isLoading } = useGetOrganizationsQuery()

	const [registration] = useRegistrationMutation()

	const [anchorElType, setAnchorElType] = useState<null | HTMLElement>(null)
	const [anchorElNameOrg, setAnchorElNameOrg] = useState<null | HTMLElement>(null)

	if (isLoading) return <h1>Загрузка данных...</h1>

	return (
		<Formik
			initialValues={{
				username: '',
				surname: '',
				password: '',
				phone_num: '',
				type: '' as TypeOrganization,
				organizationId: null as number | null,
				email: '',
			}}
			onSubmit={async (values, { setSubmitting }) => {
				try {
					if (!values.organizationId || !values.type) return

					await registration({
						username: values.username,
						surname: values.surname,
						password: values.password,
						phone_num: values.phone_num,
						organization_id: values.organizationId,
						type: values.type,
						email: values.email,
					})
					navigate('/login')
				} catch (error) {
					console.log(error)
				} finally {
					setSubmitting(false)
				}
			}}
		>
			{({ values, handleChange, handleBlur, isSubmitting, setFieldValue }) => {
				const selectedOrg = data?.find(item => item.id === values.organizationId)
				return (
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
							placeholder='ЛОГИН ДЛЯ ВХОДА В АККАУНТ'
						/>
						<ErrorMessage name='username' component='div' />

						<TextField
							variant='standard'
							type='text'
							name='password'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
							sx={{
								my: 4,
								display: 'block',
								'& .MuiInputBase-root': { width: '100%' },
							}}
							placeholder='ПАРОЛЬ ДЛЯ ВХОДА В АККАУНТ'
						/>
						<ErrorMessage name='password' component='div' />

						<TextField
							variant='standard'
							type='text'
							name='surname'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.surname}
							sx={{
								my: 4,
								display: 'block',
								'& .MuiInputBase-root': { width: '100%' },
							}}
							placeholder='ФАМИЛИЯ ПОЛЬЗОВАТЕЛЯ'
						/>
						<ErrorMessage name='surname' component='div' />

						<FormControl fullWidth variant='standard' sx={{ my: 4, display: 'block' }}>
							<TextField
								fullWidth
								variant='standard'
								name='type'
								value={
									values.type ? values.type.charAt(0).toUpperCase() + values.type.slice(1) : ''
								}
								onClick={e => setAnchorElType(e.currentTarget)}
								placeholder='ТИП ОРГАНИЗАЦИИ'
								InputProps={{
									readOnly: true,
									endAdornment: (
										<InputAdornment position='end'>
											<img src={Boolean(anchorElType) ? ArrowTopSVG : ArrowDownSVG} />
										</InputAdornment>
									),
								}}
								sx={{
									'& .MuiInputBase-root': { width: '100%' },
									'& input': {
										cursor: 'pointer',
									},
								}}
							/>
						</FormControl>

						<ErrorMessage name='type' component='div' />

						<Menu
							anchorEl={anchorElType}
							open={Boolean(anchorElType)}
							onClose={() => setAnchorElType(null)}
							PaperProps={{ sx: { width: anchorElType?.offsetWidth || 'auto' } }}
						>
							<MenuItem
								onClick={() => {
									setFieldValue('type', 'электросетевая компания')
									setAnchorElType(null)
								}}
							>
								Электросетевая компания
							</MenuItem>
							<MenuItem
								onClick={() => {
									setFieldValue('type', 'магистральный провайдер')
									setAnchorElType(null)
								}}
							>
								Магистральный провайдер
							</MenuItem>
						</Menu>

						<FormControl fullWidth variant='standard' sx={{ my: 4, display: 'block' }}>
							<TextField
								fullWidth
								variant='standard'
								name='organizationId'
								value={
									selectedOrg
										? selectedOrg.name.charAt(0).toUpperCase() + selectedOrg.name.slice(1)
										: ''
								}
								onClick={e => setAnchorElNameOrg(e.currentTarget)}
								placeholder='НАИМЕНОВАНИЕ ОРГАНИЗАЦИИ'
								InputProps={{
									readOnly: true,
									endAdornment: (
										<InputAdornment position='end'>
											<img src={Boolean(anchorElNameOrg) ? ArrowTopSVG : ArrowDownSVG} />
										</InputAdornment>
									),
								}}
								sx={{
									'& .MuiInputBase-root': { width: '100%' },
									'& input': {
										cursor: 'pointer',
									},
								}}
							/>
						</FormControl>

						<ErrorMessage name='organizationId' component='div' />

						<Menu
							anchorEl={anchorElNameOrg}
							open={Boolean(anchorElNameOrg)}
							onClose={() => setAnchorElNameOrg(null)}
							PaperProps={{ sx: { width: anchorElNameOrg?.offsetWidth || 'auto' } }}
						>
							{data &&
								data.map(item => (
									<MenuItem
										key={item.id}
										onClick={() => {
											setFieldValue('organizationId', item.id)
											setAnchorElNameOrg(null)
										}}
									>
										{item.name}
									</MenuItem>
								))}
						</Menu>

						<TextField
							variant='standard'
							type='tel'
							name='phone_num'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.phone_num}
							sx={{
								my: 4,
								display: 'block',
								'& .MuiInputBase-root': { width: '100%' },
							}}
							placeholder='ТЕЛЕФОН ОБРАТНОЙ СВЯЗИ'
						/>
						<ErrorMessage name='phone_num' component='div' />

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
							placeholder='ЭЛЕКТРОННАЯ ПОЧТА'
						/>
						<ErrorMessage name='email' component='div' />

						<СonsentСheckbox />

						<CustomButton sx={{ mt: 5, mb: 1 }} type='submit' disabled={isSubmitting}>
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
							<NavLink to='/login' style={{ marginLeft: '4px', color: theme.palette.primary.main }}>
								Войти
							</NavLink>
						</Box>
					</Form>
				)
			}}
		</Formik>
	)
}

export default RegistrationForm
