import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {AuthProvider} from "@descope/react-sdk";
import App from './App.jsx'
import './index.css'
import axios from "axios";
axios.defaults.baseURL = 'https://servertask-nine.vercel.app/';
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider
          projectId="P2msZFI0ktS3dFMvrH4S6l7x9yF5">
          <App />
      </AuthProvider>

  </StrictMode>,
)
