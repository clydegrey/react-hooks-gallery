import React, { useState, useEffect, useRef } from 'react';
import styles from './UIContainer.module.css';
import { default as More } from '../Icons/more';
import { default as IconLeft } from '../Icons/IconLeft';
import getPosition from '../../helpers/getPosition';

const UIContainer = props => {
  const { aside, section, accordion, accordion2 } = props;
  let searchBarRef = useRef(null);
  let imageListRef = useRef(null);
  let innerRef = useRef(null);

  const [stickyState, stickySetState] = useState('');
  const [drawerOpenState, setDrawerOpenState] = useState(true);
  // const getTop = el => el.current.getBoundingClientRect().top;
  // const getBottom = el =>
  //   el.current.getBoundingClientRect().top + el.current.clientHeight;

  // const getHeight = el => el.current.clientHeight;
  const stickyComponent = () => {
    let fixedTop, fixedBottom;
    // const searchBarTop = getTop(searchBarRef);
    // const searchBarBottom = getBottom(searchBarRef);
    // const imageListTop = getTop(imageListRef);
    // const imageListBottom = getBottom(imageListRef);
    // const innerHeight = getHeight(innerRef);
    // const sectionHeight = getHeight(imageListRef);

    const searchBar = getPosition(searchBarRef);
    const imageList = getPosition(imageListRef);
    const section = getPosition(imageListRef);
    const inner = getPosition(innerRef);
    console.log(inner.height);

    if (section.height <= inner.height) {
      stickySetState('');
    } else if (
      searchBar.top <= 0 &&
      searchBar.bottom >= 0 &&
      searchBar.bottom > inner.height
    ) {
      stickySetState('top');
    } else if (searchBar.top <= 0 && searchBar.bottom <= inner.height) {
      stickySetState('bottom');
    } else {
      stickySetState('');
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
    let stickyStyle = { position: 'relative' };
    if (stickyState === 'top') {
      stickyStyle = { position: 'fixed', top: '0' };
    } else if (stickyState === 'bottom') {
      stickyStyle = { position: 'absolute', bottom: '0' };
    }
    return stickyStyle;
  };

  const drawerToggle = () => {
    setDrawerOpenState(!drawerOpenState);
  };

  // console.log(More);

  return (
    // <div className={styles.UIContainer}>
    //   <aside className={drawerOpenState ? styles.open : styles.closed}>
    //     <div className={styles.inner} ref={searchBarRef}>
    //       <div ref={innerRef} style={getStickyStyle()}>
    //         <div className={styles.button_container}>
    //           <button onClick={drawerToggle}>open/close</button>
    //         </div>
    //         {aside}
    //       </div>
    //     </div>
    //   </aside>
    //   <section>
    //     <div ref={imageListRef}>{section}</div>
    //   </section>
    // </div>
    <div className={styles.UIContainer}>
      <aside className={drawerOpenState ? styles.open : styles.closed}>
        <div className={styles.inner} ref={searchBarRef}>
          <div
            className={styles.drawer}
            ref={innerRef}
            style={getStickyStyle()}
          >
            <div className={styles.button_container}>
              <button onClick={drawerToggle}>
                {drawerOpenState ? (
                  <IconLeft width={'33'} height={'33'} />
                ) : (
                  <More width={'33'} height={'33'} />
                )}
              </button>
            </div>
            {aside}
            {accordion}
            {accordion2}
          </div>
        </div>
      </aside>
      <section>
        <div ref={imageListRef}>{section}</div>
      </section>
    </div>
  );
};

export default UIContainer;
