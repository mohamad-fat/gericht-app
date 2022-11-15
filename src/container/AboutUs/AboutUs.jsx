import React, { Component } from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => {
    return ( 
        <div className='app__aboutus app__bg section__padding flex__center' id='about'>
            <div className='app__aboutus-overlay flex__center'>
                <img src={images.G} alt='g_letter'/>
            </div>
            <div className='app__aboutus-content flex__center'>
                <div className='app__aboutus-content_about'>
                    <h1 className='headtext__cormorant'>About Us</h1>
                    <img src={images.spoon} className='spoon__img' alt='about_spoon'/>
                    <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.</p>
                    <button type='button' className='custom__button'>Know More</button>
                </div>

                <div className='app__aboutus-content_knife flex__center'>
                    <img src={images.knife} alt='about_knife'/>
                </div>

                <div className='app__aboutus-content_history'>
                    <h1 className='headtext__cormorant'>Our History</h1>
                    <img src={images.spoon} className='spoon__img' alt='about_spoon'/>
                    <p className='p__opensans'>Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu Volutpat. Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed Odio Nec Aliquet.</p>
                    <button type='button' className='custom__button'>Know More</button>
                </div>
            </div>
        </div>

     );
}
 
export default AboutUs;