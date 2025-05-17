import { Box } from '@mui/material'
import ProfileHeader from '../../components/Profile/ProfileHeader/ProfileHeader'
import ProfileTitle from '../../components/Profile/ProfileTitle/ProfileTitle'
import DividerCustom from '../../components/ui/DividerCustom'
import { useAppDispatch, useAppSelector } from '../../hooks/react-redux'
import ProfileRequestsBackbone from '../../components/Profile/ProfileRequestsBackbone/ProfileRequestsBackbone'
import ProfileRequestsElectricGrid from '../../components/Profile/ProfileRequestsElectricGrid/ProfileRequestsElectricGrid'
import ProfileRequestsAdmin from '../../components/Profile/ProfileRequestsAdmin/ProfileRequestsAdmin'
import { useGetOrganizationsQuery } from '../../api/authApi'
import { setOrganizations } from '../../store/slice/profileSlice'
import { useEffect } from 'react'

const ProfilePage = () => {
	const type = useAppSelector(state => state.userSlice.user?.user_info?.type)
	const acceptStatus = useAppSelector(state => state.userSlice.user?.user_info?.accept_status)
	const isSuperUser = useAppSelector(state => state.userSlice.user?.is_superuser)
	const organizations = useAppSelector(state => state.profileSlice.organizations)
	const dispatch = useAppDispatch()

	const { data: dataOrgs, isLoading: isLoadingOrgs } = useGetOrganizationsQuery()

	useEffect(() => {
		if (dataOrgs && organizations.length === 0 && !isLoadingOrgs) {
			dispatch(setOrganizations(dataOrgs))
		}
	}, [dataOrgs, isLoadingOrgs])

	return (
		<Box sx={{ mb: 10, mt: 2 }}>
			<ProfileHeader isSuperUser={isSuperUser!} />
			<ProfileTitle type={type!} acceptStatus={acceptStatus} isSuperUser={isSuperUser!} />

			{type === 'магистральный провайдер' && acceptStatus && (
				<ProfileRequestsBackbone type={type} />
			)}

			{type === 'электросетевая компания' && !isLoadingOrgs && acceptStatus && (
				<ProfileRequestsElectricGrid organizations={organizations} type={type} />
			)}

			{isSuperUser && <ProfileRequestsAdmin />}
			{(isSuperUser || acceptStatus) && <DividerCustom />}
		</Box>
	)
}

export default ProfilePage
