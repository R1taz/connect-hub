import { useEffect } from 'react'
import { useGetConnectionQuery } from '../../../api/profileApi'
import { useAppDispatch } from '../../../hooks/react-redux'
import useFindRequestPillars from '../../../hooks/useFindRequestPillars'
import { TypeOrganization } from '../../../interfaces/usersInterfaces'
import { setConnection } from '../../../store/slice/profileSlice'
import DividerCustom from '../../ui/DividerCustom'
import ProfileRequest from '../ProfileRequest/ProfileRequest'
import { IOrganization } from '../../../interfaces/authInterfaces'

interface Props {
	type: TypeOrganization
	organizations: IOrganization[]
}

const ProfileRequestsElectricGrid = ({ type, organizations }: Props) => {
	const dispatch = useAppDispatch()
	const { isLoading, requestPillars, refetchConnectionLinks } = useFindRequestPillars()

	const { data: dataConnects, isLoading: isLoadingConnects } = useGetConnectionQuery()

	useEffect(() => {
		if (dataConnects && !isLoadingConnects) {
			dispatch(setConnection(dataConnects.connections))
		}
	}, [dataConnects, isLoadingConnects])

	return (
		<section>
			{isLoading && <h1>Загрузка данных...</h1>}
			{!isLoading &&
				requestPillars.map(requestPillar => {
					const nameOrg = organizations.find(org => {
						return dataConnects?.connections.some(connect => connect.provider === org.id)
					})?.name
					return (
						<article key={requestPillar?.id}>
							<DividerCustom />
							<ProfileRequest
								street={`${requestPillar?.pillar.street}, ${requestPillar?.pillar.building}${
									requestPillar?.pillar.index ? requestPillar?.pillar.index : ''
								}`}
								type={type!}
								currentNameOrganization={nameOrg!}
								pillarId={requestPillar?.id}
								answer={requestPillar?.ans}
								refetchConnectionLinks={refetchConnectionLinks}
							/>
						</article>
					)
				})}
		</section>
	)
}

export default ProfileRequestsElectricGrid
