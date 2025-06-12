import React from 'react';
import { useParams } from 'react-router-dom';
import urls from './Urls';
import css from '../App.css';
const UrlPage = () => {
  const { id } = useParams();
  const selectedUrl = urls.find((url) => url.id === parseInt(id));
  if (!selectedUrl) return <div>URL not found</div>;
  const handleBack = () => {
    window.history.back();
  };
  return (
    <div className="selectedUrl">
      <h2>Redirecting to: {selectedUrl.name}</h2>
      <a href={selectedUrl.url} target="_blank" role="link">Click Here</a>
      <span className="backLink" onClick={handleBack} style={{ cursor: 'pointer' }}> Back to URL List</span>
    </div>
  );
};

export default UrlPage;
