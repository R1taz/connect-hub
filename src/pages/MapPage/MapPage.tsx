import { Divider, Grid2, Typography } from '@mui/material'
import Title from '../../components/Main/Title/Title'
import MapComponent from '../../components/MapComponent/MapComponent'

const MapPage = () => {
	return (
		<>
			<Title />
			<Divider></Divider>
			<Grid2 container sx={{ mt: 4 }}>
				<Grid2 size={7}>
					<Typography variant='h3'>ПОСМОТРИТЕ ОПОРЫ НА КАРТЕ</Typography>
				</Grid2>
				<Grid2 size={5}>г. Нижний Новгород</Grid2>
			</Grid2>
			<MapComponent />
		</>
	)
}

export default MapPage
