import React from 'react';
import useGlobal from "../store";
import { MdClose } from "react-icons/md";

const FunctionalDesign = (style) =>{

	const [globalState, globalActions] = useGlobal()

	return(
		<div className='designWindow'>

			<div 
				className='designWindow__close' 
				onClick={()=>globalActions.handleFunctionalDesignDisplay()}
			>
				<MdClose/>
			</div>
			<div className='designWindow__header'>Functional Design</div>
		</div>
	)
}

export default FunctionalDesign