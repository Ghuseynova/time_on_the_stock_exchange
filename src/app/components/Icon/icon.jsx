import React from 'react';
import sprite from '../../../assets/images/sprite.svg';

const Icon = ({ className, iconId }) => {
  return (
    <svg className={className}>
      <use href={`${sprite.url.split('#')[0]}#sprite_${iconId}`} />
    </svg>
  );
};

export default Icon;
