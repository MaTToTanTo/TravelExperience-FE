import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './assets/Components/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import theme from './assets/Store/ThemeMui'
import { CssBaseline } from '@mui/material'
import ActivityPage from './assets/Components/ActivityPage'
import { DataProvider } from './assets/Store/DataContent'
import { MsalProvider } from '@azure/msal-react'
import { msalConfig } from './assets/AuthConfig';
import { PublicClientApplication } from '@azure/msal-browser'
import { ApiProvider } from './assets/Store/ApiContext'



const msalInstance = new PublicClientApplication(msalConfig);
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  /*{
    path:"/activity/:id",
    element:<ActivityPage />,
  },*/
  {
    path:"/linkprovaactivitypage",
    element:<ActivityPage />
  }
])

createRoot(document.getElementById('root')).render(
  <MsalProvider instance={msalInstance}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <ApiProvider>
          <DataProvider>
            <RouterProvider router={router} />
          </DataProvider>
        </ApiProvider>
    </ThemeProvider>
  </MsalProvider>
)
