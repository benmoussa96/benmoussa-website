import Link from "next/link";
import React from "react";

const MenuMobile = () => {
  return (
    <div
      id="uni_mobile_menu"
      className="uni-mobile-menu uk-offcanvas"
      data-uk-offcanvas="mode: push; overlay: true; flip: true; selPanel: .uk-offcanvas-bar-panel;"
    >
      <div className="uk-offcanvas-bar-panel uk-panel dark:uk-background-gray-100">
        <div
          className="uni-mobile-menu-wrap uk-flex-column uk-flex-between"
          data-uk-height-viewport="offset-bottom: true;"
        >
          <div className="uni-mobile-menu-content">
            <header className="uk-card uk-card-2xsmall uk-flex-middle uk-flex-between">
              <div className="uk-flex-1">
                <button
                  aria-label="Close Menu"
                  className="uk-offcanvas-close uk-button uk-button-small uk-button-icon uk-button-default uk-button-outline uk-radius-circle"
                  type="button"
                >
                  <i className="uk-icon-small" data-feather="arrow-left" />
                </button>
              </div>
              <div>
                <h5 className="uk-h5 uk-text-uppercase uk-margin-remove">Navigation</h5>
              </div>
              <div className="uk-flex-1"></div>
            </header>
            <hr className="uk-margin-remove" />
            <div className="uk-card uk-card-small">
              <div className="uk-panel">
                <ul className="uk-nav uk-nav-default">
                  <li className="uk-nav-header">Home</li>
                  <li>
                    <Link href="/#about_me" data-uk-scroll>
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link href="/#expertise" data-uk-scroll>
                      Expertise
                    </Link>
                  </li>
                  <li>
                    <Link href="/#work" data-uk-scroll>
                      Previous Work
                    </Link>
                  </li>
                  {/* ----------------------------------------- */}
                  <li className="uk-nav-header">Projects</li>
                  <li>
                    <a href="/projects/1">Kayros Exchange</a>
                  </li>
                  <li>
                    <a href="/projects/2">Decentralise Impact</a>
                  </li>
                  <li>
                    <a href="#">Helium</a>
                  </li>
                  {/* ----------------------------------------- */}
                  <li className="uk-nav-header">Content &amp; Privacy</li>
                  <li>
                    <a href="/terms">Terms of use</a>
                  </li>
                  <li>
                    <a href="/privacy">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
