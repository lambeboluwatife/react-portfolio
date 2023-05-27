import Resume from "../assets/Boluwatife's Resume.pdf";
import { useSpring, animated } from "@react-spring/web";

const Contact = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 0 },
    config: {
      duration: 1000,
    },
  });
  return (
    <animated.div className="container contact" style={fadeIn}>
      <h4>Contact</h4>

      <p className="sub">
        I am always ready to serve my clients; call or reach out today for your
        website.
      </p>

      <a
        href={Resume}
        alt="Lambe Boluwatife Resume"
        target="_blank"
        rel="noreferrer"
        className="contact-btn"
      >
        Download Resume
      </a>

      <div className="grid grid-3 contact-area">
        <div className=""></div>
        <div className="contact-form">
          <form
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            <div className="form-group">
              <div className="input-group-prepend input-group-lg">
                <span className="input-group-text bg-danger text-white"></span>
                <input
                  type="text"
                  name="name"
                  className="form-control bg-dark text-white"
                  placeholder="Name"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group-prepend input-group-lg">
                <span className="input-group-text bg-danger text-white"></span>
                <input
                  type="email"
                  name="email"
                  className="form-control bg-dark text-white"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group-prepend input-group-lg">
                <span className="input-group-text bg-danger text-white"></span>
                <textarea
                  className="form-control bg-dark text-white"
                  name="message"
                  placeholder="Message"
                  rows="5"
                  required
                ></textarea>
              </div>
            </div>
            <input type="submit" value="Submit" className="submit" />
          </form>
        </div>
        <div className=""></div>
      </div>
    </animated.div>
  );
};

export default Contact;
