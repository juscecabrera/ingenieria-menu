import React from 'react'
import Arrow from '../../assets/svg/Arrow.svg'
import Circle from '../../assets/svg/Circle_black.svg'

function NavBar() {
  return (
    <div className='navbar-wrapper'>
        <div className='nav-wrapper'>
            {/* <div className='nav-profile'> </div> */}
            <img className='nav-profile'src={Circle} alt="nav-circle" />
            
            <p>John Doe</p>
            <div className="nav-arrow-div">
                <img src={Arrow}  className="nav-arrow-svg"></img>
            </div>

        </div>

    </div>
  )
}

export default NavBar