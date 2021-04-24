import { Skeleton, SkeletonProps } from "@material-ui/lab";
import { useState } from "react";

interface ImageProps {
  src?: string;
  alt?: string;
  skeletonProps?: SkeletonProps;
  className?: string;
}

/** A component which shows a placeholder until the image has loaded. */
export default function Image({
  src,
  alt,
  skeletonProps,
  className,
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
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
}
