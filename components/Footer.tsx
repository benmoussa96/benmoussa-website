import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="uni-footer uk-section uk-section-xlarge@m">
      <div className="uk-container">
        <div className="uk-panel">
          <img
            className="uk-position-top-left"
            width="32"
            src="../assets/images/objects/ethereum-01.png"
            alt="object"
            style={{ top: "32%", left: "16%" }}
          />
          <img
            className="uk-position-top-right"
            width="16"
            src="../assets/images/objects/x.png"
            alt="object"
            style={{ top: "8%", right: "16%" }}
          />
          <img
            className="uk-position-bottom-right"
            width="16"
            src="../assets/images/objects/circle-01.png"
            alt="object"
            style={{ bottom: "24%", right: "40%" }}
          />
          <img
            className="uk-position-bottom-left"
            width="24"
            src="../assets/images/objects/circle-03.png"
            alt="object"
            style={{ bottom: "-8%", left: "30%" }}
          />
          <div className="uk-grid uk-flex-center uk-text-center" data-uk-grid>
            <div className="uk-width-xlarge@m">
              <div className="uk-panel">
                <a href="#" className="uk-logo" data-uk-scroll>
                  <img width="300" src="../assets/images/benmoussa.svg" alt="benMoussa" />
                </a>
                <p className="uk-text-xlarge@m uk-margin-medium-top@m">
                  Great creators start with great taste. <br />
                  Intelligent people start with great intuition. <br />
                  Geniuses have both.
                </p>
                <ul className="uk-subnav uk-subnav-small uk-flex-center uk-text-gray-40 uk-margin-top uk-margin-medium-top@m">
                  <li>
                    <a href="https://www.linkedin.com/in/ghaiethbenmoussa/" target="_blank">
                      <span className="uk-icon uk-icon-medium@m unicon-logo-linkedin"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/benmoussa96" target="_blank">
                      <span className="uk-icon uk-icon-medium@m unicon-logo-github"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/ben_mousssa/" target="_blank">
                      <span className="uk-icon uk-icon-medium@m unicon-logo-instagram"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://medium.com/@ghaiethbenemoussa" target="_blank">
                      <span className="uk-icon uk-icon-medium@m unicon-logo-medium"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://discordapp.com/users/1069635708140142592" target="_blank">
                      <span className="uk-icon uk-icon-medium@m unicon-logo-discord"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="uk-margin-medium uk-margin-3xlarge-top@m" />
          <div className="uk-panel uk-text-small">
            <div
              className="uk-grid uk-child-width-auto@m uk-flex-center uk-flex-between@m uk-text-center uk-text-left@m"
              data-uk-grid
            >
              <div>
                <ul className="uk-subnav uk-subnav-small uk-text-muted uk-flex-center">
                  <li>
                    <Link href="/privacy">Privacy policy</Link>
                  </li>
                  <li>
                    <Link href="/terms">Terms of use</Link>
                  </li>
                  <li className="uk-margin-small-left">
                    <a href="#" data-uk-totop="" data-uk-scroll>
                      <i className="uk-icon uk-icon-small unicon-chevron-up"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="uk-flex-first@m uk-flex-center">
                <p className="uk-text-muted">
                  Built with ❤️ in Tunisia
                  <br />© 2023 • BEN MOUSSA Ghaieth • All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
