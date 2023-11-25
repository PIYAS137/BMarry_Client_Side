import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import FirebaseAuthContext from './Context/FirebaseAuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseAuthContext>
      <RouterProvider router={router} />
    </FirebaseAuthContext>
  </React.StrictMode>,
)
