import React from "react";

const Contact = () => {
  return (
    <div id="uni_contact" className="uk-modal-full" data-uk-modal="">
      <div className="uk-modal-dialog">
        <div className="uk-position-top uk-position-z-index-negative" data-uk-height-viewport="">
          <div
            className="uk-position-cover uk-background-cover uk-opacity-10 dark:uk-hidden"
            data-src="../assets/images/gradient-01.png"
            data-uk-img=""
          ></div>
          <div
            className="uk-position-cover uk-background-cover uk-opacity-20 uk-hidden dark:uk-visible"
            data-src="../assets/images/gradient-01.png"
            data-uk-img=""
          ></div>
        </div>
        <button
          className="uk-modal-close-full uk-close-large uk-position-small"
          type="button"
          data-uk-close=""
        ></button>
        <div className="uk-container">
          <div
            className="uk-grid uk-flex-center uk-flex-middle uk-section"
            data-uk-grid=""
            data-uk-height-viewport=""
          >
            <div>
              <header className="uni-page-header">
                <div className="uk-container">
                  <h1 className="heading uk-h3 uk-h1@m uk-text-center">Contact Me</h1>
                </div>
              </header>
              <div className="uk-margin-top uk-margin-large-top@m">
                <div className="uk-container uk-container-xsmall">
                  <div className="uk-grid uk-child-width-1-1" data-uk-grid="">
                    <div>
                      <div className="uk-card uk-card-small uk-card-large@m uk-card-default uk-card-border uk-radius-medium uk-radius-large@m dark:uk-background-white-5">
                        <form
                          action="?"
                          className="uk-grid uk-grid-xsmall uk-child-width-1-1"
                          data-uk-grid=""
                        >
                          <div className="uk-width-1-2@m">
                            <div className="uk-form-controls">
                              <input
                                className="uk-input uk-form-medium uk-text-bold"
                                type="text"
                                placeholder="Your name"
                              />
                            </div>
                          </div>
                          <div className="uk-width-1-2@m">
                            <div className="uk-form-controls">
                              <input
                                className="uk-input uk-form-medium uk-text-bold"
                                type="email"
                                placeholder="Your email"
                              />
                            </div>
                          </div>
                          <div className="uk-form-controls">
                            <input
                              className="uk-input uk-form-medium uk-text-bold"
                              type="text"
                              placeholder="Subject"
                            />
                          </div>
                          <div className="uk-form-controls">
                            <textarea
                              className="uk-textarea uk-padding uk-height-xsmall uk-radius-large uk-text-bold"
                              rows={5}
                              placeholder="Type your message"
                            ></textarea>
                          </div>
                          <div className="uk-form-controls uk-flex-center">
                            <button
                              type="submit"
                              className="uk-button uk-button-primary uk-width-small@m uk-margin-auto"
                            >
                              Send message
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div>
                      <div className="uk-card uk-card-small uk-card-large@m">
                        <div className="uk-grid uk-child-width-1-2@m" data-uk-grid="">
                          <div className="uk-panel">
                            <img
                              className="uk-hidden dark:uk-visible"
                              width="195"
                              src="../assets/images/light-large.png"
                              alt="benMoussa"
                            />
                            <img
                              className="uk-visible dark:uk-hidden"
                              width="195"
                              src="../assets/images/dark-large.png"
                              alt="benMoussa"
                            />

                            <p>
                              We only have one chance to make a first impression, let's make it an
                              amazing one.
                            </p>
                          </div>
                          <div className="uk-panel">
                            <ul className="uk-list">
                              <li>
                                <h2 className="uk-h5 uk-h4@m">Ghaieth BEN MOUSSA</h2>
                              </li>
                              <li>
                                <a href="tel:0021696314176" className="uk-link-reset">
                                  +1 (505) 302 1977
                                </a>
                              </li>
                              <li>
                                <a
                                  href="mailto:benmoussa@thechaingenius.com"
                                  className="uk-link-reset"
                                >
                                  benmoussa@thechaingenius.com
                                </a>
                              </li>
                              <li>2105 Vista Oeste NW, Suite E #2091 Albuquerque, NM 87120</li>
                            </ul>
                            <ul className="uk-subnav uk-subnav-small uk-margin-top uk-text-gray-70 dark:uk-text-gray-40">
                              <li>
                                <a
                                  aria-label="linkedin"
                                  href="https://www.linkedin.com/in/ghaiethbenmoussa/"
                                  target="_blank"
                                >
                                  <i className="uk-icon uk-icon-small unicon-logo-linkedin"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  aria-label="github"
                                  href="https://github.com/benmoussa96"
                                  target="_blank"
                                >
                                  <i className="uk-icon uk-icon-small unicon-logo-github"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  aria-label="instagram"
                                  href="https://www.instagram.com/thechaingenius/"
                                  target="_blank"
                                >
                                  <i className="uk-icon uk-icon-small unicon-logo-instagram"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  aria-label="medium"
                                  href="https://thechaingenius.medium.com"
                                  target="_blank"
                                >
                                  <i className="uk-icon uk-icon-small unicon-logo-medium"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  aria-label="discord"
                                  href="https://discordapp.com/users/1069635708140142592"
                                  target="_blank"
                                >
                                  <i className="uk-icon uk-icon-small unicon-logo-discord"></i>
                                </a>
                              </li>
                            </ul>
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

export default Contact;
