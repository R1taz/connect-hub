import * as Yup from 'yup'

export const entranceSchema = Yup.object().shape({
	login: Yup.string()
		.required('Логин обязателен')
		.min(2, 'Логин должен содержать минимум 2 символа'),
	password: Yup.string()
		.required('Пароль обязателен')
		.min(8, 'Пароль должен состоять минимум из 8 символов'),
})
