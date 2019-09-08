import React, {useState} from 'react';
import useGlobal from "../store";
import { MdClose, MdDevices } from "react-icons/md";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import Mountain from '../img/lime.png'

const computer = {
	width:"calc(100vw - 4rem)",
	header:{
		top:"0",
		left:"0",
		width:"calc(60% - 4rem)",
		height:"20%",
		transform:"translate(2rem, 2rem)",
		backgroundColor: "rgba(0,0,0,.1)",
		borderRadius: "100px"
	},
	buttons:{
		top:"0",
		right:"0",
		width:"calc(40% - 4rem)",
		height:"20%"
	},
	icon:{
		top:"calc(20% + 2rem)",
		left:"0",
		width: "calc(30% - 4rem)",
		height:"50%"
	},
	para:{
		top:"calc(20% + 2rem)",
		right:"0",
		width: "calc(70% - 4rem)",
		height:"50%"
	},
	images:{
		height:"25%",
		width: "calc(100%)",
		position:"absolute",
		top:"calc(70% + 2rem)",
		left:"0",
		transform:"translate(0, 0)"
	},
	button:{
		width:"10rem",
		height: "10rem"
	},
	buttonIcon:{
		fontSize: "4rem"
	},
	picture:{
		width:"33%"
	}
}
const tablet = {
	width:"calc(60vw - 4rem)",
	height:"auto",

	header:{
		top:"0",
		left:"0",
		width:"calc(100% - 4rem)",
		height:"20%",
		transform:"translate(2rem, 2rem)",
		backgroundColor: "rgba(0,0,0,0)",
		borderRadius: "100px"
	},
	buttons:{
		top:"20%",
		right:"0",
		width:"calc(100% - 4rem)",
		height:"20%"
	},
	icon:{
		top:"calc(50% + 2rem)",
		left:"0",
		width: "calc(40% - 4rem)",
		height:"50%"
	},
	para:{
		top:"calc(50% + 2rem)",
		right:"0",
		width: "calc(60% - 4rem)",
		height:"50%",
		overflowY:"scroll",
		alignItems:"flex-start"
	},
	images:{
		height:"25%",
		width: "calc(100%)",
		position:"absolute",
		top:"120%",
		left:"0",
		transform:"translate(0, 0)"
	},
	button:{
		width:"10rem",
		height: "10rem"
	},
	buttonIcon:{
		fontSize: "4rem"
	},
	picture:{
		width:"33%"
	}
}
const mobile = {
	width:"calc(30vw - 4rem)",

	header:{
		top:"0",
		left:"0",
		width:"calc(100% - 4rem)",
		height:"15%",
		transform:"translate(2rem, 2rem)",
		backgroundColor: "rgba(0,0,0,0)",
		borderRadius: "100px",
		fontSize:"3rem"
	},
	buttons:{
		top:"10%",
		right:"0",
		width:"calc(100% - 4rem)",
		height:"20%"
	},
	icon:{
		top:"calc(40% + 2rem)",
		left:"0",
		width: "calc(100%)",
		height:"20%"
	},
	para:{
		top:"calc(65% + 5rem)",
		right:"0",
		width: "calc(100%)",
		height:"80%",
		overflowY:"scroll",
		alignItems:"flex-start",
		padding:"0",
		textAlign:"center"
	},
	images:{
		height:"100%",
		width: "calc(100%)",
		position:"absolute",
		top:"150%",
		left:"0",
		transform:"translate(0, 0)",
		flexDirection:"column",
		alignItems:"center"
	},
	button:{
		width:"5rem",
		height: "5rem"
	},
	buttonIcon:{
		fontSize: "2.5rem"
	},
	picture:{
		width:"100%"
	}
}

const ResponsiveDesign = (style) =>{

	const [globalState, globalActions] = useGlobal()
	const [screen, setScreen] = useState(computer)

	const changeDisplay = (target) =>{
		if(target===mobile){
			setScreen(mobile)
		}else if(target===tablet){
			setScreen(tablet)
		}
		else if(target===computer){
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
						Laptops, PC's, mobiltjes - bijna idereen maakt dagelijks gebruik van een van die apparaten.
						Daarom is het heel belangrijk dat jouw website goed eruitziet op verschillende schermresoluties.
						Om daar een beter beeld van te krijgen klik een van de bovenste knopies - de layout gaat tot mobile, tablet of computer maat aanpassen.
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