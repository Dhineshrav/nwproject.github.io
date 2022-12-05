import React from 'react';

import {images} from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding '>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.chef} alt="chef"/>
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote"/>
          <p className='p__opensans'>
          High quality and taste are of prime importance,
           </p>
        </div>
        <p className='p__opensans'>
              because of this our brand of Biriyani and other food products have attained widespread popularity all across South India.
        </p>
      </div>

      <div className='app__chef-sign'>
          <p >Nagasamy Naidu</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt="sign"></img>
      </div>


    </div>
  </div>
);

export default Chef;
