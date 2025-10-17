import { Outlet } from 'react-router'
import './App.css'
import Header from './comps/header/Header'
import Footer from './comps/footer/Footer'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <Header />
      <main className='grow-1'>
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