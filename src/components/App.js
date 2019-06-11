import React, { useState, useEffect, useRef } from 'react';
import unsplash from '../api/unsplash';
import ImageList from './ImageList/ImageList';
import SearchBar from './SearchBar';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import styles from './App.module.css';
// import UIContainer from './UIContainer/UIContainer';

const App = () => {
  let searchBarRef = useRef(null);
  let imageListRef = useRef(null);
  let innerRef = useRef(null);

  const [appState, appSetState] = useState({ images: [] });
  const [stickyState, stickySetState] = useState('');
  const getTop = el => el.current.getBoundingClientRect().top;
  const getBottom = el => {
    console.log(el);
    console.log(el.current.getBoundingClientRect().top);
    console.log(el.current.clientHeight);

    return el.current.getBoundingClientRect().top + el.current.clientHeight;
  };

  const getHeight = el => el.current.clientHeight;
  const onFormSubmit = async term => {
    const res = await unsplash.get('/search/photos', {
      params: { query: term }
    });

    if (res.status === 200) {
      appSetState({ images: res.data.results });
    }
  };

  const stickyComponent = () => {
    let fixedTop, fixedBottom;
    const searchBarTop = getTop(searchBarRef);
    const searchBarBottom = getBottom(searchBarRef);
    const imageListTop = getTop(imageListRef);
    const imageListBottom = getBottom(imageListRef);
    const innerHeight = getHeight(innerRef);
    console.log(searchBarTop);
    console.log(searchBarBottom);
    console.log(imageListBottom);
    console.log(innerHeight);
    console.log(searchBarTop <= 0);
    console.log(searchBarBottom >= 0);
    console.log(searchBarBottom > innerHeight);
    if (
      searchBarTop <= 0 &&
      searchBarBottom >= 0 &&
      searchBarBottom > innerHeight
    ) {
      stickySetState('top');
      console.log('top');
    } else if (searchBarTop <= 0 && searchBarBottom <= innerHeight) {
      stickySetState('bottom');
      console.log('bottom');
    } else {
      stickySetState('');
      console.log('neither');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', stickyComponent);
    console.log('Created');
    return () => {
      console.log('Cleaned up');
      window.removeEventListener('scroll', stickyComponent);
    };
  }, []);

  const getStickyStyle = () => {
    console.log(stickyState);
    let stickyStyle = { position: 'static' };
    if (stickyState === 'top') {
      stickyStyle = { position: 'fixed', top: '0' };
    } else if (stickyState === 'bottom') {
      stickyStyle = { position: 'absolute', bottom: '0' };
    }
    return stickyStyle;
  };

  // const getImagesMarkup() {
  //   return this.state.images.map(el => {
  //     return <img src={el.urls.small} alt={el.alt_description} />;
  //   });
  // }

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <aside>
          <div className={styles.inner} ref={searchBarRef}>
            <div ref={innerRef} style={getStickyStyle()}>
              <SearchBar onFormSubmit={onFormSubmit} />
            </div>
          </div>
        </aside>
        <section>
          <div ref={imageListRef}>
            <ImageList images={appState.images} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
