import { YMaps, Map, Placemark, Polyline } from '@pbe/react-yandex-maps'
import { BASE_COORDINATES } from '../../constants/constants'
import pointSVG from '../../assets/point.svg'
import { useAppSelector } from '../../hooks/react-redux'
import config from '../../config/config.json'

const MapComponent = () => {
	const pillars = useAppSelector(state => state.mapSlice.pillars)

	const placemarkOptions = {
		iconLayout: 'default#image',
		iconImageHref: pointSVG,
		iconImageSize: [30, 30],
		iconImageOffset: [-15, -30],
	}

	const polylines = [
		{
			geometry: [
				[56.330176, 43.997982],
				[56.285413, 43.930088],
			],
			strokeColor: '#ff0000',
		},
		{
			geometry: [
				[56.330176, 43.997982],
				[56.313019, 44.007747],
				[56.285413, 43.930088],
			],
			strokeColor: '#19ff19',
		},
		{
			geometry: [
				[56.330176, 43.997982],
				[56.311152, 43.92521],
			],
			strokeColor: '#ffff00',
		},
		{
			geometry: [
				[56.285413, 43.930088],
				[56.311152, 43.92521],
			],
			strokeColor: '#ffff00',
		},
	]

	return (
		<YMaps query={{ apikey: config.YANDEX_API_KEY }}>
			<div style={{ width: '100%', height: '500px', margin: '30px 0px' }}>
				<Map
					style={{ width: '100%', height: '100%' }}
					defaultState={{ center: BASE_COORDINATES, zoom: 12 }}
				>
					{pillars.map((pillar, index) => (
						<Placemark key={index} geometry={pillar.coordinates} options={placemarkOptions} />
					))}

					{polylines.map(polyline => (
						<Polyline
							geometry={polyline.geometry}
							options={{
								strokeColor: polyline.strokeColor,
								strokeWidth: 4,
								strokeOpacity: 1,
							}}
						/>
					))}
				</Map>
			</div>
		</YMaps>
	)
}

export default MapComponent
