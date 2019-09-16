import React from 'react';
import useGlobal from "../store";
import { MdClose} from "react-icons/md";
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
					<h6>Search Console Optimization</h6>
					<h6>Website Traffic Analytics</h6>
				</div>
				<div className='optimize__info--yahoo'>
					<h3><DiYahoo/></h3>
					<h6>Search Marketing</h6>

				</div>
				<div className='optimize__info--bing'>
					<h3><DiBingSmall /> bing</h3>
					<h6>SEO Analizer</h6>
				</div>
				<div className='optimize__info--icon'>
					<FaSearchengin className='optimize__info--icon-i'/>
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
					Wij helpen uw website hoog in zoekopdrachten verschenen. Onze specialiste passen allerlei technieken om uw website lokaal op eerste pagina zichtbaar kunnen zijn. 
				</p>
			</div>

		</div>
	)
}

export default OptimizeDesign