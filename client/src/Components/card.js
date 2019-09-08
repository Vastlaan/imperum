import React from 'react';
import {FaCheck} from 'react-icons/fa'
import { TiArrowForward } from "react-icons/ti";

const Card = () =>{
	return(
		<div className='card'>
			<div className='card__blur'>&nbsp;</div>
			<div className='card__header'>
				<h1 className='card__header--main'>Bestel je eigen Website</h1>
				<div className='card__header--price'>
					<p className='card__header--price--text card__header--price-text-left'>al vanaf</p>
					<p className='card__header--price-number'>29 <span>&euro;</span></p>
					<p className='card__header--price--text card__header--price-text-right'>per maand</p>
				</div>
			</div>
			<div className='card__details'>
				<h1 className='card__details--header'>All Inclusief:</h1>
				<ul className='card__details--list'>
					<li><FaCheck className='card__details--list-icon'/> Design</li>
					<li><FaCheck className='card__details--list-icon'/> Developing</li>
					<li><FaCheck className='card__details--list-icon'/> Domein naam</li>
					<li><FaCheck className='card__details--list-icon'/> Web Hosting</li>
				</ul>
				<TiArrowForward className='card__details--medal' />
				
			</div>
		</div>
		)
}

export default Card