import React, { useState, useEffect, useRef } from 'react';
import style from './UIContainer.module.css';

const UIContainer = props => {
  const { aside, section } = props;
  let asideRef = useRef(null);
  let sectionRef = useRef(null);
  const [asidePosition, asidePositionSetState] = useState({
    fixedTop: false,
    fixedBottom: false
  });
  const [sectionPosition, sectionSetState] = useState({
    sectionTop: 11,
    sectionBottom: 11
  });

  const getTop = el => el.current.getBoundingClientRect().top;
  const getBottom = el =>
    el.current.getBoundingClientRect().top - el.clientHeight;

  const logChildPositions = () => {
    let fixedTop, fixedBottom;
    const asideTop = getTop(asideRef);
    const asideBottom = getBottom(asideRef);
    const sectionTop = getTop(sectionRef);
    const sectionBottom = getBottom(sectionRef);
    if (asideTop <= sectionTop) {
      asidePositionSetState({ fixedTop: true, fixedBottom: false });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', logChildPositions);
    console.log('Created');
    return () => {
      console.log('Cleaned up');
      window.removeEventListener('scroll', logChildPositions);
    };
  }, []);

  const positionStyle = {
    position:
      asidePosition.fixedTop || asidePosition.fixedBottom ? 'fixed' : 'static',
    top: asidePosition.fixedTop ? '0' : 'unset',
    bottom: asidePosition.fixedTop ? '0' : 'unset'
  };

  return (
    <div className={style.UIContainer}>
      <aside style={positionStyle} ref={asideRef} className={style.dog}>
        {aside}
      </aside>
      <section ref={sectionRef}>{section}</section>
    </div>
  );
};

export default UIContainer;
