import { Grid2, Typography } from '@mui/material'
import Photo2 from '../../../assets/Photo2.jpg'
import styles from './styles.module.css'
import CustomizedAccordions from './Accordion/Accordion'

const AboutUs = () => {
	return (
		<Grid2 container sx={{ mt: 25 }}>
			<Grid2 size={12}>
				<Typography sx={{ fontFamily: '"ActayWide", sans-serif' }} variant='h2'>
					О нас
				</Typography>
			</Grid2>

			<Grid2 size={3}></Grid2>
			<Grid2 size={5}>
				<Typography sx={{ mt: 3 }}>
					Мы обладаем богатым опытом и профессиональными знаниями в области
					электросетевой инфраструктуры. Мы используем современное оборудование
					и методы, которые позволяют нам эффективно решать самые сложные
					задачи.
				</Typography>
			</Grid2>
			<Grid2 size={4}></Grid2>

			<Grid2 size={3}></Grid2>
			<Grid2 size={9}>
				<img src={Photo2} className={styles.photo} />
			</Grid2>

			<Grid2 size={3}></Grid2>
			<Grid2 size={9}>
				<CustomizedAccordions />
			</Grid2>
		</Grid2>
	)
}

export default AboutUs
