import { useEffect } from 'react'
import { useGetConnectionLinksQuery, useGetPillarLinksQuery } from '../api/mapApi'
import { useGetConnectionQuery } from '../api/profileApi'
import { useDispatch } from 'react-redux'
import { useAppSelector } from './react-redux'
import { setConnectionLinks, setPillarLinks } from '../store/slice/mapSlice'
import { setConnection } from '../store/slice/profileSlice'

export function useFindStreetAndProviders() {
	// Достаём из хранилища Redux подключения, линии, подключённые линии
	const connections = useAppSelector(state => state.profileSlice.connections)
	const pillarLinks = useAppSelector(state => state.mapSlice.pillarLinks)
	const connectionLinks = useAppSelector(state => state.mapSlice.connectionLinks)

	// Достаём специальную функцию из библиотеки React-Redux для обработки действий
	const dispatch = useDispatch()

	// Вызываем функции из библиотеки Redux Toolkit Query, которые делает запросы
	// за получением линий, подключённых линий и подключений.
	// В качестве ответа мы получаем флаги загрузки данных и данные
	const { data: dataConnects, isLoading: isLoadingConnects } = useGetConnectionQuery()
	const { data: dataPillarLinks, isLoading: isLoadingPillarLinks } = useGetPillarLinksQuery()
	const { data: dataConnectionLinks, isLoading: isLoadingConnectionLinks } =
		useGetConnectionLinksQuery()

	useEffect(() => {
		// Если подключения есть и загрузка прошла
		if (dataConnects && !isLoadingConnects) {
			// устанавливаем их в хранилище Redux
			dispatch(setConnection(dataConnects.connections))
		}

		// Если линии есть и загрузка прошла
		if (dataPillarLinks && !isLoadingPillarLinks) {
			// устанавливаем их в хранилище Redux
			dispatch(setPillarLinks(dataPillarLinks))
		}

		// Если подключённые линии есть и загрузка прошла
		if (dataConnectionLinks && !isLoadingConnectionLinks) {
			// устанавливаем их в хранилище Redux
			dispatch(setConnectionLinks(dataConnectionLinks.connection_links))
		}
	}, [dataConnects, dataConnectionLinks, dataPillarLinks])

	const foundConnectionLink = connectionLinks.find(link =>
		connections.some(connect => connect.id === link.connection.id)
	)

	const foundPillarLink = pillarLinks.find(
		pillarLink => pillarLink.id === foundConnectionLink?.pole_link
	)

	const startPillar = foundPillarLink?.pole_a ?? null
	const endPillar = foundPillarLink?.pole_b ?? null

	// Формируем адреса столбов
	const streets = [
		startPillar ? `${startPillar.street} ${startPillar.building}${startPillar.index ?? ''}` : '',
		endPillar ? `${endPillar.street} ${endPillar.building}${endPillar.index ?? ''}` : '',
	]

	// Владелец столбов
	const owners = [startPillar?.owner.name ?? '', endPillar?.owner.name ?? '']

	// возвращаем
	return {
		connections,
		streets,
		owners,
		isLoading: isLoadingConnectionLinks || isLoadingConnects || isLoadingPillarLinks,
	}
}
