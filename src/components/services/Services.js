import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className='container services_container'>
                <article className='service'>
                    <div className='service_head'>
                        <h3>UI & UX Design</h3>
                    </div>
                    <ul className='services-list'>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>User interface design for web and mobile applications.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>User interface design for web and mobile applications.</p>                        </li>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>User interface design for web and mobile applications.</p>                        </li>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>User interface design for web and mobile applications.</p>                        </li>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>User interface design for web and mobile applications.</p>                        </li>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>User interface design for web and mobile applications.</p>                        </li>
                    </ul>
                </article>
                { /*End Of UI & Ux*/}
                <article className='service'>
                    <div className='service_head'>
                        <h3>Web Development</h3>
                    </div>
                    <ul className='services-list'>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>User interface design for web and mobile applications.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>User interface design for web and mobile applications.</p>                        </li>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>User interface design for web and mobile applications.</p>                        </li>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>User interface design for web and mobile applications.</p>                        </li>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>User interface design for web and mobile applications.</p>                        </li>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>User interface design for web and mobile applications.</p>                        </li>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>User interface design for web and mobile applications.</p>                        </li>
                    </ul>
                </article>
                { /*End Of Web Development*/}
                <article className='service'>
                    <div className='service_head'>
                        <h3>Content Creation</h3>
                    </div>
                    <ul className='services-list'>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>User interface design for web and mobile applications.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>User interface design for web and mobile applications.</p>                        </li>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>User interface design for web and mobile applications.</p>                        </li>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>User interface design for web and mobile applications.</p>                        </li>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>User interface design for web and mobile applications.</p>                        </li>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>User interface design for web and mobile applications.</p>                        </li>
                    </ul>
                </article>
                { /*End Of Content Creation*/}
            </div>
        </section>
    )
}

export default Services