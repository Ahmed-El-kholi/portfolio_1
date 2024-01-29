import React from 'react'
import './portfolio.css'
import Img1 from '../../Assets/portfolio1.jpg'
import Img2 from '../../Assets/portfolio2.jpg'
import Img3 from '../../Assets/portfolio3.jpg'
import Img4 from '../../Assets/portfolio4.jpg'
import Img5 from '../../Assets/portfolio5.png'
import Img6 from '../../Assets/portfolio6.jpg'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My recet work</h5>
            <h2>portfolio</h2>
            <div className="container portfolio_container">
                <article className='portfolio_item'>
                    <div className='prtfolio_item_image'>
                        <img src={Img1} />
                    </div>
                    <h3>This is portfolio item title</h3>
                    <div className='portfolio_item_cta'>
                        <a href='www.github.com' className='btn' target='_blank'>Github</a>
                        <a href='www.dribble.com' className='btn btn-primary' target='_blank' >Live Demo</a>
                    </div>

                </article>
                <article className='portfolio_item'>
                    <div className='prtfolio_item_image'>
                        <img src={Img2} />
                    </div>
                    <h3>This is portfolio item title</h3>
                    <div className='portfolio_item_cta'>
                        <a href='www.github.com' className='btn' target='_blank'>Github</a>
                        <a href='www.dribble.com' className='btn btn-primary' target='_blank' >Live Demo</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <div className='prtfolio_item_image'>
                        <img src={Img3} />
                    </div>
                    <h3>This is portfolio item title</h3>
                    <div className='portfolio_item_cta'>
                        <a href='www.github.com' className='btn' target='_blank'>Github</a>
                        <a href='www.dribble.com' className='btn btn-primary' target='_blank' >Live Demo</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <div className='prtfolio_item_image'>
                        <img src={Img4} />
                    </div>
                    <h3>This is portfolio item title</h3>
                    <div className='portfolio_item_cta'>
                        <a href='www.github.com' className='btn' target='_blank'>Github</a>
                        <a href='www.dribble.com' className='btn btn-primary' target='_blank' >Live Demo</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <div className='prtfolio_item_image'>
                        <img src={Img5} />
                    </div>
                    <h3>This is portfolio item title</h3>
                    <div className='portfolio_item_cta'>
                        <a href='www.github.com' className='btn' target='_blank'>Github</a>
                        <a href='www.dribble.com' className='btn btn-primary' target='_blank' >Live Demo</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <div className='prtfolio_item_image'>
                        <img src={Img6} />
                    </div>
                    <h3>This is portfolio item title</h3>
                    <div className='portfolio_item_cta'>
                        <a href='www.github.com' className='btn' target='_blank'>Github</a>
                        <a href='www.dribble.com' className='btn btn-primary' target='_blank' >Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio