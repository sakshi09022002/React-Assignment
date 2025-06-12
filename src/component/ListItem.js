import React from 'react';
import { Link } from 'react-router-dom';

const UrlItem = ({ url, handleClick }) => {
  return (
    <li style={styles.item}>
      <Link to={`/visit/${url.id}`} onClick={() => handleClick(url.id)}>
        {url.name}
      </Link>
      <span style={styles.counter}>Clicked: {url.clicks}</span>
    </li>
  );
};

const styles = {
  item: {
    display: 'flex',  
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  counter: {
    color: 'green',  
    fontWeight: 'bold',
  },
};

export default UrlItem;
