import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import { BASE_COORDINATES } from '../../constants/constants'

const MapComponent = () => {
	return (
		<YMaps query={{ apikey: import.meta.env.VITE_API_KEY }}>
			<div style={{ width: '100%', height: '500px' }}>
				<Map
					className='ymaps-layers-pane'
					state={{
						center: BASE_COORDINATES,
						zoom: 10,
					}}
					width='100%'
					height='100%'
				>
					<Placemark geometry={BASE_COORDINATES} />
				</Map>
			</div>
		</YMaps>
	)
}

export default MapComponent
