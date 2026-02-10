import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './assets/Components/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import theme from './assets/Store/ThemeMui'
import { CssBaseline } from '@mui/material'
import ActivityPage from './assets/Components/ActivityPage'

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
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>
)
