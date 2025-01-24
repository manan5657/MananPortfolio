import { FaNpm } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/manan5657/MananPortfolio" target="_blank">
          <div className="social-icon">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/mananbhasin5657" target="_blank">
          <div className="social-icon">
            <img
              src="/assets/linkedin.svg"
              alt="twitter"
              className="w-1/2 h-1/2"
              style={{ filter: "brightness(240%)" }}
            />
          </div>
        </a>
        <a href="https://www.instagram.com/manan_bhasin5658/" target="_blank">
          <div className="social-icon">
            <img
              src="/assets/instagram.svg"
              alt="instagram"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
        <a
          href="https://www.npmjs.com/package/uipack-manan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="social-icon flex items-center justify-center  rounded-full p-2 transition duration-300">
            <FaNpm className="text-white-800 w-6 h-6" />
          </div>
        </a>
      </div>

      <p className="text-white-500">
        © 2025 Manan Bhasin. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
