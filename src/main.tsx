import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { fontTheme } from './theme/fontTheme.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={fontTheme}>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</StrictMode>
)
