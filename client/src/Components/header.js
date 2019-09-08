import React from 'react';
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'
import {ReactComponent as Svg} from '../img/drawsvg.svg';

const Header = () =>{
	return(
		<div className='header'>

			<div className='header__title'>
				<h1 className='header__title--name'><span>I</span>mperum</h1>
				<p className='header__title--slogan'>IT Professionals</p>
			</div>

			<div className='header__quote'>
				<p className='header__quote--line'>
					<span className='header__quote--line-left'><FaQuoteLeft/></span>
					We don't just build websites, 
				</p>
				<p className='header__quote--line'>
					we build websites that sell.
					<span className='header__quote--line-right'><FaQuoteRight/></span>
				</p>
			</div>

		</div>
		)
}

export default Header