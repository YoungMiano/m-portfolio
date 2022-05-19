import React from 'react'
import './footer.css'
import {VscGithub} from 'react-icons/vsc'
import {SiFacebook} from 'react-icons/si'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
	return (
		<footer>
			<a href="#" className='footer__logo'>MianoDev</a>

			<ul className='permalinks'>
				<li><a href="#">Home</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#experience">Experience</a></li>
				<li><a href="#services">Services</a></li>
				<li><a href="#portfolio">Portfolio</a></li>
				<li><a href="#testimonials">Testimonials</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>

			<div className="footer__socials">
				<a href="https://github.com/YoungMiano"><VscGithub /></a>
				<a href="https://facebook.com/reuben.keegan.1/"><SiFacebook /></a>
				<a href="https://twitter.com/RMianoh"><FiTwitter /></a>
			</div>

			<div className="footer__copyright">
				<small>2022 &copy; Miano The Dev | All rights reserved</small>
			</div>
		</footer>
	)
}

export default Footer