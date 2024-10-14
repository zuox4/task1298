import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {AuthProvider} from "@descope/react-sdk";
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider
          projectId="P2msZFI0ktS3dFMvrH4S6l7x9yF5">
          <App />
      </AuthProvider>

  </StrictMode>,
)
