import { Checkbox, FormControlLabel, useTheme } from '@mui/material'

// компонент с чекбоксом
const СonsentСheckbox = () => {
	const theme = useTheme()

	return (
		<FormControlLabel
			sx={{ color: theme.palette.secondary.main }}
			control={<Checkbox sx={{ marginLeft: 1 }} />}
			label='Согласие на обработку персональных данных'
		/>
	)
}

export default СonsentСheckbox
