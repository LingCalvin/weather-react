/* eslint-disable jsx-a11y/alt-text */
import { Skeleton, SkeletonProps } from "@material-ui/lab";
import { ImgHTMLAttributes, useLayoutEffect, useRef, useState } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  skeletonProps?: SkeletonProps;
  className?: string;
}

/** A component which shows a placeholder until the image has loaded. */
export default function Image({
  skeletonProps,
  className,
  ...imageProps
}: ImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useLayoutEffect(() => {
    // Do not show the placeholder if the image has already completely loaded
    if (imageRef.current === null) {
      return;
    }
    if (imageRef.current.complete) {
      setLoaded(true);
    } else {
      imageRef.current.onload = () => setLoaded(true);
      imageRef.current.onerror = () => setLoaded(true);
    }
  }, []);

  return (
    <>
      {!loaded && (
        <Skeleton className={className} variant="rect" {...skeletonProps} />
      )}
      <img
        ref={imageRef}
        className={className}
        style={{ display: loaded ? undefined : "none" }}
        {...imageProps}
      />
    </>
  );
}
