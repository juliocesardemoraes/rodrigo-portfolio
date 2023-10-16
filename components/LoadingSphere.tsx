import React, { useRef, useEffect, useState } from "react";
import style from "@/styles/Sphere.module.scss";
import anime from "animejs";
import SphereSvg from "./SphereSvg";

export default function LoadingSphere() {
  const sphereRef: any = useRef(null);

  useEffect(() => {
    let animations: any[] = [];
    let breathAnimation = null;

    if (sphereRef.current) {
      const paths = sphereRef.current.getElementsByTagName("path");

      breathAnimation = anime({
        begin: function () {
          for (var i = 0; i < paths.length; i++) {
            animations.push(
              anime({
                targets: paths[i],
                stroke: {
                  value: ["rgba(255,75,75,1)", "rgba(80,80,80,.35)"],
                  duration: 500,
                },
                translateX: [2, -4],
                translateY: [2, -4],
                easing: "easeOutQuad",
                autoplay: false,
              })
            );
          }
        },
        update: function (ins: { currentTime: number }) {
          animations.forEach(function (animation, i) {
            var percent =
              (1 - Math.sin(i * 0.35 + 0.0022 * ins.currentTime)) / 2;
            animation.seek(animation.duration * percent);
          });
        },
        duration: Infinity,
        autoplay: false,
      });

      breathAnimation.play();
    }

    return () => {
      sphereRef.current = null;
      animations = [];
      breathAnimation = null;
    };
  }, []);

  return (
    <div className={`${style.animation__wrapper}`}>
      <div className={`${style.sphere__animation}`}>
        <SphereSvg className={`${style.sphere}`} ref={sphereRef}></SphereSvg>
      </div>
    </div>
  );
}
