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
                            <h2 className="uk-h5 uk-h4@m">BEN MOUSSA Ghaieth</h2>
                            <p>
                              You only have one chance to make a first impression, let's make it an
                              amazing one.
                            </p>
                          </div>
                          <div className="uk-panel">
                            <ul className="uk-list">
                              <li>
                                <a href="tel:0021696314176" className="uk-link-reset">
                                  +216 96 314 176
                                </a>
                              </li>
                              <li>
                                <a href="mailto:ghaiethbmoussa@gmail.com" className="uk-link-reset">
                                  ghaiethbmoussa@gmail.com
                                </a>
                              </li>
                              <li>Rue Lac Malaren, Les Berges du Lac, Tunis, Tunisia</li>
                            </ul>
                            <ul className="uk-subnav uk-subnav-small uk-margin-top uk-text-gray-70 dark:uk-text-gray-40">
                              <li>
                                <a
                                  aria-label="twitter"
                                  href="https://www.linkedin.com/in/ghaiethbenmoussa/"
                                  target="_blank"
                                >
                                  <i className="uk-icon-small brand-linkedin"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  aria-label="facebook"
                                  href="https://github.com/benmoussa96"
                                  target="_blank"
                                >
                                  <i className="uk-icon-small brand-github-circle"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  aria-label="snapchat"
                                  href="https://www.instagram.com/ben_mousssa/"
                                  target="_blank"
                                >
                                  <i className="uk-icon-small brand-instagram"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  aria-label="youtube-play"
                                  href="https://medium.com/@ghaiethbenemoussa"
                                  target="_blank"
                                >
                                  <i className="uk-icon-small unicon-logo-medium"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  aria-label="reddit-alien"
                                  href="https://discordapp.com/users/1069635708140142592"
                                  target="_blank"
                                >
                                  <i className="uk-icon-small unicon-logo-discord"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  aria-label="quora"
                                  href="https://soundcloud.com/bene-land"
                                  target="_blank"
                                >
                                  <i className="uk-icon-small brand-soundcloud"></i>
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
