import React, {useState} from 'react';
import useGlobal from "../store";
import { MdClose, MdDevices } from "react-icons/md";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import Mountain from '../img/lime.png'

import { computer } from "../inline_styles/computer"
import { tablet } from "../inline_styles/tablet"
import { mobile } from "../inline_styles/mobile"


const ResponsiveDesign = (style) =>{

	const [globalState, globalActions] = useGlobal()
	const [screen, setScreen] = useState(computer)

	const changeDisplay = (target) =>{

		if(target===mobile){
			setScreen(mobile)
		}else if(target===tablet){
			setScreen(tablet)
		}else if(target===computer){
			setScreen(computer)
		}
		
	}

	return(
		<div className='designWindow'>

			<div 
				className='designWindow__close' 
				onClick={()=>globalActions.handleResponsiveDesignDisplay()}
			>
				<MdClose />
			</div>

			<div className='designWindow__box' style={{width:screen.width}}>

				<div className='designWindow__box__header' style={screen.header}>Responsive Design</div>
				<div className='designWindow__box__buttons' style={screen.buttons}>
					<div className='designWindow__box__buttons--1' style={screen.button} onClick={()=>changeDisplay(computer)}>
						<FaLaptop style={screen.buttonIcon}  />
					</div>
					<div className='designWindow__box__buttons--2' style={screen.button} onClick={()=>changeDisplay(tablet)}>
						<FaTabletAlt style={screen.buttonIcon} />
					</div>
					<div className='designWindow__box__buttons--3' style={screen.button} onClick={()=>changeDisplay(mobile)}>
						<FaMobileAlt style={screen.buttonIcon} />
					</div>
				</div>
				<div className='designWindow__box__icon' style={screen.icon}>
					<div className='designWindow__box__icon-box'>
						<MdDevices className='designWindow__box__icon-box-i'/>
					</div>
				</div>
				<div className='designWindow__box__para' style={screen.para}>
					<p>
						In de wereld bestaat meer dan 35 milijard apparaten die met Internet kunnen verbinden. 
						Laptops, PC's, tablets, mobieltjes - bijna idereen maakt dagelijks gebruik van een van die apparaten.
						Daarom is het heel belangrijk dat jouw website goed eruitziet op verschillende schermresoluties.
						Om daar een beter beeld van te krijgen klik een van de bovenste knopies - de layout gaat tot mobiel, tablet of computer maat aanpassen.
					</p>
				</div>
				<div className='designWindow__box__images' style={screen.images}>
					<div className='designWindow__box__images--1' style={screen.picture}>
						<img src={Mountain} alt='landscape' />
					</div>
					<div className='designWindow__box__images--1' style={screen.picture}>
						<img src={Mountain} alt='landscape' />
					</div>
					<div className='designWindow__box__images--1' style={screen.picture}>
						<img src={Mountain} alt='landscape' />
					</div>
				</div>
			</div>
			
		</div>
	)
}

export default ResponsiveDesign