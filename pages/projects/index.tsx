import React, { useEffect, useState } from "react";
import { work } from "@/constants";
import Link from "next/link";

interface IProject {
  id: string;
  name: string;
  company: string;
  website: string;
  icon: string;
  image1: string;
  image2: string;
  image3: string;
  date: string;
  category: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

const Projects = () => {
  const imagesPath = "../assets/images/clients/";
  const [featuredProject, setFeaturedProject] = useState<IProject | undefined>(undefined);
  const [otherProjects, setOtherProjects] = useState<IProject[] | undefined>(undefined);

  useEffect(() => {
    const featured = work.find((project) => project.featured);
    setFeaturedProject(featured);
    const other = work.filter((project) => !project.featured);
    setOtherProjects(other);
  }, []);

  return (
    <div className="uni-blog uk-section uk-section-large@m uk-panel uk-overflow-hidden uk-border-top">
      <header className="uni-page-header">
        <div className="uk-container">
          <h1 className="heading uk-h3 uk-h1@m uk-text-center">Previous Work</h1>
        </div>
      </header>
      <div className="uk-margin-top uk-margin-large-top@m">
        <div className="uk-container">
          <div
            id="blog-list-container"
            className="uk-grid uk-grid-row-large@m uk-grid-match"
            data-uk-grid
          >
            <div className="uk-width-1-1">
              <article className="post featured-post uk-card">
                <div className="uk-grid uk-grid-match uk-flex-between" data-uk-grid>
                  <div className="uk-width-8-12@m">
                    <div className="featured-image uk-card-media-left uk-panel uk-overflow-hidden uk-radius">
                      <canvas width="825" height="480"></canvas>
                      <img
                        src={imagesPath + featuredProject?.image2}
                        alt={featuredProject?.name}
                        className="uk-cover"
                        data-uk-cover
                        loading="lazy"
                      />{" "}
                      <a
                        aria-label={featuredProject?.name}
                        href={`/projects/${featuredProject?.id}`}
                        className="uk-position-cover"
                      ></a>
                    </div>
                  </div>
                  <div className="uk-width-4-12@m">
                    <div className="uk-flex-column uk-flex-between">
                      <div className="uk-panel">
                        <ul className="uk-subnav uk-subnav-small uk-subnav-dot uk-text-small uk-text-muted">
                          <li>
                            <a
                              className="uk-text-bold uk-text-primary uk-text-capitalize"
                              href="/projects"
                            >
                              {featuredProject?.category}
                            </a>
                          </li>
                          <li>
                            <span>{featuredProject?.date}</span>
                          </li>
                        </ul>
                        <h2 className="uk-h4 uk-h3@m">
                          <a className="uk-link-reset" href={`/projects/${featuredProject?.id}`}>
                            {featuredProject?.name}
                          </a>
                        </h2>
                        <p className="uk-margin-remove-top uk-text-muted">
                          {featuredProject?.description}
                        </p>
                      </div>
                      <div
                        className="uk-grid-xsmall uk-flex-middle uk-margin-top uk-grid uk-visible@m"
                        data-uk-grid
                      >
                        <div className="uk-width-auto">
                          <div className="uk-panel uk-overflow-hidden uk-border-circle">
                            <canvas width="48" height="48"></canvas>
                            <img
                              src="../assets/images/artwork/IMG_3033.png"
                              alt="Ghaieth BEN MOUSSA"
                              className="uk-cover"
                              data-uk-cover
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="uk-width-expand">
                          <div className="uk-panel">
                            <h4 className="uk-h6 uk-margin-remove">
                              <a href="/">Ghaieth BEN MOUSSA</a>
                            </h4>
                            <p className="uk-text-meta dark:uk-text-gray-60 uk-margin-remove">
                              Lead Blockchain Engineer
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {otherProjects?.map((project) => (
              <div className="uk-width-1-3@m" key={project.id}>
                <article className="post featured-post uk-card">
                  <div className="featured-image uk-panel uk-overflow-hidden uk-radius">
                    <canvas width="460" height="300"></canvas>
                    <img
                      src={imagesPath + project?.image1}
                      alt={project.name}
                      className="uk-cover"
                      data-uk-cover
                      loading="lazy"
                    />{" "}
                    <a
                      aria-label={project.name}
                      href={`/projects/${project?.id}`}
                      className="uk-position-cover"
                    ></a>
                  </div>
                  <div className="uk-panel uk-padding-top">
                    <ul className="uk-subnav uk-subnav-small uk-subnav-dot uk-text-small uk-text-muted dark:uk-text-gray-40">
                      <li>
                        <a
                          className="uk-text-bold uk-text-primary uk-text-capitalize"
                          href="/projects"
                        >
                          {project.category}
                        </a>
                      </li>
                      <li>
                        <span>{project.date}</span>
                      </li>
                    </ul>
                    <h2 className="uk-h5 uk-h4@m">
                      <a className="uk-link-reset" href={`/projects/${project?.id}`}>
                        {project.name}
                      </a>
                    </h2>
                    <p className="uk-margin-remove-top uk-text-muted">{project.description}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* <div className="uni-btn uk-margin-large-top uk-margin-xlarge-top@m uk-flex-center">
            <button
              className="uk-button uk-button-small uk-button-medium@m uk-button-default uk-button-outline uk-width-medium@m"
              type="button"
              data-load-more-container="#blog-list-container"
              data-load-more="blog-ajax.html?page=%page%"
              data-toggle-loading
            >
              <span className="no-more-loading">No more posts</span>
              <span className="not-loading">Load more posts</span>
              <span className="loading uk-margin-remove uk-flex-middle">
                <span
                  className="uk-flex-middle uk-margin-2xsmall-right"
                  data-uk-spinner="ratio: .5"
                ></span>
                Loading...
              </span>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
