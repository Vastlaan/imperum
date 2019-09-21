import React from 'react';
import useGlobal from "../store";
import { MdClose } from "react-icons/md";

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
					<li className='border-blue'>Contacts</li>
					<li className='border-pink'>Contacts</li>
					<li className='border-green'>Contacts</li>
					<li className='border-red'>Contacts</li>
				</ul>
				<div className='modern__main--header'>
					
					<div className='modern__main--header-red'></div>
					<div className='modern__main--header-blue'></div>
					<div className='modern__main--header-yellow'></div>
					<div className='modern__main--header-pink'></div>
					<h1>Modern</h1>
					<h1>Design</h1>
				</div>
			</div>
		</div>
	)
}

export default ModernDesign