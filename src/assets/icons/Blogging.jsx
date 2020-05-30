/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Blogging(props) {
  return (
    <svg width={20} height={10.763} viewBox='0 0 20 10.763' {...props}>
      <defs>
        <clipPath id='prefix__a'>
          <path fill='none' d='M0 0h20v10.763H0z' />
        </clipPath>
      </defs>
      <g data-name='blogging' clipPath='url(#prefix__a)'>
        <g data-name='Grupo 80' opacity={0.8}>
          <g data-name='Grupo 79' fill='#fff'>
            <path
              data-name='Trazado 61'
              d='M2.093 10.523a.782.782 0 001.127 0l1.875-1.95a.779.779 0 00.218-.54V.78A.781.781 0 004.531 0H.781A.781.781 0 000 .78v7.253a.779.779 0 00.218.54zM1.562 1.56H3.75v6.159L2.656 8.857 1.562 7.719z'
            />
            <path
              data-name='Trazado 62'
              d='M8.047 1.56h11.172a.78.78 0 100-1.56H8.047a.78.78 0 100 1.56z'
            />
            <path
              data-name='Trazado 65'
              d='M19.219 4.601H8.047a.78.78 0 100 1.56h11.172a.78.78 0 100-1.56z'
            />
            <path
              data-name='Trazado 66'
              d='M19.219 9.203H8.047a.78.78 0 100 1.56h11.172a.78.78 0 100-1.56z'
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Blogging;
