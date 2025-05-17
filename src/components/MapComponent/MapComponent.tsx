import { YMaps, Map, Placemark, Polyline } from '@pbe/react-yandex-maps'
import { BASE_COORDINATES } from '../../constants/constants'

import config from '../../config/config.json'
import { IConnectionLink, IPillar, IPillarLink } from '../../interfaces/mapInterfaces'
import { useAppSelector } from '../../hooks/react-redux'
import { createGeometryPolyline } from '../../helpers/createGeometryPolyline'
import { TypeOrganization } from '../../interfaces/usersInterfaces'
import { useState } from 'react'
import MapButtons from './MapButtons/MapButtons'
import { placemarkOptions } from '../../helpers/placemarkOptions'
import { polylineOptions } from '../../helpers/polylineOptions'
import { Box, Modal, Typography } from '@mui/material'
import MapForm from './MapForm/MapForm'
import { useGetOrganizationsQuery } from '../../api/authApi'

interface Props {
	pillars: IPillar[]
	pillarLinks: IPillarLink[]
	connectionLinks: IConnectionLink[]
	type: TypeOrganization
	refetchConnectionLinks: () => void
}

const MapComponent = ({
	pillars,
	pillarLinks,
	connectionLinks,
	type,
	refetchConnectionLinks,
}: Props) => {
	const nameOrg = useAppSelector(state => state.userSlice.user?.user_info?.organization.name)
	const ownerId = useAppSelector(state => state.userSlice.user?.user_info?.organization.id)

	const { data, isLoading } = useGetOrganizationsQuery()

	const [selectedLinks, setSelectedLinks] = useState<number[]>([])

	const handleSetLinks = (linkId: number) => {
		if (type === 'электросетевая компания') return
		setSelectedLinks(prev => {
			if (prev.find(item => item === linkId)) return prev
			else return [...prev, linkId]
		})
	}

	const [isOpen, setIsOpen] = useState(false)
	const [coords, setCoords] = useState<[number, number]>([0, 0])
	const [isSetData, setIsSetData] = useState(false)

	const handleSetCoords = (e: any) => {
		if (!isSetData) return
		setIsOpen(true)
		const mapCoords = e.get('coords') as [number, number]
		setCoords(mapCoords)
	}

	if (isLoading) return <h1>Загрузка данных...</h1>

	return (
		<>
			<YMaps query={{ apikey: config.YANDEX_API_KEY }}>
				<div
					style={{
						width: '100%',
						height: '500px',
						margin: '30px 0px',
					}}
				>
					<Map
						style={{ width: '100%', height: '100%' }}
						defaultState={{ center: BASE_COORDINATES, zoom: 12 }}
						onClick={(e: { get: (arg0: string) => [number, number] }) => {
							if (type === 'магистральный провайдер' || !isSetData) return
							const mapCoords = e.get('coords') as [number, number]
							handleSetCoords(mapCoords)
						}}
					>
						{pillars.map((pillar, index) => (
							<Placemark
								key={index}
								geometry={[pillar.longitude, pillar.latitude]}
								options={placemarkOptions({
									pillarOwner: pillar.owner.name,
									type,
									nameOrg: nameOrg!,
								})}
							/>
						))}

						{pillarLinks.map((pillarLink, index) => (
							<Polyline
								key={index}
								geometry={createGeometryPolyline(pillarLink.pole_a, pillarLink.pole_b)}
								options={polylineOptions({ connectionLinks, pillarLink, type, selectedLinks })}
								onClick={() => {
									if (!isSetData || type === 'электросетевая компания') return
									handleSetLinks(pillarLink.id)
								}}
							/>
						))}
					</Map>
				</div>
			</YMaps>

			<MapButtons
				type={type}
				isSetData={isSetData}
				connectionLinks={connectionLinks}
				setIsSetData={() => setIsSetData(prev => !prev)}
				selectedLinks={selectedLinks}
				setSelectedLinks={setSelectedLinks}
				refetchConnectionLinks={refetchConnectionLinks}
			/>

			<Modal open={isOpen} sx={{ backdropFilter: 'blur(2px)' }}>
				<Box
					sx={{
						outline: 'none',
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						px: 10,
						width: 500,
						height: 650,
						bgcolor: 'white',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Typography variant='h4'>ДОБАВИТЬ НОВУЮ ОПОРУ</Typography>
					<MapForm
						coords={coords}
						ownerId={ownerId!}
						organizations={data!}
						onClose={() => {
							setCoords([0, 0])
							setIsSetData(false)
							setIsOpen(false)
						}}
					/>
				</Box>
			</Modal>
		</>
	)
}

export default MapComponent
