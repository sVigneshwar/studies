import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import App2 from './App2.jsx'
import FormikMasterForm from './FormikMasterForm.jsx'
import RHFMasterForm from './RHFMasterForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <App2 /> */}
    {/* <RHFMasterForm /> */}
    <FormikMasterForm />
  </StrictMode>,
)
