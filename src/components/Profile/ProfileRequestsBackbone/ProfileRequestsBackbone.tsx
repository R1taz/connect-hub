import { TypeOrganization } from '../../../interfaces/usersInterfaces'
import DividerCustom from '../../ui/DividerCustom'
import ProfileRequest from '../ProfileRequest/ProfileRequest'
import { useFindStreetAndProviders } from '../../../hooks/useFindStreetAndProviders'

interface Props {
	type: TypeOrganization
}

const ProfileRequestsBackbone = ({ type }: Props) => {
	const { connections, streets, isLoading } = useFindStreetAndProviders()

	if (isLoading) {
		return <h1>Загрузка данных...</h1>
	}

	return (
		<section>
			{connections.map(connection => (
				<article key={connection.id}>
					<DividerCustom />
					<ProfileRequest
						street={streets!}
						status={connection.status}
						type={type!}
						currentNameOrganization={''}
					/>
				</article>
			))}
		</section>
	)
}

export default ProfileRequestsBackbone
