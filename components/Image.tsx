import React from "react";
import Image from "next/image";
import rodrigo from "../public/rodrigo2x.png";

export default function ImageComponent() {
  return (
    <Image
      width={120}
      height={180}
      src={rodrigo}
      quality={100}
      alt="Picture of the author"
    ></Image>
  );
}
