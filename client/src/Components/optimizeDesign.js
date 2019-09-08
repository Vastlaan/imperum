import React from 'react';
import useGlobal from "../store";
import { MdClose } from "react-icons/md";

const OptimizeDesign = (style) =>{

	const [globalState, globalActions] = useGlobal()

	return(
		<div className='designWindow'>

			<div 
				className='designWindow__close' 
				onClick={()=>globalActions.handleOptimizeDesignDisplay()}
			>
				<MdClose />
			</div>
			<div className='designWindow__header'>Optimize Design</div>
		</div>
	)
}

export default OptimizeDesign