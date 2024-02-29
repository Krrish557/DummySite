import { useInView } from "react-intersection-observer";
function FreqTitle() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const animationStyle = {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    transition: "opacity 0.5s, transform 0.5s",
  };

  return (
    <div ref={ref} style={animationStyle} id="freqtitle">
      <h1>Frequesntly Asked Questions.</h1>
      <p style={{ color: "rgb(108, 108, 108)", fontWeight: 400 }}>
        LabMark is the internet&apos;s trusted source for labels. See why
        thousands of <br />
        customers rely on us to help them achieve success.
      </p>
    </div>
  );
}

export default FreqTitle;
