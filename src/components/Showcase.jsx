import { useSpring, animated } from "@react-spring/web";
const Showcase = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 0 },
    config: {
      duration: 1000,
    },
  });
  return (
    <>
      <animated.div className="container showcase" style={fadeIn}>
        <div className="grid">
          <div className="info">
            <h1 className="info-title">LAMBE BOLUWATIFE.</h1>
            <p>
              Hello, my name is Boluwatife Lambe. Nice to meet you. I'll like to
              welcome you with my personal portfolio.
            </p>
          </div>
          <div className="info-image"></div>
        </div>
      </animated.div>
    </>
  );
};

export default Showcase;
