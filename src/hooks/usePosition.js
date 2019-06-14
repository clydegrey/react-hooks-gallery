import React, { useRef } from 'react';

const usePosition = element => {
  // let searchBarRef = useRef(null);
  // let imageListRef = useRef(null);
  // let innerRef = useRef(null);

  // const [stickyState, stickySetState] = useState('');
  // const [drawerOpenState, setDrawerOpenState] = useState(true);
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

export default usePosition;
