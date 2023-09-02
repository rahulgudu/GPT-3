import React from 'react'
import "./brand.css";
import { google, slack, atlassian,dropbox,shopify } from './imports';
const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt="Google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlassian} alt="Atlasian" />
      </div>
      <div>
        <img src={dropbox} alt="Dropbox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  )
}

export default Brand
