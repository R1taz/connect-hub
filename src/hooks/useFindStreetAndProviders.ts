import { useEffect } from 'react'
import { useGetConnectionLinksQuery, useGetPillarLinksQuery } from '../api/mapApi'
import { useGetConnectionQuery } from '../api/profileApi'
import { useDispatch } from 'react-redux'
import { useAppSelector } from './react-redux'
import { setConnectionLinks, setPillarLinks } from '../store/slice/mapSlice'
import { setConnection } from '../store/slice/profileSlice'

export function useFindStreetAndProviders() {
	const connections = useAppSelector(state => state.profileSlice.connections)
	const pillarLinks = useAppSelector(state => state.mapSlice.pillarLinks)
	const connectionLinks = useAppSelector(state => state.mapSlice.connectionLinks)
	const dispatch = useDispatch()

	const { data: dataConnects, isLoading: isLoadingConnects } = useGetConnectionQuery()
	const { data: dataPillarLinks, isLoading: isLoadingPillarLinks } = useGetPillarLinksQuery()
	const { data: dataConnectionLinks, isLoading: isLoadingConnectionLinks } =
		useGetConnectionLinksQuery()

	useEffect(() => {
		if (dataConnects && !isLoadingConnects) {
			dispatch(setConnection(dataConnects.connections))
		}

		if (dataPillarLinks && !isLoadingPillarLinks) {
			dispatch(setPillarLinks(dataPillarLinks))
		}

		if (dataConnectionLinks && !isLoadingConnectionLinks) {
			dispatch(setConnectionLinks(dataConnectionLinks.connection_links))
		}
	}, [dataConnects, dataConnectionLinks, dataPillarLinks])

	const findConnectionLink = connectionLinks.find(link => {
		return connections.some(connect => connect.id === link.connection.id)
	})
	const pillarLink = pillarLinks.find(pillarLink => pillarLink.id === findConnectionLink?.pole_link)

	const owners = [`${pillarLink?.pole_a.owner.name}`, `${pillarLink?.pole_b.owner.name}`]

	const streets = [
		`${pillarLink?.pole_a.street} ${pillarLink?.pole_a.building}${pillarLink?.pole_a.index ?? ''}`,
		`${pillarLink?.pole_b.street} ${pillarLink?.pole_b.building}${pillarLink?.pole_b.index ?? ''}`,
	]

	return {
		connections,
		streets,
		owners,
		isLoading: isLoadingConnectionLinks || isLoadingConnects || isLoadingPillarLinks,
	}
}
