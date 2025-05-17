import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/react-redux'
import { TypeOrganization } from '../../../interfaces/usersInterfaces'
import { useGetConnectionQuery } from '../../../api/profileApi'
import { setConnection } from '../../../store/slice/profileSlice'
import DividerCustom from '../../ui/DividerCustom'
import ProfileRequest from '../ProfileRequest/ProfileRequest'

interface Props {
	type: TypeOrganization
}

const ProfileRequestsBackbone = ({ type }: Props) => {
	const dispatch = useAppDispatch()

	const connections = useAppSelector(state => state.profileSlice.connections)

	const filteringConnection = connections.filter(connect => {
		if (type === 'магистральный провайдер') return connect
	})

	const { data, isLoading } = useGetConnectionQuery()

	useEffect(() => {
		if (!isLoading && data) {
			dispatch(setConnection(data.connections))
		}
	}, [data, isLoading])

	return (
		<section>
			{isLoading && <h1>Загрузка данных...</h1>}
			{!isLoading &&
				filteringConnection.map(connection => (
					<article key={connection.id}>
						<DividerCustom />
						<ProfileRequest
							/* location={pillar.coordinates} */
							street={String(connection.id)}
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
