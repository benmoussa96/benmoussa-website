import React, { useEffect, useState } from "react";
import { work } from "@/constants";
import { useRouter } from "next/router";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Image from "next/image";

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
  subtitle: string;
  section1: string;
  section2: string;
  section3: string;
  tags: string[];
  featured?: boolean;
}

const Project = () => {
  const router = useRouter();

  const imagesPath = "../assets/images/clients/";
  const [project, setProject] = useState<IProject | undefined>(undefined);

  useEffect(() => {
    const { id } = router.query;
    const selectedProject = work.find((project) => project.id === id);
    setProject(selectedProject);
  }, []);

  return (
    project && (
      <article className="uk-article uk-section uk-section-xlarge@m uk-border-top">
        <div className="uk-container">
          <header className="entry-header uk-container uk-container-xsmall">
            <div className="uk-panel uk-text-center">
              <ul className="uk-subnav uk-subnav-small uk-subnav-dot uk-flex-center uk-text-medium uk-text-muted">
                <li>
                  <Link
                    className="uk-text-bold uk-text-primary uk-text-capitalize"
                    href="/projects"
                  >
                    {project?.category}
                  </Link>
                </li>
                <li>
                  <span>{project?.date}</span>
                </li>
              </ul>
              <h1 className="uk-h3 uk-h1@m uk-margin-medium-top@m">{project?.name}</h1>
              <p className="uk-text-lead uk-text-muted">{project?.subtitle}</p>
            </div>
          </header>

          <div className="entry-featured-image uk-panel uk-overflow-hidden uk-radius uk-margin uk-margin-xlarge@m">
            <canvas width="1200" height="600"></canvas>
            <div className="uk-cover uk-flex uk-flex-top" data-uk-cover>
              <img src={imagesPath + project?.image2} alt={project?.name} loading="lazy" />
            </div>
          </div>

          <div className="entry-content uk-container uk-container-xsmall">
            <div className="uk-panel uk-text-medium uk-text-xlarge@m">
              <div dangerouslySetInnerHTML={{ __html: project?.section1 }}></div>

              <figure className="uk-margin-large-top@m">
                <img
                  className="uk-radius"
                  src={imagesPath + project?.image3}
                  alt="Image caption"
                  loading="lazy"
                  style={{ verticalAlign: "top" }}
                />
                <figcaption className="uk-text-meta uk-text-right uk-margin-2xsmall-top">
                  Image copyright by @theChainGenius
                </figcaption>
              </figure>

              <div dangerouslySetInnerHTML={{ __html: project?.section2 }}></div>

              <figure className="uk-margin-large-top@m">
                <img
                  className="uk-radius"
                  src={imagesPath + project?.image1}
                  alt="Image caption"
                  loading="lazy"
                  style={{ verticalAlign: "top" }}
                />
                <figcaption className="uk-text-meta uk-text-right uk-margin-2xsmall-top">
                  Image copyright by @theChainGenius
                </figcaption>
              </figure>

              <div dangerouslySetInnerHTML={{ __html: project?.section3 }}></div>
            </div>
          </div>

          <footer className="entry-footer uk-container uk-container-xsmall uk-margin-large-top uk-margin-xlarge-top@m">
            <div className="uk-panel">
              <div
                className="uk-grid-small uk-grid-medium@m uk-child-width-1-1 uk-grid"
                data-uk-grid
              >
                <div>
                  <div
                    className="uk-grid-small uk-grid-medium@m uk-flex-middle uk-flex-center uk-flex-between@m uk-grid"
                    data-uk-grid
                  >
                    {project.tags.length > 0 && (
                      <div>
                        <ul className="entry-tags uk-subnav uk-subnav-small uk-text-bold uk-text-muted">
                          {project.tags.map((tag) => (
                            <li key={tag}>
                              <Link href="/projects">#{tag}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {/* <div>
                      <div className="uk-panel uk-flex-middle">
                        <Link
                          href="#add_like"
                          className="uk-button uk-button-small uk-button-danger uk-button-outline uk-button-icon uk-radius-circle"
                          data-toggle-active
                          data-not-active-className="uk-button-outline"
                          data-active-className=""
                          data-uk-tooltip="234 Likes"
                        >
                          <i className="uk-icon-xsmall material-icons not-active">
                            favorite_border
                          </i>
                          <i className="uk-icon-xsmall material-icons active">favorite</i>
                        </Link>
                        <Link
                          href="#share_this"
                          className="uk-button uk-button-small uk-button-icon uk-button-default uk-button-outline uk-radius-circle uk-margin-xsmall-left"
                          data-uk-toggle
                          data-uk-tooltip="Share this!"
                        >
                          <i className="uk-icon-xsmall material-icons">share</i>
                        </Link>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div>
                  <div className="uk-panel uk-card uk-card-small uk-radius-large uk-background-black-5 dark:uk-background-white-5">
                    <div
                      className="uk-grid uk-flex-middle uk-flex-center uk-flex-between@s"
                      data-uk-grid
                    >
                      <div>
                        <div className="entry-author uk-text-center uk-text-left@m">
                          <div
                            className="uk-grid-xsmall uk-flex-middle uk-flex-center uk-flex-between@s uk-grid"
                            data-uk-grid
                          >
                            <div className="uk-width-auto">
                              <div className="uk-panel uk-overflow-hidden uk-border-circle">
                                <canvas width="80" height="80"></canvas>
                                <Image
                                  src="/assets/images/artwork/IMG_3033.png"
                                  width="1169"
                                  height="1403"
                                  alt="Ghaieth BEN MOUSSA"
                                  className="uk-cover"
                                  data-uk-cover
                                  loading="lazy"
                                />{" "}
                                <Link
                                  href="/"
                                  className="uk-position-cover"
                                  aria-label="Ghaieth BEN MOUSSA"
                                ></Link>
                              </div>
                            </div>
                            <div className="uk-width-expand@s">
                              <div className="uk-panel">
                                <h4 className="uk-h6 uk-h5@m uk-margin-remove">
                                  <Link className="uk-link-reset" href="/">
                                    Ghaieth BEN MOUSSA
                                  </Link>
                                </h4>
                                <p className="uk-text-small uk-margin-2xsmall-top uk-text-muted">
                                  Lead Blockchain Engineer
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <ul className="entry-social-links uk-subnav uk-subnav-small">
                          <li>
                            <Link href="mailto:benmoussa@thechaingenius.com">
                              <i className="uk-icon-small material-icons">mail</i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              aria-label="linkedin"
                              href="https://www.linkedin.com/in/ghaiethbenmoussa/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="uk-icon uk-icon-small unicon-logo-linkedin"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              aria-label="github"
                              href="https://github.com/benmoussa96"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="uk-icon uk-icon-small unicon-logo-github"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              aria-label="medium"
                              href="https://thechaingenius.medium.com"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="uk-icon uk-icon-small unicon-logo-medium"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div>
                <div className="entry-comments">
                  <Link
                    href="#load_comments"
                    className="uk-button uk-button-large@m uk-button-default uk-button-outline uk-width-1-1"
                  >
                    <i className="material-icons uk-icon-small">chat_bubble_outline</i>
                    <span>Load comments</span>
                  </Link>
                </div>
              </div> */}
              </div>
            </div>
          </footer>
        </div>
      </article>
    )
  );
};

export const getStaticPaths = async () => {
  const paths = work.map((project) => {
    return {
      params: { id: project.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  return {
    props: {}, // will be passed to the page component as props
  };
};

export default Project;

// import React, { useEffect, useState } from "react";
// import { work } from "@/constants";
// import { useRouter } from "next/router";
// import { InferGetStaticPropsType } from "next";
// import Link from "next/link";
// import Image from "next/image";

// interface IProject {
//   id: string;
//   name: string;
//   company: string;
//   website: string;
//   icon: string;
//   image1: string;
//   image2: string;
//   image3: string;
//   date: string;
//   category: string;
//   description: string;
//   tags: string[];
//   featured?: boolean;
// }

// const Project = () => {
//   const router = useRouter();

//   const imagesPath = "../assets/images/clients/";
//   const [project, setProject] = useState<IProject | undefined>(undefined);

//   useEffect(() => {
//     const { id } = router.query;
//     const selectedProject = work.find((project) => project.id === id);
//     setProject(selectedProject);
//   }, []);

//   return (
//     project && (
//       <article className="uk-article uk-section uk-section-xlarge@m uk-border-top">
//         <div className="uk-container">
//           <header className="entry-header uk-container uk-container-xsmall">
//             <div className="uk-panel uk-text-center">
//               <ul className="uk-subnav uk-subnav-small uk-subnav-dot uk-flex-center uk-text-medium uk-text-muted">
//                 <li>
//                   <Link className="uk-text-bold uk-text-primary uk-text-capitalize" href="/projects">
//                     {project?.category}
//                   </Link>
//                 </li>
//                 <li>
//                   <span>{project?.date}</span>
//                 </li>
//               </ul>
//               <h1 className="uk-h3 uk-h1@m uk-margin-medium-top@m">{project?.name}</h1>
//               <p className="uk-text-lead uk-text-muted">
//                 Your home for all things GameFi, Kayros Exchange allows you to track, buy, sell,
//                 swap, and bridge digital assets all in one easy-to-use place.
//               </p>
//             </div>
//           </header>

//           <div className="entry-featured-image uk-panel uk-overflow-hidden uk-radius uk-margin uk-margin-xlarge@m">
//             <canvas width="1200" height="600"></canvas>
//             <div className="uk-cover uk-flex uk-flex-top" data-uk-cover>
//               <img src={imagesPath + project?.image2} alt={project?.name} loading="lazy" />
//             </div>
//           </div>

//           <div className="entry-content uk-container uk-container-xsmall">
//             <div className="uk-panel uk-text-medium uk-text-xlarge@m">
//               <p>
//                 MetaMask Portfolio is your one-stop shop for all things web3. Instead of connecting
//                 to multiple exchanges, dapps, and tools, you just need to connect to one simple dapp
//                 to fulfill all your web3 needs.
//                 <br />
//                 <br />
//                 MetaMask Portfolio provides a simple way to perform common tasks through features
//                 such as:
//               </p>
//               <ul className="uk-list uk-list-bullet uk-margin-medium@m">
//                 <li>Portfolio</li>
//                 <li>Buy/Withdraw</li>
//                 <li>P2P</li>
//                 <li>Swap</li>
//                 <li>Bridge</li>
//               </ul>
//               <h3 className="uk-h4 uk-h3@m uk-margin-large-top">
//                 Portfolio: track everything in one place
//               </h3>
//               <p>
//                 Repellendus quasi sapiente dolorem veniam corporis cumque laboriosam nisi eaque
//                 earum, soluta ex nemo rerum velit? Repellendus consequatur amet aliquam nesciunt
//                 nemo, deserunt facilis. Sapiente repellat dicta ipsam quas corporis ex illo
//                 repellendus provident.
//               </p>

//               <figure className="uk-margin-large-top@m">
//                 <img
//                   className="uk-radius"
//                   src={imagesPath + project?.image3}
//                   alt="Image caption"
//                   loading="lazy"
//                   style={{ verticalAlign: "top" }}
//                 />
//                 <figcaption className="uk-text-meta uk-text-right uk-margin-2xsmall-top">
//                   Image copyright by @theChainGenius
//                 </figcaption>
//               </figure>
//               <p>
//                 Sapiente dolorem veniam corporis cumque laboriosam nisi eaque earum, soluta ex nemo
//                 rerum velit? Repellendus consequatur amet aliquam nesciunt nemo, deserunt facilis.
//                 Sapiente repellat dicta ipsam quas corporis ex illo repellendus provident.
//               </p>
//               <h3 className="uk-h4 uk-h3@m uk-margin-large-top@m">A new Brand Book</h3>
//               <p>
//                 Ex illo laudantium perferendis nemo! Impedit a sit, repellendus quasi sapiente
//                 dolorem veniam corporis cumque laboriosam nisi eaque earum, soluta ex nemo rerum
//                 velit? Repellendus consequatur amet aliquam nesciunt nemo, deserunt facilis.
//                 Sapiente repellat dicta ipsam quas corporis ex illo repellendus provident.
//               </p>
//               <figure className="uk-margin-large-top@m">
//                 <img
//                   className="uk-radius"
//                   src={imagesPath + project?.image1}
//                   alt="Image caption"
//                   loading="lazy"
//                   style={{ verticalAlign: "top" }}
//                 />
//                 <figcaption className="uk-text-meta uk-text-right uk-margin-2xsmall-top">
//                   Image copyright by @theChainGenius
//                 </figcaption>
//               </figure>
//               <p>
//                 Repellendus quasi sapiente dolorem veniam corporis cumque laboriosam nisi eaque
//                 earum, soluta ex nemo rerum velit? Repellendus consequatur amet aliquam nesciunt
//                 nemo, deserunt facilis. Sapiente repellat dicta ipsam quas corporis ex illo
//                 repellendus provident.
//               </p>
//             </div>
//           </div>

//           <footer className="entry-footer uk-container uk-container-xsmall uk-margin-large-top uk-margin-xlarge-top@m">
//             <div className="uk-panel">
//               <div
//                 className="uk-grid-small uk-grid-medium@m uk-child-width-1-1 uk-grid"
//                 data-uk-grid
//               >
//                 <div>
//                   <div
//                     className="uk-grid-small uk-grid-medium@m uk-flex-middle uk-flex-center uk-flex-between@m uk-grid"
//                     data-uk-grid
//                   >
//                     {project.tags.length > 0 && (
//                       <div>
//                         <ul className="entry-tags uk-subnav uk-subnav-small uk-text-bold uk-text-muted">
//                           {project.tags.map((tag) => (
//                             <li key={tag}>
//                               <Link href="/projects">#{tag}</Link>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     )}
//                     {/* <div>
//                       <div className="uk-panel uk-flex-middle">
//                         <Link
//                           href="#add_like"
//                           className="uk-button uk-button-small uk-button-danger uk-button-outline uk-button-icon uk-radius-circle"
//                           data-toggle-active
//                           data-not-active-className="uk-button-outline"
//                           data-active-className=""
//                           data-uk-tooltip="234 Likes"
//                         >
//                           <i className="uk-icon-xsmall material-icons not-active">
//                             favorite_border
//                           </i>
//                           <i className="uk-icon-xsmall material-icons active">favorite</i>
//                         </Link>
//                         <Link
//                           href="#share_this"
//                           className="uk-button uk-button-small uk-button-icon uk-button-default uk-button-outline uk-radius-circle uk-margin-xsmall-left"
//                           data-uk-toggle
//                           data-uk-tooltip="Share this!"
//                         >
//                           <i className="uk-icon-xsmall material-icons">share</i>
//                         </Link>
//                       </div>
//                     </div> */}
//                   </div>
//                 </div>
//                 <div>
//                   <div className="uk-panel uk-card uk-card-small uk-radius-large uk-background-black-5 dark:uk-background-white-5">
//                     <div
//                       className="uk-grid uk-flex-middle uk-flex-center uk-flex-between@s"
//                       data-uk-grid
//                     >
//                       <div>
//                         <div className="entry-author uk-text-center uk-text-left@m">
//                           <div
//                             className="uk-grid-xsmall uk-flex-middle uk-flex-center uk-flex-between@s uk-grid"
//                             data-uk-grid
//                           >
//                             <div className="uk-width-auto">
//                               <div className="uk-panel uk-overflow-hidden uk-border-circle">
//                                 <canvas width="80" height="80"></canvas>
//                                 <Image
//                                   src="/assets/images/artwork/IMG_3033.png"
//                                   width="1169"
//                                   height="1403"
//                                   alt="Ghaieth BEN MOUSSA"
//                                   className="uk-cover"
//                                   data-uk-cover
//                                   loading="lazy"
//                                 />{" "}
//                                 <Link
//                                   href="/"
//                                   className="uk-position-cover"
//                                   aria-label="Ghaieth BEN MOUSSA"
//                                 ></Link>
//                               </div>
//                             </div>
//                             <div className="uk-width-expand@s">
//                               <div className="uk-panel">
//                                 <h4 className="uk-h6 uk-h5@m uk-margin-remove">
//                                   <Link className="uk-link-reset" href="/">
//                                     Ghaieth BEN MOUSSA
//                                   </Link>
//                                 </h4>
//                                 <p className="uk-text-small uk-margin-2xsmall-top uk-text-muted">
//                                   Lead Blockchain Engineer
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div>
//                         <ul className="entry-social-links uk-subnav uk-subnav-small">
//                           <li>
//                             <Link href="mailto:benmoussa@thechaingenius.com">
//                               <i className="uk-icon-small material-icons">mail</i>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               aria-label="linkedin"
//                               href="https://www.linkedin.com/in/ghaiethbenmoussa/"
//                               target="_blank"
//                               rel="noreferrer"
//                             >
//                               <i className="uk-icon uk-icon-small unicon-logo-linkedin"></i>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               aria-label="github"
//                               href="https://github.com/benmoussa96"
//                               target="_blank"
//                               rel="noreferrer"
//                             >
//                               <i className="uk-icon uk-icon-small unicon-logo-github"></i>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               aria-label="medium"
//                               href="https://thechaingenius.medium.com"
//                               target="_blank"
//                               rel="noreferrer"
//                             >
//                               <i className="uk-icon uk-icon-small unicon-logo-medium"></i>
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* <div>
//                 <div className="entry-comments">
//                   <Link
//                     href="#load_comments"
//                     className="uk-button uk-button-large@m uk-button-default uk-button-outline uk-width-1-1"
//                   >
//                     <i className="material-icons uk-icon-small">chat_bubble_outline</i>
//                     <span>Load comments</span>
//                   </Link>
//                 </div>
//               </div> */}
//               </div>
//             </div>
//           </footer>
//         </div>
//       </article>
//     )
//   );
// };

// export const getStaticPaths = async () => {
//   const paths = work.map((project) => {
//     return {
//       params: { id: project.id },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context: any) => {
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// };

// export default Project;
