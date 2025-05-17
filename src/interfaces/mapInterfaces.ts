import { AcceptStatus } from './usersInterfaces'

export interface IPillar {
	id: number
	longitude: string
	latitude: string
	street: string
	building: number
	index: string
	max_connections: number
	owner: {
		name: string
		email: string
		phone: string
	}
}

export interface IPillarLink {
	id: number
	pole_a: IPillar
	pole_b: IPillar
	length: string
}

export interface IConnectionLink {
	id: number
	connection: {
		id: number
		created_at: string | null
		updated_at: string | null
		provider: number
		status: number
	}
	pole_link: number
	pole_a_answer: number | AcceptStatus | null
	pole_b_answer: number | AcceptStatus | null
	status: number
}

export interface IAddPillar {
	longitude: number
	latitude: number
	street: string
	building: number
	index: string
	max_connections: number
	owner_id: number
}
