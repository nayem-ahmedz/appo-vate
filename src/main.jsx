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
import Error from './comps/utils/Error.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import Login from './pages/auth/Login.jsx'
import Register from './pages/auth/Register.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'
import Support from './pages/Support.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: Home, errorElement: <Error /> },
      { path: '/apps', Component: Apps },
      { path: '/installation', element: <PrivateRoute> <Installation /> </PrivateRoute>, errorElement: <Error /> },
      { path: '/apps/:id', loader: ({params}) => fetch(`${import.meta.env.VITE_BACKEND_URL}/apps/${params.id}`), Component: AppDetails },
      { path: '/login', Component: Login },
      { path: '/register', Component: Register },
      { path: '/support', Component: Support },
      { path: '/about-us', Component: About },
      { path: '/contact', Component: Contact },
      { path: '/*', Component: NoPage }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
