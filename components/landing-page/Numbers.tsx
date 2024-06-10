import React from "react";
import Image from "next/image";

const Numbers = () => {
  return (
    <div id="uni_numbers" className="uni-numbers uk-section uk-section-large@m">
      <div className="uk-container">
        <div className="uk-panel">
          <Image
            className="uk-position-bottom-left uk-text-secondary uni-animation-delay-large"
            width="32"
            height="32"
            src="/assets/images/objects/bitcoin-01.webp"
            alt="Object"
            style={{ bottom: "-32%", left: "30%" }}
            data-anime="opacity:[0, 1]; scale:[0, 1]; onview: -250; delay: 200;"
          />
          <Image
            className="uk-position-top-right"
            width="24"
            height="24"
            src="/assets/images/objects/ethereum-01.webp"
            alt="Object"
            style={{ top: "-25%", right: "25%" }}
            data-anime="opacity:[0, 1]; scale:[0, 1]; onview: -250; delay: 200;"
          />
          <div
            className="uk-grid uk-grid-large uk-grid-2xlarge@m uk-child-width-expand@m uk-text-center uk-text-muted"
            data-uk-grid=""
            data-anime="targets: > *; opacity:[0, 1]; scale:[0.5, 1]; onview: -250; delay: anime.stagger(100);"
          >
            <div>
              <div className="uk-panel">
                <h4 className="uk-h3 uk-heading-d3@m uk-text-gradient uk-margin-xsmall uk-margin@m">
                  20+
                </h4>
                <span>Satisfied Clients</span>
              </div>
            </div>
            <div>
              <div className="uk-panel">
                <h4 className="uk-h3 uk-heading-d3@m uk-text-gradient uk-margin-xsmall uk-margin@m">
                  10+
                </h4>
                <span>Expert in development frameworks</span>
              </div>
            </div>
            <div>
              <div className="uk-panel">
                <h4 className="uk-h3 uk-heading-d3@m uk-text-gradient uk-margin-xsmall uk-margin@m">
                  3M
                </h4>
                <span>Line of Code Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
