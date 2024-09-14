import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import NcImage from "./NcImage/NcImage";

interface IPhotoFullView {
  src: string;
  className?: string;
  alt?: string;
  sizes?: string;
}

const PhotoFullView: React.FC<IPhotoFullView> = (props) => {
  const { src, className, alt, sizes } = props;

  return (
    <PhotoProvider>
      <PhotoView src={src}>
        <NcImage src={src} alt={alt} className={className} sizes={sizes} />
      </PhotoView>
    </PhotoProvider>
  );
};

export default PhotoFullView;
