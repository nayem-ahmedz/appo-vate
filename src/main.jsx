import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './comps/home/Home.jsx'
import Apps from './pages/Apps.jsx'
import Installation from './pages/Installation.jsx'
import NoPage from './pages/NoPage.jsx'
import AppDetails from './pages/AppDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: '/apps', Component: Apps },
      { path: '/installation', Component: Installation },
      { path: '/apps/:id', loader: () => fetch('/data.json'), Component: AppDetails },
      { path: '/*', Component: NoPage }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
