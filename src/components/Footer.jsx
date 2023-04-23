const Footer = () => {
  return (
    <footer>
      <div className="text-center footer">
        <hr />
        Made with <b style={{ color: "#00ff00" }}>&hearts;</b> | L.B.D Codes
        &copy; 2023
        <div className="">
          <div className="social">
            <a
              rel="noreferrer"
              href="https://twitter.com/LBD_codes "
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className="social">
            <a
              rel="noreferrer"
              href="https://www.instagram.com/lbd_codes/"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="social">
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/lambe-boluwatife-870b6136"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <div className="social">
            <a
              rel="noreferrer"
              href="https://github.com/lambeboluwatife"
              target="_"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
