import React from "react";
import Image from "next/image";

import { expertise } from "@/constants";

const Expertise = () => {
  return (
    <div
      id="expertise"
      className="uni-whyus uk-section uk-section-xlarge@m uk-panel uk-overflow-hidden"
    >
      <div className="uk-container">
        <header
          className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-text-center uk-child-width-auto@m uk-grid"
          data-uk-grid=""
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="uk-panel">
            <h2 className="uk-h3 uk-h2@s uk-heading-d2@m uk-text-uppercase">Expertise</h2>
          </div>
        </header>
        <div className="uk-panel uk-margin-medium-top uk-margin-2xlarge-top@m">
          <img
            className="uk-position-top-left uk-text-secondary"
            width="16"
            src="../assets/images/objects/circle-01.png"
            alt="Object"
            style={{ top: "-16%", left: "8%" }}
          />
          <img
            className="uk-position-bottom-right uk-text-primary"
            width="24"
            src="../assets/images/objects/circle-02.png"
            alt="Object"
            style={{ bottom: "16%", right: "-8%" }}
          />
          <img
            className="uk-position-bottom-left uk-text-muted"
            width="28"
            src="../assets/images/objects/x.png"
            alt="Object"
            style={{ bottom: "16%", left: "-8%" }}
          />
          <div className="uk-grid uk-child-width-1-4@s" data-uk-grid="masonry: true;">
            {expertise.map((exp) => (
              <div key={exp.id} className={Number(exp.id) % 2 === 0 ? "uk-margin-large-top@m" : ""}>
                <div>
                  <div className="uni-phase uk-panel uk-overflow-hidden uk-card uk-card-small uk-card-medium@m uk-radius uk-radius-xlarge@m uk-box-shadow-xsmall dark:uk-background-white-5">
                    <div className="uk-panel">
                      <span className="uni-phase-count uk-text-overline uk-text-gradient">
                        {exp.level}
                      </span>
                      <h3 className="uni-phase-title uk-h4 uk-h3@m uk-margin-remove-bottom">
                        {exp.name}
                      </h3>
                      <p className="uni-phase-description uk-text-large@m">{exp.description}</p>
                      <hr className="uk-width-2xsmall uk-margin-medium@m" />
                      <ul className="uk-list uk-text-small uk-text-medium@m">
                        {exp.skills.map((skill) => (
                          <li key={exp.id + skill} className="uk-flex-middle">
                            <i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i>{" "}
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    // <div
    //   id="expertise"
    //   className="uni-roadmap uk-section uk-section-large@m uk-padding-3xlarge-bottom@m uk-panel uk-overflow-hidden swiper-parent"
    // >
    //   <div className="uk-container">
    //     <header
    //       className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-text-center uk-child-width-auto@m uk-grid"
    //       data-uk-grid=""
    //       data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
    //     >
    //       <div className="uk-panel">
    //         <h2 className="uk-h3 uk-h2@s uk-heading-d2@m uk-text-uppercase">Expertise</h2>
    //       </div>
    //     </header>
    //     <div
    //       className="uk-panel uk-width-medium uk-margin-auto uk-margin-medium-top uk-margin-2xlarge-top@m"
    //       data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;"
    //     >
    //       <div
    //         className="swiper swiper-match uk-overflow-unset"
    //         data-swiper="gap: 16; dots-type: progressbar;"
    //         data-swiper-m="gap: 32;"
    //       >
    //         <div
    //           className="swiper-wrapper uk-grid-match uk-flex-middle"
    //           data-anime="targets: > * > *; opacity:[0, 1]; scale:[0.5, 1]; onview: -400; delay: anime.stagger(200);"
    //         >
    //           {expertise.map((exp) => (
    //             <div className="swiper-slide" key={exp.id}>
    //               <div>
    //                 <div className="uni-phase uk-panel uk-overflow-hidden uk-card uk-card-small uk-card-medium@m uk-radius uk-radius-xlarge@m uk-box-shadow-xsmall dark:uk-background-white-5">
    //                   <div className="uk-panel">
    //                     <span className="uni-phase-count uk-text-overline uk-text-gradient">
    //                       {exp.level}
    //                     </span>
    //                     <h3 className="uni-phase-title uk-h4 uk-h3@m uk-margin-remove-bottom">
    //                       {exp.name}
    //                     </h3>
    //                     <p className="uni-phase-description uk-text-large@m">{exp.description}</p>
    //                     <hr className="uk-width-2xsmall uk-margin-medium@m" />
    //                     <ul className="uk-list uk-text-small uk-text-medium@m">
    //                       {exp.skills.map((skill) => (
    //                         <li key={exp.id + skill} className="uk-flex-middle">
    //                           <i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i>{" "}
    //                           {skill}
    //                         </li>
    //                       ))}
    //                     </ul>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           ))}
    //         </div>

    //         {/* <!-- Pagination --> */}
    //         <div className="swiper-pagination swiper-pagination-progressbar swiper-pagination-horizontal swiper-dotnav"></div>
    //       </div>

    //       {/* <!-- Navigation --> */}
    //       <a
    //         aria-label="Next"
    //         href="#next"
    //         className="swiper-next uk-button uk-button-small uk-button-icon uk-border uk-radius-circle uk-position-center-right uk-position-z-index uk-box-shadow-small dark:uk-background-gray-100"
    //       >
    //         <i className="uk-icon-small" data-feather="chevron-right"></i>
    //       </a>
    //       <a
    //         aria-label="Prev"
    //         href="#prev"
    //         className="swiper-prev uk-button uk-button-small uk-button-icon uk-border uk-radius-circle uk-position-center-left uk-position-z-index uk-box-shadow-small dark:uk-background-gray-100"
    //       >
    //         <i className="uk-icon-small" data-feather="chevron-left"></i>
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Expertise;
