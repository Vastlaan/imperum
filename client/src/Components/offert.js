import React from 'react';
import Card from './card'
import Backcard from './backcard'
import Design from './design'

const Offert =()=>{

	return(
		<div className='offert'>
			<div className='offert__development'>
				<div className='offert__development--rotate'>
					<div className='offert__development--rotate-side offert__development--rotate-side-front'>
						<Card />
					</div>
					<div className='offert__development--rotate-side offert__development--rotate-side-back'>
						<Backcard />
					</div>
				</div>
			</div>
			<div className='offert__design'>
				<Design />
			</div>
		</div>
		)
}

export default Offert;