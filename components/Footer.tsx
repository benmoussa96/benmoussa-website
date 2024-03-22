import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="uni-footer uk-section uk-section-xlarge@m">
      <div className="uk-container">
        <div className="uk-panel">
          <Image
            className="uk-position-top-left uni-animation-bounce"
            width="32"
            src="/assets/images/objects/ethereum-01.png"
            alt="object"
            height="107"
            style={{ top: "32%", left: "16%" }}
          />
          <Image
            className="uk-position-top-right uni-animation-bounce"
            width="16"
            height="16"
            src="/assets/images/objects/x.png"
            alt="object"
            style={{ top: "8%", right: "16%" }}
          />
          <Image
            className="uk-position-bottom-right uni-animation-bounce"
            width="16"
            height="16"
            src="/assets/images/objects/circle-01.png"
            alt="object"
            style={{ bottom: "24%", right: "40%" }}
          />
          <Image
            className="uk-position-bottom-left uni-animation-bounce"
            width="24"
            height="24"
            src="/assets/images/objects/circle-03.png"
            alt="object"
            style={{ bottom: "-8%", left: "30%" }}
          />
          <div className="uk-grid uk-flex-center uk-text-center" data-uk-grid>
            <div className="uk-width-xlarge@m">
              <div className="uk-panel">
                <a href="#" className="uk-logo" data-uk-scroll data-offset="25">
                  <Image
                    className="uk-hidden dark:uk-visible"
                    width="70"
                    height="70"
                    src="/assets/images/light-medium-2.png"
                    alt="benMoussa"
                  />
                  <Image
                    className="uk-visible dark:uk-hidden"
                    width="70"
                    height="70"
                    src="/assets/images/dark-medium-2.png"
                    alt="benMoussa"
                  />
                </a>
                <p className="uk-text-xlarge@m uk-margin-small-top@m">
                  Great creators start with great taste. <br />
                  Intelligent people start with great intuition. <br />
                  Geniuses have both.
                </p>
                <ul className="uk-subnav uk-subnav-small uk-flex-center uk-text-gray-40 uk-margin-top uk-margin-medium-top@m">
                  <li>
                    <a href="mailto:benmoussa@thechaingenius.com">
                      <i className="uk-icon uk-icon-medium@m material-icons">mail</i>
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="linkedin"
                      href="https://www.linkedin.com/in/ghaiethbenmoussa/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="uk-icon uk-icon-medium@m unicon-logo-linkedin"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="github"
                      href="https://github.com/benmoussa96"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="uk-icon uk-icon-medium@m unicon-logo-github"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="medium"
                      href="https://thechaingenius.medium.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="uk-icon uk-icon-medium@m unicon-logo-medium"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="instagram"
                      href="https://www.instagram.com/thechaingenius/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="uk-icon uk-icon-medium@m unicon-logo-instagram"></span>
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
                    <a href="/privacy">Privacy policy</a>
                  </li>
                  <li>
                    <a href="/terms">Terms of use</a>
                  </li>
                  <li className="uk-margin-small-left">
                    <a href="#" data-uk-totop="" data-uk-scroll data-offset="25">
                      <i className="uk-icon uk-icon-small unicon-chevron-up"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="uk-flex-first@m uk-flex-center">
                <p className="uk-text-muted">
                  Built with ❤️ by The Chain Genius©
                  <br />
                  2024 • All rights reserved
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
