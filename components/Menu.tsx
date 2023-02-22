import React from "react";
import Link from "next/link";

const Menu = () => {
  return (
    <header className="uni-header">
      <div
        className="uni-header-navbar"
        data-uk-sticky="top: 70; show-on-up: false; animation: uk-animation-slide-top"
        data-anime="opacity:[1, 0]; translateY:[0, -24]; onview: true; delay: 0;"
      >
        <div className="uk-container">
          <nav className="uk-navbar uk-navbar-container uk-navbar-transparent" data-uk-navbar>
            <div className="uk-navbar-top">
              <div className="uk-navbar-left">
                <Link className="uk-logo uk-navbar-item uk-h4 uk-h3@m uk-margin-remove" href="/">
                  <img
                    className="uk-visible dark:uk-hidden"
                    width="120"
                    src="../assets/images/benmoussa-light.svg"
                    alt="benMoussa"
                    loading="lazy"
                  />
                  <img
                    className="uk-hidden dark:uk-visible"
                    width="120"
                    src="../assets/images/benmoussa-dark.svg"
                    alt="benMoussa"
                    loading="lazy"
                  />
                </Link>
              </div>

              <div className="uk-navbar-right uk-flex-1 uk-flex-right">
                <ul
                  className="uk-navbar-nav dark:uk-text-gray-10 uk-visible@m"
                  data-uk-scrollspy-nav="closest: li; scroll: true; offset: 80"
                  data-uk-navbar-bound
                >
                  <li>
                    <a href="#about_me">About Me</a>
                  </li>
                  <li>
                    <a href="#expertise">Expertise</a>
                  </li>
                  <li>
                    <a href="#work">Work</a>
                  </li>
                  <li>
                    <a href="#testimonials">Testimonials</a>
                  </li>
                  <li>
                    <a href="#faq">FAQ</a>
                  </li>
                </ul>
                <div className="uk-navbar-item">
                  <ul className="uk-subnav uk-subnav-small uk-visible@m">
                    <li>
                      <a href="https://www.linkedin.com/in/ghaiethbenmoussa/" target="_blank">
                        <i className="uk-icon unicon-logo-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/benmoussa96" target="_blank">
                        <i className="uk-icon unicon-logo-github"></i>
                      </a>
                    </li>
                  </ul>

                  {/* <!-- header: call to actions --> */}
                  <a
                    href="#uni_contact"
                    className="uk-button uk-button-medium@m uk-button-default uk-button-outline uk-margin-left uk-visible@l"
                    data-uk-toggle=""
                  >
                    <span>Contact Me</span>
                  </a>
                </div>

                <div className="uk-navbar-item uk-hidden@m">
                  <a
                    href="#uni_connect_wallet"
                    className="uk-button uk-button-medium@m uk-button-icon uk-hidden@m uk-margin-small-right"
                    data-uk-toggle=""
                  >
                    <i className="uk-icon unicon-wallet"></i>
                  </a>
                  <a href="#uni_mobile_menu" data-uk-toggle>
                    <span className="uk-icon uk-icon-medium material-icons">menu</span>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Menu;
