import React from 'react';
import {google, slack, altassian, shopify, dropbox} from './import';
import './brand.css';

const Brand = () => {
  return (
    <div className='gpt3_brand section_padding'>
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={altassian} alt="altassian" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  )
}

export default Brand
