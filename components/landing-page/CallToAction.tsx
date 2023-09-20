import React from "react";

const CallToAction = () => {
  return (
    <div id="cta" className="uni-cta uk-section uk-section-2xlarge@m uk-panel uk-overflow-hidden">
      <img
        className="uk-cover uk-opacity-10"
        data-uk-cover
        src="../assets/images/collection-cta.png"
        alt="arrow"
      />
      <div className="uk-container">
        <div className="uk-card uk-flex-center uk-text-center">
          <div
            className="uk-panel uk-width-xlarge@m uk-position-z-index"
            data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
          >
            <img
              className="uk-position-top-left uni-animation-bounce"
              width="24"
              src="../assets/images/objects/circle-01.png"
              alt="Object"
              style={{ top: "0%", left: "-16%" }}
            />
            <img
              className="uk-position-bottom-right uni-animation-bounce"
              width="24"
              src="../assets/images/objects/x.png"
              alt="Object"
              style={{ bottom: "16%", right: "-8%" }}
            />
            <img
              className="uk-position-top-right uni-animation-bounce"
              width="40"
              src="../assets/images/objects/ethereum-02.png"
              alt="Object"
              style={{ top: "0%", right: "-16%" }}
            />
            <img
              className="uk-position-bottom-left uni-animation-bounce"
              width="48"
              src="../assets/images/objects/bitcoin-01.png"
              alt="Object"
              style={{ bottom: "16%", left: "-8%" }}
            />
            <h2 className="uk-h3 uk-heading-d1@m">
              We should <span className="uk-text-gradient">chat</span>
            </h2>
            <a
              href="#uni_contact"
              className="uk-button uk-button-small uk-button-large@m uk-button-gradient uk-margin-small-top uk-margin-large-top@m"
              data-uk-toggle=""
            >
              Schedual a Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
