import React from "react";
import Link from "next/link";
import { work } from "@/constants";

const Work = () => {
  const imagesPath = "../assets/images/clients/";

  return (
    <div
      id="work"
      className="uni-collections uk-section uk-section-large@m uk-panel uk-overflow-hidden"
    >
      <div className="uk-container">
        <header
          className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-text-center uk-child-width-auto@m uk-grid"
          data-uk-grid
          data-anime="opacity:[0, 1]; translateY:[-24, 0]; onview: true; delay: 200;"
        >
          <div className="uk-panel">
            <h2 className="uk-h3 uk-h2@s uk-heading-d2@m uk-text-uppercase">
              Previous <br />
              <span className="uk-text-gradient">Work</span>
            </h2>
          </div>
        </header>
        <div className="uk-panel uk-margin-medium-top uk-margin-2xlarge-top@m">
          <div
            className="uk-grid uk-grid-small@m uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m"
            data-uk-grid=""
            data-anime="targets: > * > *; opacity:[0, 1]; translateY:[48, 0]; onview: -400; delay: anime.stagger(200);"
          >
            {work.map((project) => (
              <div key={project.id}>
                <div className="uk-card uk-card-small uk-radius uk-radius-large@m uk-border uk-box-shadow-xsmall dark:uk-background-gray-90">
                  <div className="uk-panel">
                    <div
                      className="uk-grid uk-grid-xsmall uk-flex-between uk-flex-middle"
                      data-uk-grid=""
                    >
                      <div className="uk-width-1-4">
                        <div className="uk-panel">
                          <canvas width="100" height="100"></canvas>
                          <img
                            src={imagesPath + project.icon}
                            alt="Artwork"
                            className="uk-radius-2xlarge uk-cover"
                            data-uk-cover=""
                          />
                          <Link href={project.website} className="uk-position-cover"></Link>
                        </div>
                      </div>
                      <div className="uk-width-expand">
                        <h5 className="uk-h6 uk-h5@m uk-margin-remove">
                          <Link href={`/projects/${project.id}`} className="uk-link-reset">
                            {project.name}
                          </Link>
                        </h5>
                        <Link
                          href={project.website}
                          target="_blank"
                          rel="noreferrer"
                          style={{ textDecoration: "none" }}
                        >
                          <span className="uk-text-small">@{project.company}</span>
                        </Link>
                      </div>
                    </div>
                    <div className="uk-panel uk-margin-medium-top">
                      <div
                        className="uk-grid uk-grid-xsmall uk-child-width-1-2 uk-grid-match"
                        data-uk-grid=""
                      >
                        <div>
                          <div className="uk-panel uk-overflow-hidden uk-radius-small">
                            <canvas width="400" height="350"></canvas>
                            <img
                              src={imagesPath + project.image1}
                              alt="Artwork"
                              className="uk-cover"
                              data-uk-cover=""
                            />
                            <Link
                              href={`/projects/${project.id}`}
                              className="uk-position-cover"
                            ></Link>
                          </div>
                        </div>
                        <div>
                          <div className="uk-panel">
                            <div className="uk-grid uk-grid-xsmall" data-uk-grid="">
                              <div>
                                <div className="uk-panel uk-overflow-hidden uk-radius-small">
                                  <canvas width="150" height="120"></canvas>
                                  <img
                                    src={imagesPath + project.image2}
                                    alt="Artwork"
                                    className="uk-cover"
                                    data-uk-cover=""
                                  />
                                  <Link
                                    href={`/projects/${project.id}`}
                                    className="uk-position-cover"
                                  ></Link>
                                </div>
                              </div>
                              <div>
                                <div className="uk-panel uk-overflow-hidden uk-radius-small">
                                  <canvas width="150" height="120"></canvas>
                                  <img
                                    src={imagesPath + project.image3}
                                    alt="Artwork"
                                    className="uk-cover"
                                    data-uk-cover=""
                                  />
                                  <Link
                                    href={`/projects/${project.id}`}
                                    className="uk-position-cover"
                                  ></Link>
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
            ))}
          </div>
          <div
            className="uni-btn uk-margin-medium-top uk-margin-2xlarge-top@m uk-flex-center"
            data-anime="opacity:[0, 1]; translateY:[-24, 0]; onview: true; delay: 200;"
          >
            <Link
              href="/projects"
              className="uk-button uk-button-small uk-button-large@m uk-button-gradient"
            >
              <span>More projects</span>
              <i className="uk-icon-small unicon-arrow-right uk-text-bold"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
