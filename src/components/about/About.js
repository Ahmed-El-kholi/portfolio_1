import React from 'react';
import ME from '../../Assets/me-about.jpg'
import './about.css'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
    return (
        <section id='about'>
            <h5>Go To Know</h5>
            <h2>About Me</h2>
            <div className='container about_container'>
                <div className='about_me'>
                    <div className='about_me-img'>
                        <img src={ME} alt='About Me' />
                    </div>

                </div>
                <div className='about_content'>
                    <div className='about_cards'>
                        <article className='about_card'>
                            <FaAward className='about_icon'/>
                            <h5>Experience</h5>
                            <small>
                                3+ Years working
                            </small>
                        </article>
                        <article className='about_card'>
                            <FiUsers className='about_icon' />
                            <h5>Clients</h5>
                            <small>
                                200+ Worldwide
                            </small>
                        </article>
                        <article className='about_card'>
                            <VscFolderLibrary className='about_icon' />
                            <h5>Projects</h5>
                            <small>
                                80+ Completed
                            </small>
                        </article>
                    </div>
                    <p>
                        I am a highly motivated and creative web developer with over 10 years of experience in the industry. My passion for designing
                        I am a highly motivated and organized individual with an extensive background in the field of web development, having worked on various projects for clients across
                    </p>
                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>

            </div>
        </section>
    )
}

export default About;