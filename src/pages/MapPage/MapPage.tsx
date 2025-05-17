import { Divider } from '@mui/material'
import Title from '../../components/Main/Title/Title'
import MapComponent from '../../components/MapComponent/MapComponent'
import Supports from '../../components/MapComponent/Supports/Supports'
import SubInformation from '../../components/MapComponent/SubInformation/SubInformation'
import Footer from '../../components/Main/Footer/Footer'
import DividerCustom from '../../components/ui/DividerCustom'
import { useAppDispatch, useAppSelector } from '../../hooks/react-redux'
import {
	useGetConnectionLinksQuery,
	useGetPillarLinksQuery,
	useGetPillarsQuery,
} from '../../api/mapApi'
import { useEffect } from 'react'
import { setConnectionLinks, setPillarLinks, setPillars } from '../../store/slice/mapSlice'

const MapPage = () => {
	// Достаём тип организации, если он есть из хранилища Redux Toolkit
	const type = useAppSelector(state => state.userSlice.user?.user_info?.type)

	// Достаём столбы, линии, подключённые линии, из хранилища Redux Toolkit
	const pillars = useAppSelector(state => state.mapSlice.pillars)
	const pillarLinks = useAppSelector(state => state.mapSlice.pillarLinks)
	const connectionLinks = useAppSelector(state => state.mapSlice.connectionLinks)

	// Достаём специальную функцию из библиотеки React-Redux для обработки действий
	const dispatch = useAppDispatch()

	// Вызываем функцию из библиотеки Redux Toolkit Query, которая делает запрос за получением столбов.
	// В качестве ответа мы получаем флаг загрузки данных и данные
	const { data: dataPillars, isLoading: isLoadingPillars } = useGetPillarsQuery()

	// Вызываем функцию из библиотеки Redux Toolkit Query, которая делает запрос за получением столбов.
	// В качестве ответа мы получаем флаг загрузки данных и данные
	const { data: dataPillarLinks, isLoading: isLoadingPillarLinks } = useGetPillarLinksQuery()

	// Вызываем функцию из библиотеки Redux Toolkit Query, которая делает запрос за получением столбов.
	// В качестве ответа мы получаем флаг загрузки данных, данные, и функцию перезапроса
	const {
		data: dataConnectionLinks,
		isLoading: isLoadingConnectionLinks,
		refetch,
	} = useGetConnectionLinksQuery()

	useEffect(() => {
		// Если загрузка закончена и данные столбов есть, устанавливаем их в хранилище Redux Toolkit
		if (!isLoadingPillars && dataPillars) {
			dispatch(setPillars(dataPillars))
		}
	}, [dataPillars, isLoadingPillars])

	useEffect(() => {
		// Если загрузка закончена и данные линий есть, устанавливаем их в хранилище Redux Toolkit
		if (!isLoadingPillarLinks && dataPillarLinks) {
			dispatch(setPillarLinks(dataPillarLinks))
		}
	}, [dataPillarLinks, isLoadingPillarLinks])

	useEffect(() => {
		// Если загрузка закончена и данные подключённых линий есть, устанавливаем их в хранилище Redux
		// Toolkit
		if (!isLoadingConnectionLinks && dataConnectionLinks) {
			dispatch(setConnectionLinks(dataConnectionLinks.connection_links))
		}
	}, [dataConnectionLinks, isLoadingPillarLinks])

	/* Divider это компонент из MaterialUI, содержащий линию */
	// Title, SubInformation, Footer, DividerCustom - наши дочерние компоненты
	return (
		<>
			<Title />
			<Divider></Divider>
			<SubInformation />

			{/* Если идёт загрузка линий или загрузка подключённых линий то отбражаем заголовок */}
			{(isLoadingPillarLinks || isLoadingConnectionLinks) && <h1>Данные загружаются...</h1>}
			{/* Иначе отрисовываем нашу карту */}
			{!isLoadingPillarLinks && !isLoadingConnectionLinks && (
				<MapComponent
					pillars={pillars}
					pillarLinks={pillarLinks}
					connectionLinks={connectionLinks}
					type={type!}
					refetchConnectionLinks={refetch}
				/>
			)}

			<DividerCustom />

			<section>
				{/* Если загрузка столбов есть, то отрисовываем заголовок */}
				{isLoadingPillars && <h1>Данные загружаются...</h1>}
				{/* Иначе выводим список столбов */}
				{!isLoadingPillars &&
					pillars.map(pillar => (
						<article key={pillar.id}>
							<Supports
								name={`${pillar.street}, ${pillar.building}${pillar.index ? pillar.index : ''}`}
								location={`${pillar.longitude} ${pillar.latitude}`}
								max_connections={pillar.max_connections}
							/>
							<DividerCustom />
						</article>
					))}
			</section>

			<Footer />
		</>
	)
}

export default MapPage
