import React from 'react';
import {FaCogs, FaSearchengin} from 'react-icons/fa'
import { MdDevices, MdWallpaper} from "react-icons/md";
import useGlobal from "../store";
import ResponsiveDesign from './responsiveDesign'
import ModernDesign from './modernDesign'
import OptimizeDesign from './optimizeDesign'
import FunctionalDesign from './functionalDesign'




const Design = () =>{

	

	const [globalState, globalActions] = useGlobal()

	return(
		<div className="design">		
			<div className='design__section' onClick={()=>globalActions.handleResponsiveDesignDisplay()}>
				<h1 className='design__section--header'>Responsive Websites</h1>
				<div className='design__section--icon design__section--icon-1'>
					<MdDevices className='design__section--icon-i' />
				</div>
				<div className='design__section--para'>
					<p>
						In de tijden van diverse digital devices het is heel belangrijk dat jouw website zowel op laptops als een mobiles knap er uit ziet.
					</p>
					
				</div>
			</div>
			
			<div className='design__section' onClick={()=>globalActions.handleOptimizeDesignDisplay()}>
				<h1 className='design__section--header'>Search Optimization</h1>
				<div className='design__section--icon design__section--icon-3'>
					<FaSearchengin className='design__section--icon-i' />
				</div>
				<div className='design__section--para'>
					<p>Wij zorgen dat jouw website online-zichtbaar is. Zodat klanten van gewenste doelgroup worden altijd bereikt.</p>
					
				</div>
			</div>

			<div className='design__section' onClick={()=>globalActions.handleModernDesignDisplay()}>
				<h1 className='design__section--header'>Modern Design</h1>
				<div className='design__section--icon design__section--icon-2'>
					<MdWallpaper className='design__section--icon-i' />
				</div>
				<div className='design__section--para'>
					<p>lorem ipsum dolor sit amet</p>
					<p>lorem ipsum dolor sit amet</p>
					<p>lorem ipsum dolor sit amet</p>
				</div>
			</div>
			
			<div className='design__section' onClick={()=>globalActions.handleFunctionalDesignDisplay()}>
				<h1 className='design__section--header'>Desired Functionality</h1>
				<div className='design__section--icon design__section--icon-4'>
					<FaCogs className='design__section--icon-i' />
				</div>
				<div className='design__section--para'>
					<p>Wil jij dat jouw klanten via de website een afspraak kunnen maken? Of wil je dat ze automatische herinneringen op hun emails ontvangen? Simple Webshops zijn ook mogelijk.</p>
				</div>
			</div>

			{globalState.displayResponsiveDesign?<ResponsiveDesign/>:null}
			{globalState.displayModernDesign?<ModernDesign/>:null}
			{globalState.displayOptimizeDesign?<OptimizeDesign/>:null}
			{globalState.displayFunctionalDesign?<FunctionalDesign/>:null}
		</div>
	)
}

export default Design