import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div
      id="about_me"
      className="uni-about uk-section uk-section-xlarge@m uk-panel uk-overflow-hidden"
    >
      <div className="uk-container">
        <header
          className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-grid"
          data-uk-grid
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="uk-panel uk-text-center">
            <h2 className="uk-h3 uk-h2@s uk-heading-d2@m uk-text-uppercase">
              About <span className="uk-text-gradient">me</span>
            </h2>
          </div>
        </header>
        <div className="uk-panel uk-margin-medium-top uk-margin-2xlarge-top@m">
          <div
            className="uk-grid uk-grid-2xlarge uk-grid-3xlarge@m uk-child-width-1-1"
            data-uk-grid=""
          >
            <div>
              <div className="uk-panel">
                <div
                  className="uk-grid uk-grid-3xlarge@m uk-flex-middle uk-child-width-1-2@m"
                  data-uk-grid=""
                >
                  <div>
                    <div
                      className="uk-panel uk-image-middle uk-overflow-hidden uk-radius uk-radius-large@m"
                      data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 200;"
                    >
                      <Image
                        src="/assets/images/features-01.png"
                        alt="Crafter of quality software"
                        width="960"
                        height="689"
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      className="uk-panel"
                      data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
                    >
                      <span className="uk-text-overline uk-text-gradient">Young Craftsman</span>
                      <h3 className="uk-h3 uk-h1@m">Crafter of quality software</h3>
                      <p className="uk-text-large@m">
                        You can imagine anything blockchain-related, no matter how complex it may be
                        — and i&#39;ll bring your concept to life, exactly as you think it should
                        look and work. From user-facing decentralised apps to full-blown
                        cross-platform enterprise ecosystems — you can send any project my way.
                      </p>
                      <div
                        className="uk-grid uk-grid-large@m uk-grid-match uk-child-width-1-2 uk-margin-large-top@m"
                        data-uk-grid=""
                      >
                        <div>
                          <div className="uk-panel">
                            <h5 className="uk-h4 uk-h2@m uk-margin-xsmall">10+</h5>
                            <span className="uk-text-small@m">
                              Front & Backend
                              <br /> Framework Expertise
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="uk-panel">
                            <h5 className="uk-h4 uk-h2@m uk-margin-xsmall">150k+</h5>
                            <span className="uk-text-small@m">Lines of Code Delivered</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="uk-panel">
                <div
                  className="uk-grid uk-grid-3xlarge@m uk-flex-middle uk-child-width-1-2@m"
                  data-uk-grid=""
                >
                  <div>
                    <div
                      className="uk-panel uk-image-middle uk-overflow-hidden uk-radius uk-radius-large@m"
                      data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
                    >
                      <Image
                        src="/assets/images/features-04.png"
                        alt="Blockchain Expert"
                        width="960"
                        height="689"
                      />
                    </div>
                  </div>
                  <div className="uk-flex-first@m">
                    <div
                      className="uk-panel"
                      data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 400;"
                    >
                      <span className="uk-text-overline uk-text-gradient">Tech Geek</span>
                      <h3 className="uk-h3 uk-h1@m">Blockchain Expert</h3>
                      <p className="uk-text-large@m">
                        My passion for the potential of blockchain to disrupt traditional
                        industries, combined with my experience building dApps such as DAOs,
                        decentralized exchanges, payment systems, and smart contract platforms
                        helped me gain an in-depth understanding of the full range of Blockchain use
                        cases and business models.
                      </p>
                      <div
                        className="uk-grid uk-grid-large@m uk-grid-match uk-child-width-1-2@m uk-margin-medium-top uk-margin-large-top@m"
                        data-uk-grid=""
                      >
                        <div>
                          <div className="uk-panel">
                            <div
                              className="uk-grid uk-grid-xsmall uk-grid-small@m uk-flex-top@s uk-flex-middle"
                              data-uk-grid=""
                            >
                              <div>
                                <div className="uk-card uk-card-xsmall uk-radius-medium uk-radius-large@m uk-background-gradient uk-flex-middle uk-flex-center">
                                  <i className="uk-icon-small uk-icon-medium@m unicon-wikis uk-text-white"></i>
                                </div>
                              </div>
                              <div className="uk-width-expand">
                                <span className="uk-text-small@m">
                                  Decentralization & self-custody
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="uk-panel">
                            <div
                              className="uk-grid uk-grid-xsmall uk-grid-small@m uk-flex-top@s uk-flex-middle"
                              data-uk-grid=""
                            >
                              <div>
                                <div className="uk-card uk-card-xsmall uk-radius-medium uk-radius-large@m uk-background-gradient uk-flex-middle uk-flex-center">
                                  <i className="uk-icon-small uk-icon-medium@m unicon-code uk-text-white"></i>
                                </div>
                              </div>
                              <div className="uk-width-expand">
                                <span className="uk-text-small@m">
                                  Best paractices & design patterns
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="uk-panel">
                            <div
                              className="uk-grid uk-grid-xsmall uk-grid-small@m uk-flex-top@s uk-flex-middle"
                              data-uk-grid=""
                            >
                              <div>
                                <div className="uk-card uk-card-xsmall uk-radius-medium uk-radius-large@m uk-background-gradient uk-flex-middle uk-flex-center">
                                  <i className="uk-icon-small uk-icon-medium@m unicon-security uk-text-white"></i>
                                </div>
                              </div>
                              <div className="uk-width-expand">
                                <span className="uk-text-small@m">
                                  Highest standard of security principles
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="uk-panel">
                            <div
                              className="uk-grid uk-grid-xsmall uk-grid-small@m uk-flex-top@s uk-flex-middle"
                              data-uk-grid=""
                            >
                              <div>
                                <div className="uk-card uk-card-xsmall uk-radius-medium uk-radius-large@m uk-background-gradient uk-flex-middle uk-flex-center">
                                  <i className="uk-icon-small uk-icon-medium@m unicon-money uk-text-white"></i>
                                </div>
                              </div>
                              <div className="uk-width-expand">
                                <span className="uk-text-small@m">Optimization of gas costs</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
