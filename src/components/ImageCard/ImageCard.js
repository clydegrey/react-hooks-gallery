import React, { useRef, useEffect, useState } from 'react';
import styles from './ImageCard.module.scss';

const ImageCard = props => {
  const imgRef = useRef(null);
  const {
    urls: { regular },
    description
  } = props.image;

  const [cardState, cardSetState] = useState({ spans: null });

  // useEffect(() => imgRef.addEventListener('load', setSpans), []);

  const setSpans = () => {
    imgRef.current.addEventListener('load', () => {
      console.log(imgRef.current.clientHeight);
      const spans = `span ${Math.ceil(imgRef.current.clientHeight / 10) + 1}`;
      cardSetState({ spans });
    });
  };

  const style = { gridRowEnd: cardState.spans };

  useEffect(setSpans, []);

  return (
    <div className={styles.imagecard} style={style}>
      <img ref={imgRef} src={regular} alt={description} />
    </div>
  );
};

export default ImageCard;
