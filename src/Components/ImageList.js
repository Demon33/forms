import React from 'react';

const ImageList = (props) => {
  const imagesNew = props.images.map(({description, id, urls}) => {
    return <img alt={description} key={id} src={urls.regular} />;
  });
  console.log(props.image);
  return <div>{imagesNew}</div>;
};

export default ImageList;
