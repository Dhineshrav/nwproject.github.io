import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import {images} from '../../constants';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding id="home'>
    <div className='app__wrapper_info'>
      <SubHeading title=" Chase the New Flavor"/>
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{margin:"2rem 0"}}>
        The Hotel roots can be traced all the way back to 1957. Founded by Mr. Nagasamy Naidu under the name Anandha Vilas Biriyani Hotel in Dindigul. He always wore a turban called THALAPA(a traditional head dress), which over the years became synonymous with his brand and cooking styles…
        </p>
        <button type="button" className='custom__button'>Explore menu</button>
    </div>
    <div className='app__wrapper_img'>
    <img src={images.welcome} alt="header img"/>
    </div>
  </div>
);

export default Header;
