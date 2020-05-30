/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Shield(props) {
  return (
    <svg width={12.226} height={14} viewBox='0 0 12.226 14' {...props}>
      <defs>
        <clipPath id='prefix__a'>
          <path fill='none' d='M0 0h12.226v14H0z' />
        </clipPath>
      </defs>
      <g data-name='shield' clipPath='url(#prefix__a)'>
        <g data-name='Grupo 18' opacity={0.8}>
          <path
            data-name='Trazado 11'
            d='M11.902 2.53L6.307.047a.546.546 0 00-.445 0L.323 2.531a.546.546 0 00-.323.5v4.31a7.029 7.029 0 001.767 4.57 6.383 6.383 0 001.935 1.508A5.353 5.353 0 006.113 14a5.533 5.533 0 003.269-1.087.546.546 0 10-.642-.883 4.449 4.449 0 01-2.626.878c-2.628 0-5.021-2.654-5.021-5.567V3.383l5-2.239 5.048 2.241v3.956a5.779 5.779 0 01-.835 2.941.546.546 0 10.938.558 6.87 6.87 0 00.988-3.5V3.029a.546.546 0 00-.33-.499z'
            fill='#fff'
          />
        </g>
      </g>
    </svg>
  );
}

export default Shield;
