import { TextField } from '@mui/material'
import { Formik, Field, ErrorMessage, Form } from 'formik'

const RegistrationForm = () => {
	return (
		<Formik
			initialValues={{
				name: '',
				type: '',
				telephone: '',
				email: '',
			}}
			/* validate={} */
			onSubmit={(values, { setSubmitting }) => {
				console.log(values)
				setSubmitting(false)
			}}
		>
			{({ isSubmitting }) => (
				<Form>
					<Field type='text' name='name' />
					<ErrorMessage name='name' component='div' />

					<Field type='telephone' name='telephone' />
					<ErrorMessage name='telephone' component='div' />

					<Field type='email' name='email' />
					<ErrorMessage name='email' component='div' />

					<button type='submit' disabled={isSubmitting}>
						Submit
					</button>
				</Form>
			)}
		</Formik>
	)
}

export default RegistrationForm
