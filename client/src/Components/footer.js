import React from 'react';
import { MdPhone, MdMailOutline } from "react-icons/md";
import { DiGitBranch } from "react-icons/di";
import { FaCookieBite, FaFacebook, FaLinkedinIn,FaInstagram } from "react-icons/fa";

const Footer =() =>{
	return (
		<div className='footer'>
			<div className='footer__contact'>

				<div className='footer__contact--logo'>
					<h1 className='footer__contact--logo-header'><span>I</span>mperum</h1>
					<p className='footer__contact--logo-slogan'>IT Professionals</p>
				</div>

				<div className='footer__contact--address'>
					<a href='tel:0031682307051' className='footer__contact--address-phone'><MdPhone className='footer__contact--address-phone-i'/>06 82 30 70 51</a>
					<a href='mailto:info@imperum.com' className='footer__contact--address-email'><MdMailOutline className='footer__contact--address-email-i'/>info@imperum.nl</a>
					<p className='footer__contact--address-street'>Michal Antczak</p>
					<p className='footer__contact--address-street'>Oostervenne 397</p>
					<p className='footer__contact--address-city'>1444 XN Purmerend</p>

				</div>

				<div className='footer__contact--sign'>
					<DiGitBranch className='footer__contact--sign-i'/>
				</div>
				
			</div>

			<div className='footer__social'>
				<div className='footer__social--header'>Volg Ons</div>
				<p className='footer__social--facebook'><FaFacebook/></p>
				<p className='footer__social--linkedin'><FaLinkedinIn/></p>
				<p className='footer__social--instagram'><FaInstagram/></p>
			</div>

			<div className='footer__legal'>
				<div className='footer__legal--cookies'><FaCookieBite/></div>
				<a href='/about' className='footer__legal--para'>Over ons</a>
				<a href='privacy' className='footer__legal--para'>Algemeen voorwaarden</a>
				<a href='privacy' className='footer__legal--para'>Cookies verklaring</a>
			</div>

		</div>
		)
}

export default Footer;