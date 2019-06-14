// import React, { useRef } from 'react';

const getPosition = elementOrRef => {
  // let searchBarRef = getRef(null);
  // let imageListRef = getRef(null);
  // let innerRef = getRef(null);

  // const [stickyState, stickySetState] = getState('');
  // const [drawerOpenState, setDrawerOpenState] = getState(true);
  let element;

  element = elementOrRef.tagName ? elementOrRef : elementOrRef.current;

  const getTop = el => el.getBoundingClientRect().top;
  const getBottom = el => el.getBoundingClientRect().top + el.clientHeight;
  const getHeight = el => el.clientHeight;

  return {
    top: getTop(element),
    bottom: getBottom(element),
    height: getHeight(element)
  };
};

export default getPosition;
