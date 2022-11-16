import React from 'react';

import { SubHeader, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './specialMenu.css';

const SpecialMenu = () => (
    <div className='app__specialMenu flex__center section__padding'>
        <div className='app__specialMenu-title'>
            <SubHeader title='Menu That Fits Your Palatte'/>
            <h1 className='headtext__cormorant'>Today's Special</h1>
        </div>
        <div className='app__specialMenu-menu'>
            <div className='app__specialMenu-menu_juice flex__center'>
                <p className='app__specialMenu-menu_heading'>Juice & Soda</p>
                <div className='app__specialMenu-menu_items'>
                    {data.juices.map((juice, index) => (
                        <MenuItem key={juice.title + index} title={juice.title} price={juice.price} tags={juice.tags}/>
                    ))}
                </div>
            </div>

            <div className='app__specialMenu-menu_img'>
                <img src={images.menu} alt='menu_image'/>
            </div>

            <div className='app__specialMenu-menu_cocktails flex__center'>
                <p className='app__specialMenu-menu_heading'>Cocktails</p>
                <div className='app__specialMenu-menu_items'>
                    {data.cocktails.map((cocktail, index) => (
                        <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
                    ))}
                </div>
            </div>
        </div>

        <div className='app__specialMenu-btn'>
            <button type='button' className='custom__button'>View More</button>
        </div>
    </div>
);

export default SpecialMenu;