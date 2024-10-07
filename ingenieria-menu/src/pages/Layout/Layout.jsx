import '../../main.css'
import { Outlet } from 'react-router-dom'
import LayoutSide from './LayoutSide'
import NavBar from '../../components/NavBar/NavBar'


function Layout() {
  return (
    <>
        <LayoutSide />
        <NavBar />
        <main>
            <Outlet />
        </main>
    </>
    
  )
}

export default Layout