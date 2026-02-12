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
import SearchingPage from './assets/Components/SearchingPage'
import RootLayout from './assets/Components/RootLayout'


const msalInstance = new PublicClientApplication(msalConfig);
const router = createBrowserRouter([
  
  {
    path: "/",
    element:<RootLayout />,
    children:[
      {
        index: true,//per indicare che è la route di default
        element: <HomePage />,
      },
      {
        path:"/activity/:id",
        element:<ActivityPage />,
      },
      {
        path:"/linkprovaactivitypage",
        element:<SearchingPage />
      }
    ]
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
