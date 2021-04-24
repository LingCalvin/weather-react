/* eslint-disable jsx-a11y/alt-text */
import { Skeleton, SkeletonProps } from "@material-ui/lab";
import React, { ImgHTMLAttributes, useState } from "react";

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
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <Skeleton className={className} variant="rect" {...skeletonProps} />
      )}
      <img
        className={className}
        style={{ display: loaded ? undefined : "none" }}
        onLoad={() => setLoaded(true)}
        {...imageProps}
      />
    </>
  );
}
