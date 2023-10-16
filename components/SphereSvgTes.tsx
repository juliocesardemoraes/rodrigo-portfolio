import Image from "next/image";
import React, { forwardRef } from "react";
import sphere from "@/public/sphere.svg";

const TwitterTest = forwardRef(function SphereSvg(props: any, ref: any) {
  return <Image src={sphere} alt="Blablbal" ref={ref}></Image>;
});

export default TwitterTest;
