import { Outlet } from 'react-router'
import './App.css'
import Header from './comps/header/Header'
import Footer from './comps/footer/Footer'

function App() {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App