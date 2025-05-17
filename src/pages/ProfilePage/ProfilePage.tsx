import { Box } from '@mui/material'
import ProfileHeader from '../../components/Profile/ProfileHeader/ProfileHeader'
import ProfileTitle from '../../components/Profile/ProfileTitle/ProfileTitle'
import DividerCustom from '../../components/ui/DividerCustom'
import { useAppSelector } from '../../hooks/react-redux'
import ProfileRequestsBackbone from '../../components/Profile/ProfileRequestsBackbone/ProfileRequestsBackbone'
import ProfileRequestsElectricGrid from '../../components/Profile/ProfileRequestsElectricGrid/ProfileRequestsElectricGrid'
import ProfileRequestsAdmin from '../../components/Profile/ProfileRequestsAdmin/ProfileRequestsAdmin'

const ProfilePage = () => {
	const type = useAppSelector(state => state.userSlice.user?.user_info?.type)
	const acceptStatus = useAppSelector(state => state.userSlice.user?.user_info?.accept_status)
	const isSuperUser = useAppSelector(state => state.userSlice.user?.is_superuser)

	return (
		<Box sx={{ mb: 10, mt: 2 }}>
			<ProfileHeader isSuperUser={isSuperUser!} />
			<ProfileTitle type={type!} acceptStatus={acceptStatus} isSuperUser={isSuperUser!} />

			{type === 'магистральный провайдер' && acceptStatus && (
				<ProfileRequestsBackbone type={type} />
			)}

			{type === 'электросетевая компания' && acceptStatus && (
				<ProfileRequestsElectricGrid type={type} />
			)}

			{isSuperUser && <ProfileRequestsAdmin />}
			{(isSuperUser || acceptStatus) && <DividerCustom />}
		</Box>
	)
}

export default ProfilePage
