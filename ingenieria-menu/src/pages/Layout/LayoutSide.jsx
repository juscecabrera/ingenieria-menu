import LayoutSideOption from '../../components/LayoutSideOption/LayoutSideOption'
import LogoExampleSVG from '../../assets/svg/logoExample.svg'

import PlateSVG from '../../assets/svg/plate.svg'
import FileSVG from '../../assets/svg/fileSVG.svg'
import DataSVG from '../../assets/svg/dataSVG2.svg'
import GastroLogo from '../../assets/images/logoGastro.webp'


function LayoutSide() {
  return (
    <div className='layoutside-wrapper'>
        <div className='layoutside-svg-1-wrapper'>
            {/* Logo */}
            {/* <img src={LogoExampleSVG} className='layoutside-svg-1'/> */}
            <img src={GastroLogo} className='layoutside-svg-1'/>
        </div>

        <LayoutSideOption svg={PlateSVG} text={"Platos"} />
        <LayoutSideOption svg={FileSVG} text={"Costos"} />
        <LayoutSideOption svg={DataSVG} text={"Informes"} />

    </div>
  )
}

export default LayoutSide