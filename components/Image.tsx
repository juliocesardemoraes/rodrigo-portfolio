import React from "react";
import Image from "next/image";
import rodrigo from "../public/rodrigo2x.png";

export default function ImageComponent({
  width,
  height,
  src,
  alt,
  priority = false,
  className = "",
}: {
  width: number;
  height: number;
  src: any;
  alt: string;
  priority?: boolean;
  className?: string;
}): React.JSX.Element {
  return (
    <Image
      src={src}
      quality={100}
      alt={alt}
      priority={priority}
      className={className}
    ></Image>
  );
}
