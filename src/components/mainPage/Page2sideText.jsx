import { useInView } from "react-intersection-observer";
function Page2sideText() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const animationStyle = {
    opacity: inView ? 1 : 0,
    transform: inView ? "translate(0)" : "translate(-50px)",
    transition: "opacity 1s, transform 1s",
  };
  return (
    <div ref={ref} style={animationStyle} id="Page2sideText">
      <h5 style={{ color: "red" }}>
        <u>Printed Perfection with Precision</u>
      </h5>
      <h1>Seal the Deal the Label that Appeal</h1>
      <p>
        LabMark A4 Self-Adhesive label is the Make In India product of a global
        leader in self-adhesive technology - Avery Dennison. These A4
        self-adhesive labels are made of nature friendly paper with recycled
        content resulting in saving trees, hence, protecting our environment. We
        are focused on providing sustainable labelling solution to all. Apart
        from A4 labels, we have other labelling products of AD.
      </p>
    </div>
  );
}

export default Page2sideText;
