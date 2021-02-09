import React, { useEffect, useState, useRef } from "react";
import Tilty from "react-tilty";
import { isMobile } from "react-device-detect";

const Skill = ({ header, img }) => {
  const el = useRef(null);
  const elSmall = useRef(null);
  const [size, setSize] = useState(window.innerWidth);

  const handleClickSmall = () => {
    //("small screen, clicked on: ", elSmall.current.innerHTML);
    elSmall.current.style.opacity = "1";
    // console.log("changed opacity to 1");

    setTimeout(() => (elSmall.current.style.opacity = "0"), 2000);
  };

  const handleHoverEnter = () => {
    el.current.style.opacity = "1";
  };
  const handleHoverLeave = () => {
    el.current.style.opacity = "0";
  };

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [size]);
  return (
    <>
      {!isMobile ? (
        <>
          <Tilty
            className="tilty img-responsive"
            scale={1.05}
            perspective={500}
            reset={true}
            max={45}
            style={{
              backgroundImage: "url(" + img + ")",
            }}
            onMouseEnter={handleHoverEnter}
            onMouseLeave={handleHoverLeave}
          >
            <div className="inner-element" ref={el}>
              <div>{header}</div>
            </div>
          </Tilty>
        </>
      ) : (
        <>
          <div
            id="mobileSkillImg"
            style={{
              backgroundImage: "url(" + img + ")",
            }}
          >
            <div
              id="mobileSkillInnerElement"
              ref={elSmall}
              onClick={handleClickSmall}
            >
              {header}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Skill;
