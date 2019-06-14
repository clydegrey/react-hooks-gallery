import React, { useState, useEffect, useRef } from 'react';
import styles from './UIContainer.module.css';
import { default as More } from '../Icons/more';
import { default as IconLeft } from '../Icons/IconLeft';
import getPosition from '../../helpers/getPosition';
import getStickyPosition from '../../helpers/getStickyPosition';
import getStickyStyle from '../../helpers/getStickyStyle';

const UIContainer = props => {
  const { aside, section, accordion, accordion2, offset } = props;
  let searchBarRef = useRef(null);
  let imageListRef = useRef(null);
  let innerRef = useRef(null);
  const [stickyState, stickySetState] = useState('');
  const [stickyState2, stickySetState2] = useState('');
  const [drawerOpenState, setDrawerOpenState] = useState(true);
  const [offsetState, setOffsetState] = useState(0);

  const checkOffset = () => {
    if (offset) {
      console.log('we are here');
      const offsetEl = document.querySelector(`#${offset}`);
      if (offsetEl) {
        setOffsetState(getPosition(offsetEl).height);
      }
      // const hhhh = getPosition(offsetEl).height;
      // console.log(hhhh);

      // offsetEl && setOffsetState(getPosition(offsetEl).height);
      // setOffsetState(getPosition(offsetEl).height);
    }
  };

  const offSetEl = document.querySelector(`#${offset}`);

  const stickyComponent = () => {
    const searchBar = getPosition(searchBarRef);
    const imageList = getPosition(imageListRef);
    const section = getPosition(imageListRef);
    const inner = getPosition(innerRef);
    const offsetHeight = offSetEl ? getPosition(offSetEl).height : 0;
    //const offsetHeight = offsetState;
    const stickyValue = getStickyPosition(
      section,
      inner,
      searchBar,
      offsetHeight
    );
    stickySetState(stickyValue);
  };

  useEffect(() => {
    checkOffset();
    // stickyComponent();
  });

  useEffect(() => {
    window.addEventListener('scroll', stickyComponent);
    console.log('Created');
    return () => {
      console.log('Cleaned up');
      window.removeEventListener('scroll', stickyComponent);
    };
  }, []);

  const stickyStyle = getStickyStyle(
    stickyState,
    offSetEl ? getPosition(offSetEl).height : 0
  );
  const drawerToggle = () => {
    setDrawerOpenState(!drawerOpenState);
  };

  return (
    <div className={styles.UIContainer}>
      <aside className={drawerOpenState ? styles.open : styles.closed}>
        <div className={styles.inner} ref={searchBarRef}>
          <div className={styles.drawer} ref={innerRef} style={stickyStyle}>
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
