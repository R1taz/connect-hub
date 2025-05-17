import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/react-redux'
import { setOrganizations } from '../../../store/slice/profileSlice'
import ProfileRequest from '../ProfileRequest/ProfileRequest'
import DividerCustom from '../../ui/DividerCustom'
import { useGetOrganizationsQuery } from '../../../api/authApi'
import { useFindStreetAndProviders } from '../../../hooks/useFindStreetAndProviders'

const ProfileRequestsAdmin = () => {
	const organizations = useAppSelector(state => state.profileSlice.organizations)
	const dispatch = useAppDispatch()

	const { connections, streets, owners, isLoading } = useFindStreetAndProviders()
	const { data: dataOrgs, isLoading: isLoadingOrgs } = useGetOrganizationsQuery()

	useEffect(() => {
		if (dataOrgs && !isLoadingOrgs && organizations.length === 0) {
			dispatch(setOrganizations(dataOrgs))
		}
	}, [dataOrgs, isLoadingOrgs])

	return (
		<section>
			{(isLoading || isLoadingOrgs) && <h1>Загрузка данных...</h1>}
			{!isLoading &&
				!isLoadingOrgs &&
				organizations.length !== 0 &&
				connections.map(connect => {
					return (
						<article key={connect.id}>
							<DividerCustom />
							<ProfileRequest
								street={streets}
								currentNameOrganization={owners}
								status={connect.status}
							/>
						</article>
					)
				})}
		</section>
	)
}

export default ProfileRequestsAdmin
