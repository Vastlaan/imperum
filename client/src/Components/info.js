import React from 'react';
import {FaBuffer} from 'react-icons/fa';

const Info = () =>{
	return(
		<div className='info'>
		<div className='info--background'>
					<p className='info--background--para info--background--para-start'>Creative</p>
					<p className='info--background--para info--background--para-end'>Design</p>
					<p className='info--background--para info--background--para-start'>Professional</p>
					<p className='info--background--para info--background--para-center'>Solutions</p>
					<p className='info--background--para info--background--para-start'>Satisying</p>
					<p className='info--background--para info--background--para-end'>Results</p>
					
				</div>
			<h1 className='info__header'>
				<span><FaBuffer/></span>
				Aanbieding
			</h1>
			<div className='info__window'>
				
				<div className='info__window--blocks'>
					<div className='info__window--blocks-1 block block__1'>
						<div className="pakket">
							<h1 className="pakket__header"><span className='yellow'>Geel</span> pakket</h1>
							<p className="pakket__price">
								29 &euro; <span>per maand</span>
							</p>
							<ul className='pakket__info'>
								<li>Beste oplossing voor eenmanszaak ondernemers</li>
								<li>Inclusief Web Hosting en Domain Naam</li>
								<li>Design aan uw wensen gepast</li>
								<li>Gratis text wijzigingen</li>
							</ul>
							<a href='/pakkets'className="pakket__button">
								Meer weten
							</a>
						</div>
					</div>
					<div className='info__window--blocks-2 block block__2'>
						<div className="pakket">
							<h1 className="pakket__header"><span className='red'>Rood</span> pakket</h1>
							<p className="pakket__price">
								49 &euro; <span>per maand</span>
							</p>
							<ul className='pakket__info'>
								<li>Bedoeld voor kleine zaaken</li>
								<li><span className="yellow">Geel</span> pakket plus:</li>
								<li>Contact formulier</li>
								<li>Google Maps</li>
								<li>Afspraak online maken</li>
							</ul>
							<a href='/pakkets'className="pakket__button">
								Meer weten
							</a>
						</div>
					</div>
					<div className='info__window--blocks-3 block block__3'>
						<div className="pakket">
							<h1 className="pakket__header"><span className='darkblue'>Blauw</span>pakket</h1>
							<p className="pakket__price">
								<span style={{textAlign:"left", transform:"translateX(-20%)"}}>vanaf</span>99 &euro; <span>per maand</span>
							</p>
							<ul className='pakket__info'>
								<li>Bedoeld voor bedrijven</li>
								<li><span className="red">Rood</span> pakket plus:</li>
								<li>Eigen Email Address</li>
								<li>Particuliere klantenaccounts (inloggen) en online klantenservice</li>
							</ul>
							<a href='/pakkets'className="pakket__button">
								Meer weten
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		)
}

export default Info