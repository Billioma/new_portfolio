import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillGoogleCircle} from 'react-icons/ai';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
          <a href='https://github.com/Billioma'>
            <AiFillGithub  />
            </a>
        </div>
        <div>
          <a href='https://linkedin.com/mwlite/in/bilal-omari-978911124'>
            <AiFillLinkedin />
            </a>
        </div>
        <div>
          <a href='mailto:ibeomari@gmail.com'>
            <AiFillGoogleCircle /> 
            </a>
        </div>
    </div>
  )
}

export default SocialMedia