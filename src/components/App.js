import React, { useState } from 'react';
import unsplash from '../api/unsplash';
import ImageList from './ImageList/ImageList';
import SearchBar from './SearchBar';

const App = () => {
  const [appState, appSetState] = useState({ images: [] });

  const onFormSubmit = async term => {
    const res = await unsplash.get('/search/photos', {
      params: { query: term }
    });

    if (res.status === 200) {
      appSetState({ images: res.data.results });
    }
  };

  // const getImagesMarkup() {
  //   return this.state.images.map(el => {
  //     return <img src={el.urls.small} alt={el.alt_description} />;
  //   });
  // }

  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar onFormSubmit={onFormSubmit} />
      <ImageList images={appState.images} />
    </div>
  );
};

export default App;
