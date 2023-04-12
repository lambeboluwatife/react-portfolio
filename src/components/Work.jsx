const Work = ({ portfolio }) => {
  return (
    <div className="work-items">
      <div className="img-area">
        <img src={portfolio.image} alt={portfolio.name} />

        <div className="img-text">
          <h4>
            <b>{portfolio.desc}</b>
          </h4>

          <h6>
            <b>{portfolio.desc}</b>
          </h6>

          <a href={portfolio.live} rel="noreferrer" target="_blank">
            <button>Live Site</button>
          </a>

          <a href={portfolio.source} rel="noreferrer" target="_blank">
            <button>Source Code</button>
          </a>
        </div>
      </div>
      <div className="work-details">
        <h4>{portfolio.name}</h4>
        <h6>{portfolio.skills}</h6>
      </div>
    </div>
  );
};

export default Work;
