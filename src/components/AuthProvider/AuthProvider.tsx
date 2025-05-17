import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/react-redux'
import { useEffect } from 'react'

interface Props {
	children: React.ReactNode
}

const AuthProvider = ({ children }: Props) => {
	const isAuth = useAppSelector(state => state.authSlice.isAuth)

	const navigate = useNavigate()

	useEffect(() => {
		if (!isAuth) navigate('/login')
	}, [isAuth, navigate])

	if (!isAuth) return null

	return children
}

export default AuthProvider
