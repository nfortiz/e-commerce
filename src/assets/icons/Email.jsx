/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Email(props) {
  return (
    <svg width={14} height={10.691} viewBox='0 0 14 10.691' {...props}>
      <defs>
        <clipPath id='prefix__a'>
          <path fill='none' d='M0 0h14v10.691H0z' />
        </clipPath>
      </defs>
      <g data-name='email' clipPath='url(#prefix__a)'>
        <g data-name='Grupo 2' opacity={0.8}>
          <path
            data-name='Trazado 2'
            d='M13.453 6.316A.547.547 0 0014 5.77V2.187A2.19 2.19 0 0011.813 0H2.188A2.19 2.19 0 000 2.187V8.5a2.19 2.19 0 002.188 2.188h9.625A2.19 2.19 0 0014 8.5a.547.547 0 10-1.094 0 1.1 1.1 0 01-1.093 1.1H2.188a1.1 1.1 0 01-1.094-1.1V2.3l4.751 2.954a2.174 2.174 0 002.31 0L12.906 2.3v3.47a.547.547 0 00.547.546zM7.578 4.329a1.087 1.087 0 01-1.155 0L1.55 1.3a1.088 1.088 0 01.637-.205h9.625a1.088 1.088 0 01.637.205z'
            fill='#fff'
          />
        </g>
      </g>
    </svg>
  );
}

export default Email;
