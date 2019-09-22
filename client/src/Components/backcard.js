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
				<li className='backcard__list--item'><p className='backcard__list--item-text'> Sterk design aan uw bedrijf gepast.</p></li>
				<li className='backcard__list--item'><p className='backcard__list--item-text'> Inclusief Web Hosting en Domein Naam.</p></li>
				<li className='backcard__list--item'><p className='backcard__list--item-text'>Gratis tekst wijzigingen.</p></li>
				<li className='backcard__list--item'><p className='backcard__list--item-text'>Service 7 dagen in de week!</p></li>
			</ul>
			<a href='/pakkets' className='backcard__btn'>Bestel</a>
		</div>
		)
}

export default Backcard