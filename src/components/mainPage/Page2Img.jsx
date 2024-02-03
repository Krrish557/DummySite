import { useInView } from "react-intersection-observer";
import { useState } from "react";

import asset2 from "../../assets/asset2.png";

function Page2Img() {
  const [hover, setHover] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const styles = {
    opacity: inView ? 1 : 0,
    transform: hover
      ? "translateY(0) rotate(0deg)"
      : `translateY(${inView ? "0" : "50px"}) rotate(15deg)`,
    transition: "opacity 0.5s, transform 0.5s",
  };

  const handleHover = (isHovered) => {
    setHover(isHovered);
  };

  return (
    <div id="page2imgdiv">
      <div id="page2circle">&nbsp;</div>
      <img
        src={asset2}
        id="asset2"
        ref={ref}
        style={styles}
        onMouseEnter={() => {
          handleHover(true);
          console.log("on");
        }}
        onMouseLeave={() => {
          handleHover(false);
          console.log("off");
        }}
      />
    </div>
  );
}

export default Page2Img;
