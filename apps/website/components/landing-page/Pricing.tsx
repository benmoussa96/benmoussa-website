import React from "react";

import { pricing } from "@/constants";
import Link from "next/link";

const Pricing = () => {
  return (
    <div
      id="uni_roadmap"
      className="uni-roadmap uk-section uk-section-large@m uk-panel uk-overflow-hidden"
    >
      <div className="uk-container">
        <header
          className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-text-center uk-child-width-auto@m uk-grid"
          data-uk-grid
        >
          <div className="uk-panel">
            <h2 className="uk-h3 uk-h2@s uk-heading-d2@m uk-text-uppercase">
              <span className="uk-text-gradient">Pricing</span>
            </h2>
          </div>
        </header>
        <div className="uk-panel uk-margin-medium-top uk-margin-2xlarge-top@m">
          <div className="uk-grid uk-grid-row-medium uk-flex-middle" data-uk-grid>
            <div className="uk-width-4-12@m">
              <ul
                className="uni-roadmap-switcher"
                data-uk-switcher="connect: #uni-roadmap-nav; animation: uk-animation-slide-bottom-small, uk-animation-slide-top-small"
              >
                {pricing.map((category) => (
                  <li key={category.id}>
                    <a href="#" aria-expanded="false">
                      <h2 className="uk-h4 uk-h3@m uk-text-inherit uk-text-uppercase uk-margin-remove">
                        {category.category}
                      </h2>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="uk-width-expand@m">
              <div className="uk-panel">
                <ul id="uni-roadmap-nav" className="uk-switcher">
                  {pricing.map((category) => (
                    <li key={category.id}>
                      <div
                        className="uk-grid uk-child-width-1-1 uk-child-width-1-2@s"
                        data-uk-grid=""
                      >
                        {category.prices.map((price) => (
                          <div key={`${category.id}-${price.id}`}>
                            <div className="uk-card uk-card-small uk-card-medium@m uk-panel uk-radius uk-radius-large@m uk-border uk-box-shadow-xsmall dark:uk-background-white-5">
                              <div className="uk-panel" style={{}}>
                                {price.tag && (
                                  <span className="uk-text-small uk-background-gradient uk-radius-xsmall uk-text-gray-10 uk-width-auto uk-padding-2xsmall">
                                    {price.tag}
                                  </span>
                                )}
                                <h3 className="uk-h4 uk-h3@m uk-text-uppercase">{price.period}</h3>
                                <p className="uk-text-large@m" style={{ marginBottom: "auto" }}>
                                  {price.description}
                                </p>
                                <hr className="uk-width-2xsmall uk-margin-medium@m" />
                                <ul className="uk-list uk-text-small uk-text-medium@m">
                                  <li className="uk-flex-middle">
                                    <i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-currency-dollar uk-margin-xsmall-right uk-text-gradient"></i>{" "}
                                    {price.price}
                                  </li>
                                </ul>
                                <div>
                                  <div
                                    className={`uk-panel uk-card uk-card-small uk-card-medium@m uk-card-border uk-radius-medium uk-radius-large@m uk-box-shadow-hover-small hover:uk-border-primary ${
                                      price.highlight &&
                                      "uk-background-secondary hover:uk-background-primary"
                                    }`}
                                    style={{
                                      color: "red",
                                    }}
                                  >
                                    <a href="#metamask" className="uk-position-cover"></a>
                                    <h4
                                      className="uk-text-bold uk-h5@m uk-position-center"
                                      style={{ marginTop: "0px", cursor: "pointer" }}
                                    >
                                      Contact Me Now
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
