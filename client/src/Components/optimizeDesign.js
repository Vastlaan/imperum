import React from 'react';
import useGlobal from "../store";
import { MdClose, MdCheck} from "react-icons/md";
import { FaSearchengin} from 'react-icons/fa'
import { DiBingSmall, DiYahoo } from "react-icons/di";

const OptimizeDesign = (style) =>{

	const [globalState, globalActions] = useGlobal()

	return(
		<div className='optimize'>

			<div 
				className='optimize__close' 
				onClick={()=>globalActions.handleOptimizeDesignDisplay()}
			>
				<MdClose />
			</div>

			<div className='optimize__header'>Search Engine Optimization</div>

			<div className='optimize__info'>
				<div className='optimize__info--header'>
					Wat doen we voor u?
				</div>
				<div className='optimize__info--google'>
					<h3><span class="blueG">G</span><span class="red">o</span><span class="yellow">o</span><span class="blueG">g</span><span class="greenG">l</span><span class="red">e</span></h3>
				</div>
				<ul className='optimize__info--list'>
					<li><MdCheck className='green'/>Search Console Optimization</li>					
					<li><MdCheck className='green'/>Social Media Marketing</li>
					<li><MdCheck className='green'/>Email Marketing</li>
					<li><MdCheck className='green'/>Website Traffic Analytics</li>
				</ul>
				<div className='optimize__info--icon'>
					<FaSearchengin className='optimize__info--icon-i'/>
				</div>
				<div className='optimize__info--yahoo'>
					<h3><DiYahoo/></h3>
				</div>
				<div className='optimize__info--bing'>
					<h3><DiBingSmall /> bing</h3>
				</div>
				
			</div>

			<div className='optimize__description'>
				<p>
					Op dit moment zijn duizenden mensen op zoek naar website, net als die van jou.
					80% van het verkeer op een website begint met een zoekopdracht. Daarom is zoekmachineoptimalisatie (SEO) zo belangrijk.
					Het bijhouden van SEO kost veel onderzoek en experimenten. De algoritmen van bijvorbeeld Google worden voortdurend bijgewerkt.
					Daarom is het echt belangrijk dat optimalisatie word uitgevoerd door ervaren specialisten.
				</p>
				<p>
					Wij helpen uw website hoog in zoekopdrachten verschenen. Onze specialiste gebruiken allerlei technieken om uw website meer zichtbaar te maken. 
				</p>
			</div>

		</div>
	)
}

export default OptimizeDesign