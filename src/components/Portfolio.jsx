import portfolios from "../data/portfolio";
import Work from "./Work";

const Portfolio = () => {
  //   console.log(portfolios);
  return (
    <div className="portfolio container">
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
    </div>
  );
};

export default Portfolio;
