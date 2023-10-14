import React from "react";
import Image from "next/image";
import rodrigo from "../public/rodrigo2x.png";

export default function ImageComponent({
  width,
  height,
  src,
  alt,
}: {
  width: number;
  height: number;
  src: any;
  alt: string;
}): React.JSX.Element {
  return (
    <Image
      width={width}
      height={height}
      src={src}
      quality={100}
      alt={alt}
    ></Image>
  );
}
