import { useEffect, useMemo, useState } from 'react'
import {
	useGetConnectionLinksQuery,
	useGetPillarLinksQuery,
	useGetPillarsQuery,
} from '../api/mapApi'
import { useAppDispatch, useAppSelector } from './react-redux'
import { setConnectionLinks, setPillarLinks, setPillars } from '../store/slice/mapSlice'

interface Response {
	isLoading: boolean
	requestPillars: {
		id: number | undefined
		ans: 'pole_a_answer' | 'pole_b_answer'
		pillar: any
		nameOrg: string
	}[]
	refetchConnectionLinks: () => void
}

const useFindRequestPillars = (): Response => {
	const orgName = useAppSelector(state => state.userSlice.user?.user_info?.organization.name)
	const [allIsLoading, setAllIsLoading] = useState(true)
	const dispatch = useAppDispatch()

	const pillars = useAppSelector(state => state.mapSlice.pillars)
	const pillarLinks = useAppSelector(state => state.mapSlice.pillarLinks)
	const connectionLinks = useAppSelector(state => state.mapSlice.connectionLinks)

	const { data: dataPillarLinks, isLoading: isLoadingPillarLinks } = useGetPillarLinksQuery()

	const { data: dataPillars, isLoading: isLoadingPillars } = useGetPillarsQuery()

	const {
		data: dataConnectionLinks,
		isLoading: isLoadingConnectionLinks,
		refetch,
	} = useGetConnectionLinksQuery()

	useEffect(() => {
		if (!isLoadingPillars && dataPillars) {
			dispatch(setPillars(dataPillars))
		}

		if (!isLoadingPillarLinks && dataPillarLinks) {
			dispatch(setPillarLinks(dataPillarLinks))
		}

		if (!isLoadingConnectionLinks && dataConnectionLinks) {
			dispatch(setConnectionLinks(dataConnectionLinks.connection_links))
		}
	}, [dataPillars, dataPillarLinks, dataConnectionLinks])

	useEffect(() => {
		if (!isLoadingPillars && !isLoadingPillarLinks && !isLoadingConnectionLinks) {
			setAllIsLoading(false)
		}
	}, [isLoadingPillars, isLoadingPillarLinks, isLoadingConnectionLinks])

	const findLinks = useMemo(() => {
		return pillarLinks.filter(link =>
			connectionLinks.some(
				connectLink => connectLink.pole_link === link.id && connectLink.status !== 2
			)
		)
	}, [pillarLinks, connectionLinks])

	const requestPillars = useMemo(() => {
		return findLinks.flatMap(findLink => {
			const a = pillars.find(
				pillar => pillar.id === findLink.pole_a.id && pillar.owner.name === orgName
			)
			const b = pillars.find(
				pillar => pillar.id === findLink.pole_b.id && pillar.owner.name === orgName
			)

			const findConnectionLink = connectionLinks.find(link => link.pole_link === findLink.id)

			const res: {
				id: number | undefined
				ans: 'pole_a_answer' | 'pole_b_answer'
				pillar: any
				nameOrg: string
			}[] = []

			if (a) {
				if (!findConnectionLink?.pole_a_answer) {
					res.push({
						id: findConnectionLink?.id,
						ans: 'pole_a_answer',
						pillar: a,
						nameOrg: a.owner.name,
					})
				}
			}
			if (b) {
				if (!findConnectionLink?.pole_b_answer) {
					res.push({
						id: findConnectionLink?.id,
						ans: 'pole_b_answer',
						pillar: b,
						nameOrg: b.owner.name,
					})
				}
			}

			return res
		})
	}, [findLinks, pillars])

	return {
		isLoading: allIsLoading,
		requestPillars,
		refetchConnectionLinks: refetch,
	}
}

export default useFindRequestPillars
