import LayoutSideOption from '../../components/LayoutSideOption/LayoutSideOption'

import PlateSVG from '../../assets/svg/plate.svg'
import PlateWhiteSVC from '../../assets/svg/plateWhite.svg'


import FileSVG from '../../assets/svg/fileSVG.svg'
import FileWhiteSVG from '../../assets/svg/fileSVGWhite.svg'

import DataSVG from '../../assets/svg/dataSVG2.svg'
import DataWhiteSVG from '../../assets/svg/dataSVG2White.svg'

import GastroLogo from '../../assets/images/logoGastro.webp'


function LayoutSide() {
  return (
    <div className='layoutside-wrapper'>
        <div className='layoutside-svg-1-wrapper'>
            <img src={GastroLogo} className='layoutside-svg-1'/>
        </div>

        <LayoutSideOption svg={PlateSVG} svgActive={PlateWhiteSVC} text={"Platos"} />
        <LayoutSideOption svg={FileSVG} svgActive={FileWhiteSVG}  text={"Costos"} />
        <LayoutSideOption svg={DataSVG} svgActive={DataWhiteSVG}  text={"Informes"} />

    </div>
  )
}

export default LayoutSide