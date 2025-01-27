import { Divider, Grid2 } from '@mui/material'
import Title from '../../components/Main/Title/Title'
import MapComponent from '../../components/MapComponent/MapComponent'
import { CustomButton } from '../../components/ui/Button'
import Supports from '../../components/MapComponent/Supports/Supports'
import SubInformation from '../../components/MapComponent/SubInformation/SubInformation'
import Footer from '../../components/Main/Footer/Footer'
import DividerCustom from '../../components/ui/DividerCustom'
import { useAppSelector } from '../../hooks/react-redux'

const MapPage = () => {
	const role = useAppSelector(state => state.authSlice.role)

	return (
		<>
			<Title />
			<Divider></Divider>
			<SubInformation />

			<MapComponent />

			{role === 3 ||
				(role === 1 && (
					<Grid2 container sx={{ marginBottom: 25 }}>
						<Grid2 size={8}></Grid2>
						<Grid2 size={4}>
							<CustomButton sx={{ width: '100%', padding: '25px 20px' }}>
								ДОБАВИТЬ ОПОРУ
							</CustomButton>
						</Grid2>
					</Grid2>
				))}

			<DividerCustom />
			<Supports
				name='УЛ. РОЖДЕСТВЕНСКАЯ 7'
				location='56.330176,43.997982'
				rating='5'
			/>
			<DividerCustom />
			<Supports
				name='УЛ. ЛЕНИНА 34А'
				location='56.285413,43.930088'
				rating='4'
			/>
			<DividerCustom />
			<Supports
				name='УЛ. ЗЕЛЕНОДОЛЬСКАЯ 54'
				location='56.311152,43.92521'
				rating='3'
			/>
			<DividerCustom />
			<Supports
				name='УЛ. БЕЛИНСКОГО 41'
				location='56.313019,44.007747'
				rating='1'
			/>
			<DividerCustom />

			<Footer />
		</>
	)
}

export default MapPage
