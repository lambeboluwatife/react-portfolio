const Skills = () => {
  return (
    <div className="container">
      <div className="skills-header">
        <h4>Skills</h4>
        <h2>Available skills that I can work with.</h2>
        <div class="line">
          <span class="line-1"></span>
          <br />
          <span class="line-2"></span>
          <br />
          <span class="line-3"></span>
        </div>
      </div>
      <div className="skills-content">
        <div className="frontend">
          <b>
            {" "}
            <span className="number">01.</span>
            <span>Web Development (Frontend)</span>
          </b>
          <br />
          <br />
          <div className="skills-desc grid">
            <div className=""></div>
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              mollitia repellendus velit vitae quisquam? Totam nam alias
              tempore, qui ullam provident! Hic enim possimus, id ab minus sed
              quisquam similique?
            </div>
          </div>
          <br />
          <div className="skills grid grid-5">
            <div className="skill">
              <h6>HTML</h6>
            </div>
            <div className="skill">
              <h6>CSS</h6>
            </div>
            <div className="skill">
              <h6>JAVASCRIPT</h6>
            </div>
            <div className="skill">
              <h6>REACTJS</h6>
            </div>
            <div className="skill">
              <h6>BOOTSTRAP</h6>
            </div>
          </div>
          <br />
          <br />

          <div className="backend">
            <b>
              {" "}
              <span className="number">02.</span>
              <span>Web Development (Backend)</span>
            </b>
            <br />
            <br />
            <div className="skills-desc grid">
              <div className=""></div>
              <div className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore mollitia repellendus velit vitae quisquam? Totam nam
                alias tempore, qui ullam provident! Hic enim possimus, id ab
                minus sed quisquam similique?
              </div>
            </div>
            <br />
            <div className="skills grid grid-5">
              <div className="skill">
                <h6>NODEJS</h6>
              </div>
              <div className="skill">
                <h6>EXPRESSJS</h6>
              </div>
              <div className="skill">
                <h6>MONGODB</h6>
              </div>
              <div className="skill">
                <h6>EJS</h6>
              </div>
              <div className="skill">
                <h6>MONGOOSE</h6>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
