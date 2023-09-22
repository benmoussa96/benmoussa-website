import React from "react";
import Image from "next/image";

import { testimonials } from "@/constants";

const Testimonials = () => {
  const imagesPath = "../assets/images/";

  return (
    <div id="testimonials" className="uni-minting uk-section uk-section-xlarge@m uk-panel">
      <div className="uk-container uk-container-small">
        <header
          className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-grid"
          data-uk-grid
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;"
        >
          <div className="uk-panel uk-text-center">
            <h2 className="uk-h3 uk-h1@m">Testimonials</h2>
          </div>
        </header>
        <div
          className="uk-panel uk-margin-medium-top uk-margin-2xlarge-top@m"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 300;"
        >
          <img
            className="uk-position-top-left uk-text-secondary uni-animation-bounce"
            width="16"
            src="../assets/images/objects/circle-01.png"
            alt="Object"
            style={{ top: "-16%", left: "8%" }}
          />
          <img
            className="uk-position-bottom-right uk-text-primary uni-animation-bounce"
            width="24"
            src="../assets/images/objects/circle-02.png"
            alt="Object"
            style={{ bottom: "16%", right: "-8%" }}
          />
          <img
            className="uk-position-bottom-left uk-text-muted uni-animation-bounce"
            width="28"
            src="../assets/images/objects/x.png"
            alt="Object"
            style={{ bottom: "16%", left: "-8%" }}
          />
          <div
            className="uk-grid uk-child-width-1-2@s uk-grid-match"
            data-uk-grid=""
            data-anime="targets: > *; opacity:[0, 1]; translateY:[24, 0]; onview: -250; delay: anime.stagger(100);"
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id}>
                <div className="uk-panel uk-card uk-card-small uk-padding-large-horizontal uk-radius-medium uk-radius-large@m uk-box-shadow-xsmall dark:uk-background-white-5">
                  <div className="uk-grid uk-grid-medium@m" data-uk-grid="">
                    <div className="uk-width-1-3 uk-width-1-4@m">
                      <img src={imagesPath + testimonial.image} alt="Icon" />
                    </div>
                    <div className="uk-panel uk-width-expand">
                      <h3 className="uk-h5 uk-h4@m">{testimonial.name}</h3>
                      <p>{testimonial.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
