import React from 'react';
import styles from './ImageList.module.scss';
import ImageCard from '../ImageCard/ImageCard';

const ImageList = props => {
  const imageListMarkup = props.images.map(image => (
    <ImageCard key={image.id} image={image} />
  ));
  return <div className={styles.imagelist}>{imageListMarkup}</div>;
};

export default ImageList;
