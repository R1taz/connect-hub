import useFindRequestPillars from '../../../hooks/useFindRequestPillars'
import { TypeOrganization } from '../../../interfaces/usersInterfaces'
import DividerCustom from '../../ui/DividerCustom'
import ProfileRequest from '../ProfileRequest/ProfileRequest'

interface Props {
	type: TypeOrganization
}

const ProfileRequestsElectricGrid = ({ type }: Props) => {
	const { isLoading, requestPillars, refetchConnectionLinks } = useFindRequestPillars()

	return (
		<section>
			{isLoading && <h1>Загрузка данных...</h1>}
			{!isLoading &&
				requestPillars.map(requestPillar => (
					<article key={requestPillar?.id}>
						<DividerCustom />
						<ProfileRequest
							/* location={pillar.coordinates} */
							street={`${requestPillar?.pillar.street}, ${requestPillar?.pillar.building}${
								requestPillar?.pillar.index ? requestPillar?.pillar.index : ''
							}`}
							type={type!}
							currentNameOrganization={requestPillar?.nameOrg!}
							pillarId={requestPillar?.id}
							answer={requestPillar?.ans}
							refetchConnectionLinks={refetchConnectionLinks}
						/>
					</article>
				))}
		</section>
	)
}

export default ProfileRequestsElectricGrid
