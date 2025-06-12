import React from 'react';
import UrlItem from '../component/ListItem';

const UrlList = ({ urls, handleClick }) => {
  return (
    <>
      <h2 style={{ textAlign:"center"}}>Click to Explore – The Most Clicked Links Come First!</h2>
      <ul>
      {urls.map((url) => (
        <UrlItem key={url.id} url={url} handleClick={handleClick} />
      ))}
      </ul>
    </>
  );
};

export default UrlList;
