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
				<div className='modern__main--header'>
					<h1>Modern</h1>
					<h1>Design</h1>
				</div>
			</div>
		</div>
	)
}

export default ModernDesign