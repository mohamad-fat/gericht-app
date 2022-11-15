import React from 'react';

import { SubHeader } from '../../components'
import { images } from '../../constants';
import './Header.css';

const Header = () => {
    return ( 
        <div className='app__header app__wrapper section__padding' id='home'>
            <div className='app__wrapper_info'>
                <SubHeader title="Chase The New Flavour"/>
                <h1 className='headtext__cormorant-header'>The Key To Fine Dining</h1>
                <p style={{margin: '2rem 0'}} className='p__opensans'>Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</p>
                <button type='button' className='custom__button'>Explore Menu</button>
            </div>
            <div className='app__wrapper_img'>
                <img src={images.welcome} alt='header-img'/>
            </div>
        </div>
     );
}
 
export default Header;