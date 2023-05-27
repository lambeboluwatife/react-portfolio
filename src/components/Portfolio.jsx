import portfolios from "../data/portfolio";
import Work from "./Work";
import { useSpring, animated } from "@react-spring/web";

const Portfolio = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 0 },
    config: {
      duration: 1000,
    },
  });
  return (
    <animated.div className="portfolio container" style={fadeIn}>
      <div className="grid portfolio-title">
        <div>
          <h4>Portfolio</h4>
          <h2>For your view, this is a demonstration of my skill set.</h2>
        </div>
        <div>
          <div className="line">
            <span className="line-1"></span>
            <br />
            <span className="line-2"></span>
            <br />
            <span className="line-3"></span>
          </div>
        </div>
      </div>
      <div className="portfolio-content grid">
        {portfolios.map((portfolio) => (
          <Work key={portfolio.id} portfolio={portfolio} />
        ))}
      </div>
      <br />
      <br />
    </animated.div>
  );
};

export default Portfolio;
