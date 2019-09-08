import React from 'react';

const Navigation = () =>{

	return(
		<div className='navigation'>
			<div className='navigation__button'>
				<input type='checkbox' name='menuButton' id='menuButton' />
				<label className='navigation__button--label' htmlFor='menuButton'></label>
				<div className='navigation__button--strip'></div>
			</div>
			{/*<ul className='navigation__list'>
				<li className='navigation__list--item'>Web development</li>
				<li className='navigation__list--item'>Web design</li>
				<li className='navigation__list--item'>Web development</li>
			</ul>*/}

		</div>
		)

}

export default Navigation;