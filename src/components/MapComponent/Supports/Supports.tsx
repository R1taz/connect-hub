import { Box, Divider, Rating, Stack, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'

interface Props {
	name: string
	location: [number, number]
	rating: string
}

const Supports = ({ name, location, rating }: Props) => {
	return (
		<Stack
			sx={{
				padding: '5px',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Box sx={{ width: '25%' }}>
					<Typography sx={{ fontSize: '20px' }}>{name}</Typography>
					<Typography>{location}</Typography>
				</Box>
				<Box>
					<Rating
						name='read-only'
						value={+rating}
						sx={{ color: 'purple' }}
						readOnly
					/>
				</Box>
				<Box>
					<NavLink className={styles.link} to='#'>
						Показать на карте
					</NavLink>
				</Box>
			</Box>
		</Stack>
	)
}

export default Supports
