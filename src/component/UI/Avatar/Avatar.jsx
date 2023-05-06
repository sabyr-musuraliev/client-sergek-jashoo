import React from 'react';
import './Avatar.css';

const Avatar = ({ name, lastname, imageUrl, width, height, fontSize, isLoaded }) => {
  return (
    
      <div className={(isLoaded) ? 'container-avatar' : 'container-avatar containerLoaded'} style={{width: width, height: height, fontSize: fontSize}}>
        {imageUrl && !(isLoaded) && (
          <img className='avatarImage' alt='avatar' src={imageUrl} style={{width: width, height: height, fontSize: fontSize}}/>
        )}
        {imageUrl === undefined && name !== '' && !(isLoaded) &&(
          <div className='avatatext' style={{width: width, height: height, fontSize: fontSize}}>{name.substring(0, 1)}{lastname.substring(0,1)}</div>
        )}
      </div>
  );
};

export default Avatar;