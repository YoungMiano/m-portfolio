import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {RiGitlabFill} from 'react-icons/ri'

const HeaderSocials = () => {
	return(
		<div className="header__socials">
			<a href="https://linkedin.com/in/reuben-njogu-8b02a920b/" target="_blank"><BsLinkedin/></a>
			<a href="https://github.com/YoungMiano" target="_blank"><FaGithub/></a>
			<a href="https://gitlab.com/YoungMiano" target="_blank"><RiGitlabFill/></a>
		</div>
	)
}

export default HeaderSocials