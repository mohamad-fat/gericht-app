import React from "react";

import { SubHeader } from "../../components";
import { images, data } from '../../constants';
import './Laurels.css';

const AwardItem = ({award: {imgUrl, title, subtitle}}) => (
    <div className="app__laurels_award">
        <img src={imgUrl} alt='award'/>
        <div className="app__laurels_award-card">
            <p className="p__cormorant" style={{color: '#DCCA87'}}>{title}</p>
            <p className="p__opensans">{subtitle}</p>
        </div>
    </div>
);

const Laurels = () => {
    return (
        <div className='app__bg section__padding app__wrapper'>
            <div className='app__wrapper_info'>
                <SubHeader title='Awards & Recognition'/>
                <h1 className='headtext__cormorant'>Our Laurels</h1>

                <div className="app__laurels">
                    {data.awards.map((award) => <AwardItem key={award.title} award={award}/>)}
                </div>
            </div>

            <div className="app__wrapper_img">
                <img src={images.laurels} alt='laurels image'/>
            </div>

        </div>
    );
};

export default Laurels;

