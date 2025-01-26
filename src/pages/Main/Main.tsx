import { Divider } from '@mui/material'
import Title from '../../components/Main/Title/Title'
import Registration from '../../components/Main/Registration/Registration'
import Photo from '../../assets/Photo1.jpg'
import styles from './styles.module.css'
import ReasonsCreateAccount from '../../components/Main/ReasonsCreateAccount/ReasonsCreateAccount'
import AboutUs from '../../components/Main/AboutUs/AboutUs'
import Footer from '../../components/Main/Footer/Footer'

const Main = () => {
	return (
		<>
			<Title />
			<Divider sx={{ mt: '10px' }}></Divider>
			<Registration />
			<img className={styles.photo} src={Photo} />
			<ReasonsCreateAccount />
			<AboutUs />
			<Footer />
		</>
	)
}

export default Main
