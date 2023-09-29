import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { menu, work } from "@/constants";

const MenuMobile = () => {
  const router = useRouter();

  const close = () => {
    UIkit.offcanvas("#uni_mobile_menu").hide();
  };

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
                  {menu.map((item) =>
                    router.pathname === "/" ? (
                      <li key={item.id}>
                        <a href={item.href} data-uk-scroll data-offset="25" onClick={close}>
                          {item.label}
                        </a>
                      </li>
                    ) : (
                      <li key={item.id}>
                        <a href={item.href} onClick={close}>
                          {item.label}
                        </a>
                      </li>
                    )
                  )}
                  {/* ----------------------------------------- */}
                  <li className="uk-nav-header">Projects</li>
                  {work.map((project) => (
                    <li key={project.id}>
                      <a href={`/projects/${project.id}`} onClick={close}>
                        {project.name}
                      </a>
                    </li>
                  ))}
                  {/* ----------------------------------------- */}
                  <li className="uk-nav-header">Content &amp; Privacy</li>
                  <li>
                    <a href="/terms" onClick={close}>
                      Terms of use
                    </a>
                  </li>
                  <li>
                    <a href="/privacy" onClick={close}>
                      Privacy Policy
                    </a>
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
