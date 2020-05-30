/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function User(props) {
  return (
    <svg width={14} height={14} viewBox='0 0 14 14' {...props}>
      <defs>
        <clipPath id='prefix__a'>
          <path fill='none' d='M0 0h14v14H0z' />
        </clipPath>
      </defs>
      <g data-name='user' clipPath='url(#prefix__a)'>
        <g data-name='Grupo 7' opacity={0.8}>
          <path
            data-name='Trazado 5'
            d='M13.965 12a.547.547 0 00-1.071.223.571.571 0 01-.116.479.556.556 0 01-.437.208H1.66a.556.556 0 01-.437-.208.571.571 0 01-.116-.479 6.042 6.042 0 015.748-4.788h.291A6.016 6.016 0 0112 10.105a.547.547 0 10.908-.609A7.113 7.113 0 009.227 6.7a3.719 3.719 0 10-4.451 0A7.113 7.113 0 00.036 12a1.661 1.661 0 001.624 2h10.681a1.661 1.661 0 001.624-2zm-9.59-8.281A2.625 2.625 0 117.133 6.34h-.265a2.628 2.628 0 01-2.493-2.621z'
            fill='#fff'
          />
        </g>
      </g>
    </svg>
  );
}

export default User;
