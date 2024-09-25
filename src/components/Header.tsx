import React, { FC } from 'react';

interface imageData {
  image: {
    src: string;
    alt: string;
  };
}

const Header: FC<imageData> = ({ image: { src, alt } }: imageData) => {
  return <img src={src} alt={alt} />;
};

export default Header;
