/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function CreditCard(props) {
  return (
    <svg width={18} height={12} viewBox='0 0 18 12' {...props}>
      <defs>
        <clipPath id='prefix__a'>
          <path fill='none' d='M0 0h18v12H0z' />
        </clipPath>
      </defs>
      <g data-name='credit-card' opacity={0.8} clipPath='url(#prefix__a)'>
        <g data-name='Grupo 9'>
          <g data-name='Grupo 8'>
            <path
              data-name='Trazado 6'
              d='M16.125 0H1.875A1.878 1.878 0 000 1.875v8.25A1.878 1.878 0 001.875 12h14.25A1.878 1.878 0 0018 10.125v-8.25A1.878 1.878 0 0016.125 0zm1.125 10.125a1.126 1.126 0 01-1.125 1.125H1.875A1.126 1.126 0 01.75 10.125v-8.25A1.126 1.126 0 011.875.75h14.25a1.126 1.126 0 011.125 1.125v8.25z'
              fill='#fff'
            />
          </g>
        </g>
        <g data-name='Grupo 11'>
          <g data-name='Grupo 10'>
            <path
              data-name='Trazado 7'
              d='M17.625 2.25H.375A.375.375 0 000 2.625v2.25a.375.375 0 00.375.375h17.25A.375.375 0 0018 4.875v-2.25a.375.375 0 00-.375-.375zM17.25 4.5H.75V3h16.5v1.5z'
              fill='#fff'
            />
          </g>
        </g>
        <g data-name='Grupo 13'>
          <g data-name='Grupo 12'>
            <path
              data-name='Trazado 8'
              d='M7.125 7.5h-4.5a.375.375 0 100 .75h4.5a.375.375 0 100-.75z'
              fill='#fff'
            />
          </g>
        </g>
        <g data-name='Grupo 15'>
          <g data-name='Grupo 14'>
            <path
              data-name='Trazado 9'
              d='M7.125 9h-4.5a.375.375 0 100 .75h4.5a.375.375 0 100-.75z'
              fill='#fff'
            />
          </g>
        </g>
        <g data-name='Grupo 17'>
          <g data-name='Grupo 16'>
            <path
              data-name='Trazado 10'
              d='M14.625 6.75h-.75a1.126 1.126 0 00-1.125 1.125v.75a1.126 1.126 0 001.125 1.125h.75a1.126 1.126 0 001.125-1.125v-.75a1.126 1.126 0 00-1.125-1.125zM15 8.625a.375.375 0 01-.375.375h-.75a.375.375 0 01-.375-.375v-.75a.375.375 0 01.375-.375h.75a.375.375 0 01.375.375z'
              fill='#fff'
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default CreditCard;
