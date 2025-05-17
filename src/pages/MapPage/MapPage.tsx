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
	const type = useAppSelector(state => state.userSlice.user?.user_info?.type)

	const pillars = useAppSelector(state => state.mapSlice.pillars)
	const pillarLinks = useAppSelector(state => state.mapSlice.pillarLinks)
	const connectionLinks = useAppSelector(state => state.mapSlice.connectionLinks)
	const dispatch = useAppDispatch()

	const { data: dataPillars, isLoading: isLoadingPillars } = useGetPillarsQuery()
	const { data: dataPillarLinks, isLoading: isLoadingPillarLinks } = useGetPillarLinksQuery()
	const {
		data: dataConnectionLinks,
		isLoading: isLoadingConnectionLinks,
		refetch,
	} = useGetConnectionLinksQuery()

	useEffect(() => {
		if (!isLoadingPillars && dataPillars) {
			dispatch(setPillars(dataPillars))
		}
	}, [dataPillars, isLoadingPillars])

	useEffect(() => {
		if (!isLoadingPillarLinks && dataPillarLinks) {
			dispatch(setPillarLinks(dataPillarLinks))
		}
	}, [dataPillarLinks, isLoadingPillarLinks])

	useEffect(() => {
		if (!isLoadingConnectionLinks && dataConnectionLinks) {
			dispatch(setConnectionLinks(dataConnectionLinks.connection_links))
		}
	}, [dataConnectionLinks, isLoadingPillarLinks])

	return (
		<>
			<Title />
			<Divider></Divider>
			<SubInformation />

			{isLoadingPillarLinks && isLoadingConnectionLinks && <h1>Данные загружаются...</h1>}
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
				{isLoadingPillars && <h1>Данные загружаются...</h1>}
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
