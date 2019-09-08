import React from 'react';
//import {FaSketch, FaGlobe, FaEdit, FaCalendarCheck} from 'react-icons/fa'

const Backcard = () =>{

	return(
		<div className='card backcard'>
			<div className='backcard__blur'>
				<div  className='backcard__blur--badge'><span>POPULAR</span></div>
			</div>
			<h1 className='backcard__header'><span>Geel</span> Pakket</h1>
			<p className='backcard__price'>29 <span>&euro;</span></p>
			<ul className='backcard__list'>
				<li className='backcard__list--item'><p className='backcard__list--item-text'> <span>Sterk design</span> aan uw bedrijf gepast.</p></li>
				<li className='backcard__list--item'><p className='backcard__list--item-text'> Inclusief <span>Web Hosting</span> en <span>Domein Naam</span>.</p></li>
				<li className='backcard__list--item'><p className='backcard__list--item-text'><span>Gratis</span> tekst wijzigingen.</p></li>
				<li className='backcard__list--item'><p className='backcard__list--item-text'><span>Service 7 dagen</span> in de week!</p></li>
			</ul>
			<div className='backcard__btn'>Bestel</div>
		</div>
		)
}

export default Backcard