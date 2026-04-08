import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './styles/color.css';
import './styles/typography.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

import '@fontsource/oxanium/400.css';
import '@fontsource/oxanium/600.css';
import '@fontsource/oxanium/700.css';

import { DataParticles } from '@components';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataParticles />
    <App />
  </StrictMode>,
)
