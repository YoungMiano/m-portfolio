import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/laravel.jpg'
import IMG2 from '../../assets/amazon.jpg'
import IMG3 from '../../assets/school.jpg'
import IMG4 from '../../assets/smash.jpg'
import IMG5 from '../../assets/hr.jpg'
import IMG6 from '../../assets/powerlite.jpg'

const data = [
{
	id: 1,
	image:IMG1,
	title: 'Fully functional ecommerce store built in laravel and MySQL database',
	github: '#',
	demo: '#'
},
{
	id: 2,
	image:IMG2,
	title: 'Amazone clone built with React, Firebase, Redux, Express.js, nodeJS',
	github: '#',
	demo: '#'
},
{
	id: 3,
	image:IMG3,
	title: 'Complete School Management System developed in Python-Django',
	github: '#',
	demo: '#'
},
{
	id: 4,
	image:IMG4,
	title: 'Smash Media Website developed in HTML5, CSS3 and JavaScript',
	github: '#',
	demo: '#'
},
{
	id: 5,
	image:IMG5,
	title: 'Human Resource System built in PHP, JavaScript, HTML5 and CSS3',
	github: 'https://github.com',
	demo: 'https://github.com'
},
{
	id: 6,
	image:IMG6,
	title: 'Powerlie Website + eccomerce store built in Php, JavaScript, MySQL',
	github: '#',
	demo: '#'
}
]

const Portfolio = () => {
	return (
		<section id='portfolio'>
			<h5>My Recent Projects</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				{
					data.map(({id, image, title, github, demo}) => {
						return (
							<article key={id} className="portfolio__item">
								<div className="portfolio__item-image">
									<img src={image} alt={title} />
								</div>
								<h3>{title}</h3>
								<div className="portfolio__item-cta">
									<a href={github} className="btn" target="_blank">Github</a>
									<a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
								</div>
							</article>
						)
					})
				}
			</div>
		</section>
	)
}

export default Portfolio