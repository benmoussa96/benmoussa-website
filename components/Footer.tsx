import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="uni-footer uk-section uk-section-xlarge@m uk-panel">
      <div
        className="uk-position-cover uk-background-cover uk-visible@m"
        data-src="../assets/images/footer-bg.png"
        data-uk-img
      ></div>
      <div className="uk-container">
        <div className="uk-panel">
          <div className="uk-grid uk-flex-center uk-text-center" data-uk-grid>
            <div className="uk-width-large@m">
              <div className="uk-panel uk-position-z-index">
                <ul className="uk-subnav uk-subnav-small uk-flex-center uk-text-gray-70">
                  {/* linkedin, github, instagram, medium,  */}
                  <li>
                    <a href="https://www.linkedin.com/in/ghaiethbenmoussa/" target="_blank">
                      <span className="uk-icon uk-icon-large@m unicon-logo-linkedin"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/benmoussa96" target="_blank">
                      <span className="uk-icon uk-icon-large@m unicon-logo-github"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/ben_mousssa/" target="_blank">
                      <span className="uk-icon uk-icon-large@m unicon-logo-instagram"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://medium.com/@ghaiethbenemoussa" target="_blank">
                      <span className="uk-icon uk-icon-large@m unicon-logo-medium"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://discordapp.com/users/1069635708140142592" target="_blank">
                      <span className="uk-icon uk-icon-large@m unicon-logo-discord"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="uk-panel uk-text-small uk-margin-medium-top">
            <div
              className="uk-grid uk-child-width-1-1@m uk-flex-center uk-text-center"
              data-uk-grid
            >
              <div>
                <ul className="uk-subnav uk-text-muted uk-flex-center">
                  <li>
                    <Link href="/privacy">Privacy</Link>
                  </li>
                  <li>
                    <Link href="/terms">Terms of use</Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="uk-text-muted">
                  Built in Tunisia with ❤️
                  <br />© 2023 • BEN MOUSSA Ghaieth • All rights reserved
                </p>
                {/* <p className="uk-text-muted"></p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
