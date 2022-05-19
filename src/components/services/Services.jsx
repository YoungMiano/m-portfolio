import React from 'react'
import './services.css'
import {BsCheck2Circle} from 'react-icons/bs'

const Services = () => {
	return (
		<section id='services'>
			<h5>What I Offer</h5>
			<h2>Services</h2>

			<div className="container services__container">
				<article className="service">
					<div className="service__head">
						<h3>UI/UX Design</h3>
					</div>

					<ul className="service__list">
						<li>
							<BsCheck2Circle className="service__list-icon"/>
							<p>Professional Logo Designs and Branding.</p>
						</li>
						<li>
							<BsCheck2Circle className="service__list-icon"/>
							<p>Interactive Mockups, Core Pages Wireframes & Design.</p>
						</li>
						<li>
							<BsCheck2Circle className="service__list-icon"/>
							<p>Road Map Planning, Illustrations & Char' Design.</p>
						</li>
						<li>
							<BsCheck2Circle className="service__list-icon"/>
							<p>Animated UI and Interfaces Demo.</p>
						</li>
						<li>
							<BsCheck2Circle className="service__list-icon"/>
							<p>Website Design and Walk Throughs.</p>
						</li>
					</ul>
				</article>
				<article className="service">
					<div className="service__head">
						<h3>Web Development</h3>
					</div>

					<ul className="service__list">
						<li>
							<BsCheck2Circle className="service__list-icon"/>
							<p>Developing Front-end Website Architecture.</p>
						</li>
						<li>
							<BsCheck2Circle className="service__list-icon"/>
							<p>Designing and Developing APIs.</p>
						</li>
						<li>
							<BsCheck2Circle className="service__list-icon"/>
							<p>Testing and Debugging Software to Keep it Optimized.</p>
						</li>
						<li>
							<BsCheck2Circle className="service__list-icon"/>
							<p>Developing Back-end Website Applications.</p>
						</li>
						<li>
							<BsCheck2Circle className="service__list-icon"/>
							<p>Creating Servers and Databases for Functionality.</p>
						</li>
						<li>
							<BsCheck2Circle className="service__list-icon"/>
							<p>System Management Software Development.</p>
						</li>
					</ul>
				</article>
				<article className="service">
					<div className="service__head">
						<h3>Business Analytics</h3>
					</div>

					<ul className="service__list">
						<li>
							<BsCheck2Circle className="service__list-icon"/>
							<p>Dashboarding and Visualization.</p>
						</li>
						<li>
							<BsCheck2Circle className="service__list-icon"/>
							<p>In Memory Data Grids / Data Lake Architecture.</p>
						</li>
						<li>
							<BsCheck2Circle className="service__list-icon"/>
							<p>Business Intelligence and Data Integration.</p>
						</li>
						<li>
							<BsCheck2Circle className="service__list-icon"/>
							<p>Streaming Analytics and Business Reporting.</p>
						</li>
						<li>
							<BsCheck2Circle className="service__list-icon"/>
							<p>Marketing and Brand Analytics.</p>
						</li>
					</ul>
				</article>
			</div>
		</section>
	)
}

export default Services