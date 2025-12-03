import { Outlet, useLocation, useNavigation } from 'react-router'
import './App.css'
import Header from './comps/header/Header'
import Footer from './comps/footer/Footer'
import { ToastContainer } from 'react-toastify'
import Loading from './pages/Loading'
import { useEffect, useState } from 'react'

function App() {
  // adding global loading animation effect on page load / navigate
  const navigation = useNavigation();
  const location = useLocation();
  const [isPageLoading, setIsPageLoading] = useState(false);
  useEffect(() => {
    setIsPageLoading(true);
    const fakeLoading = setTimeout(() => setIsPageLoading(false), 500);
    return () => clearTimeout(fakeLoading);
  }, [location]);
  const isLoading = navigation.state === 'loading' || isPageLoading;
  if (isLoading) return <Loading />

  return (
    <>
      <Header />
      <main className='grow-1 pt-10'>
        <Outlet />
      </main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Footer />
    </>
  )
}

export default App