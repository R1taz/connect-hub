import { Divider } from '@mui/material'

// Компонент с линией во всю ширину
const DividerCustom = () => {
	return (
		<Divider
			sx={{
				width: '100%',
				backgroundColor: 'black',
				borderWidth: '1px',
				mt: 6,
				mb: 3,
			}}
		/>
	)
}

export default DividerCustom
