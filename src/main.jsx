import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './router/router.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './contexts/AuthProvider.jsx'
import DarkProvider from './contexts/DarkProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <DarkProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </DarkProvider>



  </StrictMode>,
)
