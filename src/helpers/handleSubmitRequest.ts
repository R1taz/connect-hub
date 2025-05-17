import { IConnectionLink } from '../interfaces/mapInterfaces'
import { IConnection, ResponseSendConnection } from '../interfaces/profileInterfaces'

interface Params {
	selectedLinks: number[]
	connectionLinks: IConnectionLink[]
	setSelectedLinks: (links: number[]) => void
	addConnection: (connect: IConnection) => void
	refetchConnectionLinks: () => void
	sendConnectRequest: (params: {
		pole_links: number[]
	}) => Promise<
		{ data: ResponseSendConnection; error?: undefined } | { data?: undefined; error: unknown }
	>
}

export const handleSubmitRequest = async ({
	selectedLinks,
	sendConnectRequest,
	addConnection,
	connectionLinks,
	setSelectedLinks,
	refetchConnectionLinks,
}: Params) => {
	try {
		if (selectedLinks.length === 0) return

		const findedLinks = connectionLinks.some(connectLink => {
			return selectedLinks.some(selectedLink => selectedLink === connectLink.pole_link)
		})

		if (!findedLinks) {
			const { data } = await sendConnectRequest({ pole_links: selectedLinks })
			if (data) {
				const newConnection = data.new_connection
				addConnection(newConnection)
			}
		}
		await refetchConnectionLinks()
		setSelectedLinks([])
	} catch (error) {
		console.log(error)
	}
}
