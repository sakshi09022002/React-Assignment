import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import UrlList from './component/ListOfLink';
import UrlPage from './component/UrlPage.jsx';
import initialUrls from './component/Urls';

function App() {
  const [urls, setUrls] = useState(initialUrls);

  const handleClick = (id) => {
    const updatedUrls = urls.map((url) =>
      url.id === id ? { ...url, clicks: url.clicks + 1 } : url
    );
    updatedUrls.sort((a, b) => b.clicks - a.clicks);
    setUrls(updatedUrls);
  };

  return (
    <div className="mainDiv">
      <header><h1 style={{textAlign:"center"}}>Track Your Clicks</h1></header> 
       
      <Routes>
        <Route path="/" element={<UrlList urls={urls} handleClick={handleClick} />} />
        <Route path="/visit/:id" element={<UrlPage />} />
      </Routes>
      
      <footer></footer>
    </div>
  );
}

export default App;
