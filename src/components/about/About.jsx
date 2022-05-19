import React from 'react'
import './about.css'
import ME from '../../assets/me-about1.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
	return (
		<section id='about' className='about1'>
			<h5>Get To know</h5>
			<h2>About Me</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="About Image" />
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon"/>
							<h5>Experience</h5>
							<small>6+ Years Working</small>
						</article>
						<article className="about__card">
							<FiUsers className="about__icon"/>
							<h5>Clients</h5>
							<small>100+ Worldwide</small>
						</article>
						<article className="about__card">
							<VscFolderLibrary className="about__icon"/>
							<h5>Projects</h5>
							<small>70+ Completed</small>
						</article>
					</div>

					<p>
						I fell in love with programming at a young age and along those years, I have gained alot of tech-knowledge, I think… 🤷‍♂️
	
					</p>
					<p>
						I am currently helping businesses to transform into the fast-growing digital economy as a full stack developer having 6+ years of commercial experience in Software Development. 
					</p>
					<p>
						I have consulted for many clients while doing the job, guiding Web-based Applications, database engineering, API Development, and design and user experience & Application Deployment.
					</p>

					<a href="#contact" className='btn btn-primary'>Talk Business</a>

				</div>
			</div>
		</section>
	)
}

export default About