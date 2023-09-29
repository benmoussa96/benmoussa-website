import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  const service_id = process.env.EMAILJS_SERVICE_ID;
  const template_id = process.env.EMAILJS_TEMPLATE_ID;
  const user_id = process.env.EMAILJS_PUBLIC_KEY;

  // const [fromName, setFromName] = useState("");
  // const [fromEmail, setFromEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const handleSendMessage = (event: any) => {
    event.preventDefault();
    console.log("formData:", formData);
    // const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     service_id,
    //     template_id,
    //     user_id,
    //     template_params: formData,
    //   }),
    // });

    // const resBody = await res.json();

    // if (res.status == 200) {
    //   console.log("E-mail sent successfuly:", resBody.status);
    // } else {
    //   console.log("Error sending e-mail:", resBody.status);
    // }
  };

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
                          onSubmit={handleSendMessage}
                          action="#"
                          className="uk-grid uk-grid-xsmall uk-child-width-1-1"
                          data-uk-grid=""
                        >
                          <div className="uk-width-1-2@m">
                            <div className="uk-form-controls">
                              <input
                                className="uk-input uk-form-medium uk-text-bold"
                                aria-label="from_name"
                                type="text"
                                placeholder="Your name"
                                value={formData.from_name}
                                onChange={(e) => {
                                  console.log(e.target.value);
                                  setFormData({ ...formData, from_name: e.target.value });
                                }}
                              />
                            </div>
                          </div>
                          <div className="uk-width-1-2@m">
                            <div className="uk-form-controls">
                              <input
                                className="uk-input uk-form-medium uk-text-bold"
                                aria-label="from_email"
                                type="email"
                                placeholder="Your email"
                                value={formData.from_email}
                                onChange={(e) =>
                                  setFormData({ ...formData, from_email: e.target.value })
                                }
                              />
                            </div>
                          </div>
                          <div className="uk-form-controls">
                            <input
                              className="uk-input uk-form-medium uk-text-bold"
                              aria-label="subject"
                              type="text"
                              placeholder="Subject"
                              value={formData.subject}
                              onChange={(e) =>
                                setFormData({ ...formData, subject: e.target.value })
                              }
                            />
                          </div>
                          <div className="uk-form-controls">
                            <textarea
                              className="uk-textarea uk-padding uk-height-xsmall uk-radius-large uk-text-bold"
                              aria-label="message"
                              rows={5}
                              placeholder="Type your message"
                              value={formData.message}
                              onChange={(e) =>
                                setFormData({ ...formData, message: e.target.value })
                              }
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
                            <ul className="uk-list">
                              <li>
                                <h2 className="uk-h5 uk-h4@m">Ghaieth BEN MOUSSA</h2>
                              </li>
                              <li>
                                <a
                                  href="mailto:benmoussa@thechaingenius.com"
                                  className="uk-link-reset"
                                >
                                  benmoussa@thechaingenius.com
                                </a>
                              </li>
                              <li>
                                <a href="tel:0021696314176" className="uk-link-reset">
                                  +1 (505) 302 1977
                                </a>
                              </li>
                              <li>2105 Vista Oeste NW, Suite E #2091 Albuquerque, NM 87120</li>
                            </ul>
                          </div>
                          <div className="uk-panel">
                            <Image
                              className="uk-hidden dark:uk-visible"
                              width="1416"
                              height="410"
                              src="/assets/images/light-large.png"
                              alt="benMoussa"
                              style={{ height: "51px", width: "178px" }}
                            />
                            <Image
                              className="uk-visible dark:uk-hidden"
                              width="1416"
                              height="410"
                              src="/assets/images/dark-large.png"
                              alt="benMoussa"
                              style={{ height: "51px", width: "178px" }}
                            />

                            <p>
                              We only have one chance to make a first impression, let&#39;s make it
                              an amazing one.
                            </p>

                            <ul className="uk-subnav uk-subnav-small uk-text-gray-70 dark:uk-text-gray-40">
                              <li>
                                <a href="mailto:benmoussa@thechaingenius.com">
                                  <i className="uk-icon uk-icon-small material-icons">mail</i>
                                </a>
                              </li>
                              <li>
                                <a
                                  aria-label="linkedin"
                                  href="https://www.linkedin.com/in/ghaiethbenmoussa/"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <i className="uk-icon uk-icon-small unicon-logo-linkedin"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  aria-label="github"
                                  href="https://github.com/benmoussa96"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <i className="uk-icon uk-icon-small unicon-logo-github"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  aria-label="medium"
                                  href="https://thechaingenius.medium.com"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <i className="uk-icon uk-icon-small unicon-logo-medium"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  aria-label="instagram"
                                  href="https://www.instagram.com/thechaingenius/"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <i className="uk-icon uk-icon-small unicon-logo-instagram"></i>
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
