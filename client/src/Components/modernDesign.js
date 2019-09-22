import React from 'react';
import useGlobal from "../store";
import { MdClose} from "react-icons/md";
import { TiHeartOutline, TiGroupOutline,TiCalendarOutline } from "react-icons/ti";

const ModernDesign = (style) =>{

	const [globalState, globalActions] = useGlobal()

	return(
		<div className='modern'>

			<div 
				className='modern__close' 
				onClick={()=>globalActions.handleModernDesignDisplay()}
			>
				<MdClose />
			</div>
			<div className='modern__main'>
				<ul className='modern__main--menu'>
					<li className='modern__main--menu-blue'>Contacts</li>
					<li className='modern__main--menu-pink'>Posts</li>
					<li className='modern__main--menu-green'>Carrer</li>
					<li className='modern__main--menu-red'>Menu</li>
				</ul>
				<div className='modern__main--header'>
					<h1>Modern</h1>
					<h1>Design</h1>
				</div>
				<div className='modern__main--buttons'>
					<div className='modern__main--buttons-1'><TiCalendarOutline/></div>
					<div className='modern__main--buttons-2'><TiGroupOutline/></div>
					<div className='modern__main--buttons-3'><TiHeartOutline/></div>
				</div>
				<div className='modern__main--text'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. 
					</p>
					<br/>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. 
					</p>
				</div>
			</div>
		</div>
	)
}

export default ModernDesign