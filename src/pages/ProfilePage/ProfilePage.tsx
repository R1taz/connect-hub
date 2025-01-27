import { Box } from '@mui/material'
import ProfileHeader from '../../components/Profile/ProfileHeader/ProfileHeader'
import ProfileSupports from '../../components/Profile/ProfileSupports/ProfileSupports'
import ProfileTitle from '../../components/Profile/ProfileTitle/ProfileTitle'
import DividerCustom from '../../components/ui/DividerCustom'
import { useAppSelector } from '../../hooks/react-redux'

const ProfilePage = () => {
	const pillars = useAppSelector(state => state.mapSlice.pillars)
	const role = useAppSelector(state => state.authSlice.role)
	const currentNameOrganization = useAppSelector(
		state => state.authSlice.currentNameOrganization
	)

	return (
		<Box sx={{ mb: 10 }}>
			<ProfileHeader />
			<ProfileTitle />
			{pillars.map(pillar => (
				<>
					<DividerCustom />

					<ProfileSupports
						location={pillar.coordinates}
						street={pillar.street}
						status={pillar.status}
						role={role}
						currentNameOrganization={currentNameOrganization}
					/>
				</>
			))}
			<DividerCustom />
		</Box>
	)
}

export default ProfilePage
