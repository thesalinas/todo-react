import React from 'react';
import ContentLoader from 'react-content-loader';

export const TodoLoading = (props) => (
  <ContentLoader
    className='ContentLoader'
    speed={2}
    width={476}
    height={124}
    viewBox='0 0 476 124'
    backgroundColor='#ba1212'
    foregroundColor='#1b729d'
    {...props}>
    <circle cx='279' cy='67' r='49' />
  </ContentLoader>
);
