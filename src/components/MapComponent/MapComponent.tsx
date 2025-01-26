import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import { BASE_COORDINATES } from '../../constants/constants'

const MapComponent = () => {
	return (
		<YMaps query={{ apikey: import.meta.env.VITE_API_KEY }}>
			<div
				style={{
					width: '100%',
					height: '500px',
					filter: 'contrast(1.0) brightness(1.0)',
				}}
			>
				<Map
					// Можно указывать стили напрямую
					style={{ width: '100%', height: '100%' }}
					// Рекомендуется использовать defaultState для начального состояния карты
					defaultState={{
						center: BASE_COORDINATES,
						zoom: 10,
					}}
				>
					<Placemark geometry={BASE_COORDINATES} />
				</Map>
			</div>
		</YMaps>
	)
}

export default MapComponent
