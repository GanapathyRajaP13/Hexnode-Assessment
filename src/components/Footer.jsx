import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hidden-element"></div>
        <div className="container">
          <div className="text-container">
            <h1 className="heading">
              Get Hexnode UEM and start securing your endpoints
            </h1>
          </div>
          <div className="button-container">
            <span className="cta-text">TRY HEXNODE FOR FREE</span>
          </div>
        </div>
      </section>
      <footer className="footer">
        <nav>
          <div className="container">
            <div className="footer-content sm-row">
              <div className="footer-links">
                <a
                  className="footer-link"
                  href="https://www.hexnode.com/legal/terms-of-use/"
                >
                  Terms of Use
                </a>
                <a
                  className="footer-link"
                  href="https://www.hexnode.com/legal/privacy-policy/"
                >
                  Privacy
                </a>
                <a
                  className="footer-link"
                  href="https://www.hexnode.com/legal/cookies-policy/"
                >
                  Cookies
                </a>
              </div>
              <div>
                <p className="footer-text">
                  Copyright © 2024 Mitsogo Inc. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
