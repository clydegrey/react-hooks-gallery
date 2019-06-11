import React, { useState, useEffect, useRef } from 'react';
import unsplash from '../api/unsplash';
import ImageList from './ImageList/ImageList';
import SearchBar from './SearchBar';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import styles from './App.module.css';
import UIContainer from './UIContainer/UIContainer';

const App = () => {
  let searchBarRef = useRef(null);
  let imageListRef = useRef(null);
  let innerRef = useRef(null);

  const [appState, appSetState] = useState({ images: [] });

  const onFormSubmit = async term => {
    const res = await unsplash.get('/search/photos', {
      params: { query: term }
    });

    if (res.status === 200) {
      appSetState({ images: res.data.results });
    }
  };

  return (
    <div>
      <Header />
      <UIContainer
        aside={<SearchBar onFormSubmit={onFormSubmit} />}
        section={<ImageList images={appState.images} />}
      />
      <Footer />
    </div>
  );
};

export default App;
