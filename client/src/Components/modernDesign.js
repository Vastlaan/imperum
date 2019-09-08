import React from 'react';
import useGlobal from "../store";
import { MdClose } from "react-icons/md";

const ModernDesign = (style) =>{

	const [globalState, globalActions] = useGlobal()

	return(
		<div className='designWindow'>

			<div 
				className='designWindow__close' 
				onClick={()=>globalActions.handleModernDesignDisplay()}
			>
				<MdClose />
			</div>
			<div className='designWindow__header'>Modern Design</div>
		</div>
	)
}

export default ModernDesign