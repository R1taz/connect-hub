import { Outlet } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { Box, Container } from '@mui/material'
import Navigation from '../components/Navigation/Navigation'

const Layout = () => {
	return (
		<Container sx={{ padding: '30px 200px 0px 200px' }}>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<img src={logo} alt='logo' />
				<Navigation />
			</Box>
			<Outlet />
		</Container>
	)
}

export default Layout
