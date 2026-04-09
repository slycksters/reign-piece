import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import '@fontsource/oxanium/400.css';
import '@fontsource/oxanium/600.css';
import '@fontsource/oxanium/700.css';
import { DataParticles, EnergyPulse } from '@components';
import { router } from '@router';
import './index.css';
import './styles/color.css';
import './styles/typography.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataParticles />
    <EnergyPulse />
    <RouterProvider router={router} />
  </StrictMode>,
);
