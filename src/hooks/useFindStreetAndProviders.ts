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

	// Ищем нужную нам подключённую линию
	const findConnectionLink = connectionLinks.find(link => {
		return connections.some(connect => connect.id === link.connection.id)
	})
	// По ней находим обычную линию
	const pillarLink = pillarLinks.find(pillarLink => pillarLink.id === findConnectionLink?.pole_link)

	// создаём массив в котором храним названия компаний сетевика и магистральщика
	const owners = [`${pillarLink?.pole_a.owner.name}`, `${pillarLink?.pole_b.owner.name}`]

	// здесь сохраняем адреса столбов
	const streets = [
		`${pillarLink?.pole_a.street} ${pillarLink?.pole_a.building}${pillarLink?.pole_a.index ?? ''}`,
		`${pillarLink?.pole_b.street} ${pillarLink?.pole_b.building}${pillarLink?.pole_b.index ?? ''}`,
	]

	// возвращаем
	return {
		connections,
		streets,
		owners,
		isLoading: isLoadingConnectionLinks || isLoadingConnects || isLoadingPillarLinks,
	}
}
