import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import { BASE_COORDINATES } from '../../constants/constants'
import pointSVG from '../../assets/point.svg'
import { useAppDispatch, useAppSelector } from '../../hooks/react-redux'
import { useEffect } from 'react'
import axios from 'axios'
import { setPillars } from '../../store/slice/mapSlice'
import { useGetPillarsQuery } from '../../api/mapApi'

const MapComponent = () => {
	const pillars = useAppSelector(state => state.mapSlice.pillars)
	const dispatch = useAppDispatch()

	const placemarkOptions = {
		iconLayout: 'default#image',
		iconImageHref: pointSVG,
		iconImageSize: [30, 30],
		iconImageOffset: [-15, -15],
	}

	const { data, isFetching, error } = useGetPillarsQuery('')

	if (isFetching && !pillars.length) return <div>Загрузка...</div>
	if (error) return <div>Ошибка загрузки меток</div>
	if (data && data.length) {
		dispatch(setPillars(data))
	}

	/* useEffect(() => {
		axios
			.get('https://railway.com/railway.schema.json/poles')
			.then(pillars => dispatch(setPillars(pillars)))
	}, []) */

	return (
		<YMaps query={{ apikey: import.meta.env.VITE_API_KEY }}>
			<div
				style={{
					width: '100%',
					height: '500px',
					margin: '30px 0px',
				}}
			>
				<Map
					style={{ width: '100%', height: '100%' }}
					defaultState={{
						center: BASE_COORDINATES,
						zoom: 10,
					}}
					className='ymaps-layers-pane'
				>
					{pillars.map(pillar => (
						<Placemark
							geometry={pillar.coordinates}
							options={placemarkOptions}
						/>
					))}
				</Map>
			</div>
		</YMaps>
	)
}

export default MapComponent
