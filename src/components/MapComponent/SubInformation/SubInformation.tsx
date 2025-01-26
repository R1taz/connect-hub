import { Grid2, Typography } from '@mui/material'
import PlanetSVG from '../../../assets/planet.svg'
import PlaceIcon from '@mui/icons-material/Place'

const SubInformation = () => {
	return (
		<Grid2 container sx={{ mt: 6 }}>
			<Grid2
				size={3}
				sx={{ display: 'flex', alignSelf: 'center', justifyContent: 'center' }}
			>
				<img src={PlanetSVG} style={{ width: '35%' }} />
			</Grid2>
			<Grid2 size={5}>
				<Typography>
					Мы обладаем богатым опытом и профессиональными знаниями в области
					электросетевой инфраструктуры. Мы используем современное оборудование
					и методы, которые позволяют нам эффективно решать самые сложные
					задачи.
				</Typography>
			</Grid2>

			<Grid2 size={7} sx={{ mt: 35 }}>
				<Typography variant='h3'>ПОСМОТРИТЕ ОПОРЫ НА КАРТЕ</Typography>
			</Grid2>
			<Grid2
				size={5}
				sx={{
					mt: 35,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<PlaceIcon sx={{ fontSize: 50, color: 'purple' }} />
				<Typography sx={{ fontSize: '1.3rem', marginLeft: 1 }}>
					г. Нижний Новгород
				</Typography>
			</Grid2>
		</Grid2>
	)
}

export default SubInformation
