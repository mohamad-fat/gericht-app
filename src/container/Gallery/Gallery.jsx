import React, { useRef } from 'react';

import { SubHeader } from '../../components';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { images } from '../../constants';
import './Gallery.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if(direction === 'left') {
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;
        }
    }

    return (
        <div className='app__gallery'>
            <div className='app__gallery-content'>
                <SubHeader title='Instagram'/>
                <h1 className='headtext__cormorant'>Photo Gallery</h1>
                <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                <button type='button' className='custom__button'>View More</button>
            </div>

            <div className='app__gallery-images'>
                <div className='app__gallery-images_container' ref={scrollRef}>
                    {galleryImages.map((image, index) => (
                        <div className='app__gallery-images_card flex__center' key={`Gallery__images-${index+1}`}>
                            <img src={image} alt='insta image'/>
                            <BsInstagram className='app__gallery_icon'/>
                        </div>
                    ))}
                </div>

                <div className='app__gallery-images_arrow'>
                    <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')}/>
                    <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')}/>
                </div>
            </div>
        </div>
    );
}

export default Gallery;