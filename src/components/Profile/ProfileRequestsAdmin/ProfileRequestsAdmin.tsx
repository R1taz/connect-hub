import { useEffect } from 'react'
import { useGetConnectionQuery } from '../../../api/profileApi'
import { useAppDispatch, useAppSelector } from '../../../hooks/react-redux'
import { setConnection } from '../../../store/slice/profileSlice'
import ProfileRequest from '../ProfileRequest/ProfileRequest'
import DividerCustom from '../../ui/DividerCustom'

const ProfileRequestsAdmin = () => {
	const connection = useAppSelector(state => state.profileSlice.connections)
	const dispatch = useAppDispatch()

	const { data, isLoading } = useGetConnectionQuery()

	useEffect(() => {
		if (data && !isLoading) {
			dispatch(setConnection(data.connections))
		}
	}, [data, isLoading])

	return (
		<section>
			{isLoading && <h1>Загрузка данных...</h1>}
			{!isLoading &&
				connection.map(connect => (
					<article key={connect.id}>
						<DividerCustom />
						<ProfileRequest
							street='Street'
							currentNameOrganization={String(connect.provider)}
							status={connect.status}
						/>
					</article>
				))}
		</section>
	)
}

export default ProfileRequestsAdmin
