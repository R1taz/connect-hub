import { TypeOrganization } from '../../../interfaces/usersInterfaces'
import DividerCustom from '../../ui/DividerCustom'
import ProfileRequest from '../ProfileRequest/ProfileRequest'
import { useFindStreetAndProviders } from '../../../hooks/useFindStreetAndProviders'

// типизация параметров ProfileRequestsBackbone
interface Props {
	type: TypeOrganization
}

// принимает тип
const ProfileRequestsBackbone = ({ type }: Props) => {
	// вызываем свою кастомную функцию, которая отдаёт нам подключения, улицы, и флаг загрузки
	const { connections, streets, isLoading } = useFindStreetAndProviders()

	// если идёт загрузка то показываем заголовк
	if (isLoading) {
		return <h1>Загрузка данных...</h1>
	}

	{
		/* Идём по массиву и отрисовываем наши подключения */
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
