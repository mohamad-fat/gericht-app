import React from 'react';
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components'
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
    <div className='app__footer'>
        <FooterOverlay />
        <Newsletter />

        <div className='app__footer-links' style={{zIndex: 1}}>
            <div className='app__footer-links_contact'>
                <h1 className='app__footer-links_heading'>Contact Us</h1>
                <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
                <p className='p__opensans'>+1 212-344-1230</p>
                <p className='p__opensans'>+1 212-555-1230</p>
            </div>

            <div className='app__footer-links_logo'>
                <img src={images.gericht} alt='gericht_image'/>
                <p className='p__opensans'>"The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others."</p>
                <img src={images.spoon} style={{margin: '0.5rem 0'}} className='spoon__imge' alt='spoon_image'/>
                <div className='app__footer-links_logo-icons'>
                    <FiFacebook />
                    <FiTwitter />
                    <FiInstagram />
                </div>
            </div>

            <div className='app__footer-links_work'>
                <h1 className='app__footer-links_heading'>Working Hours</h1>
                <p className='p__opensans'>Monday-Friday:</p>
                <p className='p__opensans'>08:00 Am - 12:00 Am</p>
                <p className='p__opensans'>Saturday-Sunday:</p>
                <p className='p__opensans'>07:00 Am - 11:00 Pm</p>
            </div>
        </div>
        <div className='app__footer-copyright' style={{zIndex: 1}}>
            <p className='p__opensans'>2021 Gericht. All Rights Reserved.</p>
        </div>
    </div>
);

export default Footer;