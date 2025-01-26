import { Divider, useTheme } from '@mui/material'
import Title from '../../components/Main/Title/Title'
import Photo from '../../assets/Photo1.jpg'
import styles from './styles.module.css'
import ReasonsCreateAccount from '../../components/Main/ReasonsCreateAccount/ReasonsCreateAccount'
import AboutUs from '../../components/Main/AboutUs/AboutUs'
import Footer from '../../components/Main/Footer/Footer'
import RegistrationBlock from '../../components/Main/RegistrationBlock/RegistrationBlock'

const MainPage = () => {
	const theme = useTheme()

	return (
		<>
			<Title />
			<Divider
				sx={{ mt: '10px', color: theme.palette.secondary.main }}
			></Divider>
			<RegistrationBlock />
			<img className={styles.photo} src={Photo} />
			<ReasonsCreateAccount />
			<AboutUs />
			<Footer />
		</>
	)
}

export default MainPage
