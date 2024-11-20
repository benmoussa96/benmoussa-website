import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { menu } from "@/constants";
import Image from "next/image";

const Menu = () => {
  const router = useRouter();

  return (
    <header
      id="uni-header"
      className={`uni-header ${router.pathname === "/" ? "uk-position-top" : ""}`}
    >
      <div
        className="uni-header-navbar"
        data-uk-sticky="top: 70; show-on-up: false; animation: uk-animation-slide-top"
        data-anime="opacity:[0, 1]; translateY:[-24, 0]; onview: true; delay: 0;"
      >
        <div className="uk-container">
          <nav className="uk-navbar uk-navbar-container uk-navbar-transparent" data-uk-navbar="">
            <div className="uk-navbar-top">
              <div className="uk-navbar-left" style={{ width: "165px" }}>
                <Link
                  className="uk-logo uk-navbar-item uk-h4 uk-h3@m uk-margin-remove"
                  href="/"
                  data-offset="25"
                >
                  <Image
                    className="uk-visible dark:uk-hidden"
                    width="120"
                    height="120"
                    src="/assets/images/dark-large.png"
                    alt="The Chain Genius"
                    loading="lazy"
                  />
                  <Image
                    className="uk-hidden dark:uk-visible"
                    width="120"
                    height="120"
                    src="/assets/images/light-large.png"
                    alt="The Chain Genius"
                    loading="lazy"
                  />
                </Link>
              </div>

              <div className="uk-navbar-right uk-flex-1 uk-flex-right">
                <ul
                  className="uk-navbar-nav dark:uk-text-gray-10 uk-visible@m"
                  data-uk-scrollspy-nav="closest: li; scroll: true; offset: 80"
                  data-uk-navbar-bound=""
                >
                  {menu.map((item) =>
                    router.pathname === "/" ? (
                      <li key={item.id}>
                        <Link href={item.href} data-uk-scroll data-offset="25">
                          {item.label}
                        </Link>
                      </li>
                    ) : (
                      <li key={item.id}>
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    )
                  )}
                </ul>
                <div className="uk-navbar-item">
                  <ul className="uk-subnav uk-subnav-small uk-visible@m">
                    <li>
                      <Link
                        href="https://www.linkedin.com/in/ghaiethbenmoussa/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="uk-icon unicon-logo-linkedin"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://github.com/benmoussa96" target="_blank" rel="noreferrer">
                        <i className="uk-icon unicon-logo-github"></i>
                      </Link>
                    </li>
                  </ul>

                  {/* <!-- header: call to actions --> */}
                  <Link
                    href="#uni_contact"
                    className="uk-button uk-button-medium@m uk-button-default uk-button-outline uk-margin-left uk-visible@l"
                    data-uk-toggle=""
                  >
                    <span>Contact Me</span>
                  </Link>
                </div>

                <div className="uk-navbar-item uk-hidden@m">
                  <Link
                    href="#uni_contact"
                    className="uk-button uk-button-medium@m uk-button-icon uk-hidden@m uk-margin-small-right"
                    data-uk-toggle=""
                  >
                    <i className="uk-icon unicon-forum"></i>
                  </Link>
                  <Link
                    href="#uni_mobile_menu"
                    className="uk-button uk-button-medium@m uk-button-icon uk-hidden@m uk-margin-small-right"
                    data-uk-toggle=""
                  >
                    <i className="uk-icon uk-icon-medium material-icons">menu</i>
                  </Link>
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
