import React from 'react';
import {images} from '../../constants';


import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="g"/>

    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us </h1>
        <img src={images.spoon} alt="spoon" className='spoon__img'/>
        <p className='p__opensans '>
        For those with pure food indulgence in mind, come next door and sate your desires with our ever changing internationally and seasonally inspired small plates.  We love food, lots of different food, just like you.
        </p>
        <button type="button " className='custom__button'>Know More</button>
      </div>


      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about_knife"/>

      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History </h1>
        <img src={images.spoon} alt="spoon" className='spoon__img'/>
        <p className='p__opensans '>
        Right from the beginning, he always emphasized on taste and ensured that the Biriyani made at his hotel was both delicious and unique. This was achieved and still is by meticulous selection of ingredients prepared from quality masala products. Biriyani was prepared using superior quality Seeraga samba rice, known as Parakkum sittu.
        </p>
        <button type="button " className='custom__button'>Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
