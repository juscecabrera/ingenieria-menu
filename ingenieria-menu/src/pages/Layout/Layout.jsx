import '../../main.css'
import { Outlet } from 'react-router-dom'
import LayoutSide from './LayoutSide'


function Layout() {
  return (
    <>
        <LayoutSide />

        <main>
            <Outlet />
        </main>
    </>
    
  )
}

export default Layout