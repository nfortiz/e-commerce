/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Pin(props) {
  return (
    <svg width={11.211} height={14} viewBox='0 0 11.211 14' {...props}>
      <defs>
        <clipPath id='prefix__a'>
          <path fill='none' d='M0 0h11.211v14H0z' />
        </clipPath>
      </defs>
      <g data-name='pin' opacity={0.8} clipPath='url(#prefix__a)'>
        <g data-name='Grupo 4'>
          <g data-name='Grupo 3'>
            <path
              data-name='Trazado 3'
              d='M5.605 2.188a3.418 3.418 0 10.937 6.706.547.547 0 10-.3-1.052 2.321 2.321 0 111.589-1.567.547.547 0 101.048.314 3.42 3.42 0 00-3.274-4.4z'
              fill='#fff'
            />
          </g>
        </g>
        <g data-name='Grupo 6'>
          <g data-name='Grupo 5'>
            <path
              data-name='Trazado 4'
              d='M9.567 1.64A5.605 5.605 0 00-.003 5.6a5.857 5.857 0 00.925 3.126A16.648 16.648 0 002.9 11.18a18.667 18.667 0 012.076 2.565.547.547 0 00.462.255h.328a.547.547 0 00.462-.255 18.667 18.667 0 012.076-2.565 16.645 16.645 0 001.978-2.454 5.858 5.858 0 00.929-3.126 5.569 5.569 0 00-1.644-3.96zM7.5 10.44a22.54 22.54 0 00-1.895 2.271A22.536 22.536 0 003.71 10.44C2.308 8.906 1.097 7.579 1.097 5.6a4.512 4.512 0 019.023 0c-.005 1.979-1.217 3.306-2.623 4.843z'
              fill='#fff'
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Pin;
