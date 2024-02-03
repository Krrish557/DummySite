import { useInView } from "react-intersection-observer";

function GrowTogText() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const animationStyle = {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    transition: "opacity 0.5s, transform 0.5s",
  };

  return (
    <div ref={ref} style={animationStyle} id="growtogText">
      <h1>Let&apos;s grow together.</h1>
      <p style={{ color: "rgb(108, 108, 108)", fontWeight: 400 }}>
        LabMark: your Go-To label on the web, where countless thrive
        <br />
        Find out why we&apos;re the secret to Success.
      </p>
    </div>
  );
}

export default GrowTogText;
