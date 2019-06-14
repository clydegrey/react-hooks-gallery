// import React, { useRef } from 'react';

const getPosition = element => {
  // let searchBarRef = getRef(null);
  // let imageListRef = getRef(null);
  // let innerRef = getRef(null);

  // const [stickyState, stickySetState] = getState('');
  // const [drawerOpenState, setDrawerOpenState] = getState(true);
  const getTop = el => el.current.getBoundingClientRect().top;
  const getBottom = el =>
    el.current.getBoundingClientRect().top + el.current.clientHeight;
  const getHeight = el => el.current.clientHeight;

  return {
    top: getTop(element),
    bottom: getBottom(element),
    height: getHeight(element)
  };
};

export default getPosition;
