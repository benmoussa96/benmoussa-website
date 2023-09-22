(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./public/assets/scss/theme/main.scss
var main = __webpack_require__(1126);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/DarkModeToggle.tsx




const DarkModeToggle = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "darkmode-trigger uk-position-bottom-right uk-position-small uk-position-fixed uk-box-shadow-large uk-radius-circle",
    "data-darkmode-toggle": "",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
      className: "switch",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "sr-only",
        children: "Dark mode toggle"
      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
        type: "checkbox"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "slider"
      })]
    })
  });
};

/* harmony default export */ const components_DarkModeToggle = (DarkModeToggle);
;// CONCATENATED MODULE: ./components/Contact.tsx




const Contact = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: "uni_contact",
    className: "uk-modal-full",
    "data-uk-modal": "",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "uk-modal-dialog",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "uk-position-top uk-position-z-index-negative",
        "data-uk-height-viewport": "",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "uk-position-cover uk-background-cover uk-opacity-10 dark:uk-hidden",
          "data-src": "../assets/images/gradient-01.png",
          "data-uk-img": ""
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "uk-position-cover uk-background-cover uk-opacity-20 uk-hidden dark:uk-visible",
          "data-src": "../assets/images/gradient-01.png",
          "data-uk-img": ""
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "uk-modal-close-full uk-close-large uk-position-small",
        type: "button",
        "data-uk-close": ""
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "uk-container",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "uk-grid uk-flex-center uk-flex-middle uk-section",
          "data-uk-grid": "",
          "data-uk-height-viewport": "",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("header", {
              className: "uni-page-header",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "uk-container",
                children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
                  className: "heading uk-h3 uk-h1@m uk-text-center",
                  children: "Contact Me"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "uk-margin-top uk-margin-large-top@m",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "uk-container uk-container-xsmall",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "uk-grid uk-child-width-1-1",
                  "data-uk-grid": "",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "uk-card uk-card-small uk-card-large@m uk-card-default uk-card-border uk-radius-medium uk-radius-large@m dark:uk-background-white-5",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
                        action: "?",
                        className: "uk-grid uk-grid-xsmall uk-child-width-1-1",
                        "data-uk-grid": "",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "uk-width-1-2@m",
                          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                            className: "uk-form-controls",
                            children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                              className: "uk-input uk-form-medium uk-text-bold",
                              type: "text",
                              placeholder: "Your name"
                            })
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "uk-width-1-2@m",
                          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                            className: "uk-form-controls",
                            children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                              className: "uk-input uk-form-medium uk-text-bold",
                              type: "email",
                              placeholder: "Your email"
                            })
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "uk-form-controls",
                          children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                            className: "uk-input uk-form-medium uk-text-bold",
                            type: "text",
                            placeholder: "Subject"
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "uk-form-controls",
                          children: /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                            className: "uk-textarea uk-padding uk-height-xsmall uk-radius-large uk-text-bold",
                            rows: 5,
                            placeholder: "Type your message"
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "uk-form-controls uk-flex-center",
                          children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                            type: "submit",
                            className: "uk-button uk-button-primary uk-width-small@m uk-margin-auto",
                            children: "Send message"
                          })
                        })]
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "uk-card uk-card-small uk-card-large@m",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "uk-grid uk-child-width-1-2@m",
                        "data-uk-grid": "",
                        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                          className: "uk-panel",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                            className: "uk-hidden dark:uk-visible",
                            width: "195",
                            src: "../assets/images/light-large.png",
                            alt: "benMoussa"
                          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                            className: "uk-visible dark:uk-hidden",
                            width: "195",
                            src: "../assets/images/dark-large.png",
                            alt: "benMoussa"
                          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                            children: "We only have one chance to make a first impression, let's make it an amazing one."
                          })]
                        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                          className: "uk-panel",
                          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                            className: "uk-list",
                            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                              children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
                                className: "uk-h5 uk-h4@m",
                                children: "Ghaieth BEN MOUSSA"
                              })
                            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                                href: "tel:0021696314176",
                                className: "uk-link-reset",
                                children: "+1 (505) 302 1977"
                              })
                            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                                href: "mailto:benmoussa@thechaingenius.com",
                                className: "uk-link-reset",
                                children: "benmoussa@thechaingenius.com"
                              })
                            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                              children: "2105 Vista Oeste NW, Suite E #2091 Albuquerque, NM 87120"
                            })]
                          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                            className: "uk-subnav uk-subnav-small uk-margin-top uk-text-gray-70 dark:uk-text-gray-40",
                            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                                "aria-label": "linkedin",
                                href: "https://www.linkedin.com/in/ghaiethbenmoussa/",
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                                  className: "uk-icon uk-icon-small unicon-logo-linkedin"
                                })
                              })
                            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                                "aria-label": "github",
                                href: "https://github.com/benmoussa96",
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                                  className: "uk-icon uk-icon-small unicon-logo-github"
                                })
                              })
                            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                                "aria-label": "instagram",
                                href: "https://www.instagram.com/thechaingenius/",
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                                  className: "uk-icon uk-icon-small unicon-logo-instagram"
                                })
                              })
                            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                                "aria-label": "medium",
                                href: "https://thechaingenius.medium.com",
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                                  className: "uk-icon uk-icon-small unicon-logo-medium"
                                })
                              })
                            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                                "aria-label": "discord",
                                href: "https://discordapp.com/users/1069635708140142592",
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                                  className: "uk-icon uk-icon-small unicon-logo-discord"
                                })
                              })
                            })]
                          })]
                        })]
                      })
                    })
                  })]
                })
              })
            })]
          })
        })
      })]
    })
  });
};

/* harmony default export */ const components_Contact = (Contact);
;// CONCATENATED MODULE: ./components/MenuMobile.tsx




const MenuMobile = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: "uni_mobile_menu",
    className: "uni-mobile-menu uk-offcanvas",
    "data-uk-offcanvas": "mode: push; overlay: true; flip: true; selPanel: .uk-offcanvas-bar-panel;",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "uk-offcanvas-bar-panel uk-panel dark:uk-background-gray-100",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "uni-mobile-menu-wrap uk-flex-column uk-flex-between",
        "data-uk-height-viewport": "offset-bottom: true;",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "uni-mobile-menu-content",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
            className: "uk-card uk-card-2xsmall uk-flex-middle uk-flex-between",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "uk-flex-1",
              children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                "aria-label": "Close Menu",
                className: "uk-offcanvas-close uk-button uk-button-small uk-button-icon uk-button-default uk-button-outline uk-radius-circle",
                type: "button",
                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "uk-icon-small",
                  "data-feather": "arrow-left"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx("h5", {
                className: "uk-h5 uk-text-uppercase uk-margin-remove",
                children: "Navigation"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "uk-flex-1"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("hr", {
            className: "uk-margin-remove"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "uk-card uk-card-small",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "uk-panel",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "uk-nav uk-nav-default",
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "uk-nav-header",
                  children: "Homepages"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "landing-01.html",
                    children: "Landing 01"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "landing-02.html",
                    children: "Landing 02"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "landing-03.html",
                    children: "Landing 03"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "landing-04.html",
                    children: "Landing 04"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "landing-05.html",
                    children: "Landing 05"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "uk-nav-header",
                  children: "Inner pages"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "base.html",
                    children: "Base components"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "connect-wallet.html",
                    children: "Connect wallet"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "contact.html",
                    children: "Contact"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "404.html",
                    children: "404 page"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "coming-soon.html",
                    children: "Coming soon"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "uk-nav-header",
                  children: "Content & Privacy"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "terms.html",
                    children: "Terms of use"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "privact.html",
                    children: "Privacy Policy"
                  })
                })]
              })
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ const components_MenuMobile = (MenuMobile);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Menu.tsx





const Menu = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    id: "uni-header",
    className: "uni-header uk-position-top",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "uni-header-navbar",
      "data-uk-sticky": "top: 70; show-on-up: false; animation: uk-animation-slide-top",
      "data-anime": "opacity:[0, 1]; translateY:[-24, 0]; onview: true; delay: 0;",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "uk-container",
        children: /*#__PURE__*/jsx_runtime_.jsx("nav", {
          className: "uk-navbar uk-navbar-container uk-navbar-transparent",
          "data-uk-navbar": "",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "uk-navbar-top",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "uk-navbar-left",
              style: {
                width: "165px"
              },
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((link_default()), {
                className: "uk-logo uk-navbar-item uk-h4 uk-h3@m uk-margin-remove",
                href: "/",
                "data-uk-scroll": true,
                children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "uk-visible dark:uk-hidden",
                  width: "120",
                  src: "../assets/images/dark-large.png",
                  alt: "The Chain Genius",
                  loading: "lazy"
                }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "uk-hidden dark:uk-visible",
                  width: "120",
                  src: "../assets/images/light-large.png",
                  alt: "The Chain Genius",
                  loading: "lazy"
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "uk-navbar-right uk-flex-1 uk-flex-right",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "uk-navbar-nav dark:uk-text-gray-10 uk-visible@m",
                "data-uk-scrollspy-nav": "closest: li; scroll: true; offset: 80",
                "data-uk-navbar-bound": "",
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/#about_me",
                    "data-uk-scroll": true,
                    children: "About Me"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/#expertise",
                    "data-uk-scroll": true,
                    children: "Expertise"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/#work",
                    "data-uk-scroll": true,
                    children: "Previous Work"
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "uk-navbar-item",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  className: "uk-subnav uk-subnav-small uk-visible@m",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "https://www.linkedin.com/in/ghaiethbenmoussa/",
                      target: "_blank",
                      rel: "noreferrer",
                      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "uk-icon unicon-logo-linkedin"
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "https://github.com/benmoussa96",
                      target: "_blank",
                      rel: "noreferrer",
                      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "uk-icon unicon-logo-github"
                      })
                    })
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#uni_contact",
                  className: "uk-button uk-button-medium@m uk-button-default uk-button-outline uk-margin-left uk-visible@l",
                  "data-uk-toggle": "",
                  children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "Contact Me"
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "uk-navbar-item uk-hidden@m",
                children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#uni_connect_wallet",
                  className: "uk-button uk-button-medium@m uk-button-icon uk-hidden@m uk-margin-small-right",
                  "data-uk-toggle": "",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "uk-icon unicon-wallet"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#uni_mobile_menu",
                  "data-uk-toggle": "",
                  children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "uk-icon uk-icon-medium material-icons",
                    children: "menu"
                  })
                })]
              })]
            })]
          })
        })
      })
    })
  });
};

/* harmony default export */ const components_Menu = (Menu);
;// CONCATENATED MODULE: ./components/Footer.tsx





const Footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    className: "uni-footer uk-section uk-section-xlarge@m",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "uk-container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "uk-panel",
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          className: "uk-position-top-left uni-animation-bounce",
          width: "32",
          src: "../assets/images/objects/ethereum-01.png",
          alt: "object",
          style: {
            top: "32%",
            left: "16%"
          }
        }), /*#__PURE__*/jsx_runtime_.jsx("img", {
          className: "uk-position-top-right uni-animation-bounce",
          width: "16",
          src: "../assets/images/objects/x.png",
          alt: "object",
          style: {
            top: "8%",
            right: "16%"
          }
        }), /*#__PURE__*/jsx_runtime_.jsx("img", {
          className: "uk-position-bottom-right uni-animation-bounce",
          width: "16",
          src: "../assets/images/objects/circle-01.png",
          alt: "object",
          style: {
            bottom: "24%",
            right: "40%"
          }
        }), /*#__PURE__*/jsx_runtime_.jsx("img", {
          className: "uk-position-bottom-left uni-animation-bounce",
          width: "24",
          src: "../assets/images/objects/circle-03.png",
          alt: "object",
          style: {
            bottom: "-8%",
            left: "30%"
          }
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "uk-grid uk-flex-center uk-text-center",
          "data-uk-grid": true,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "uk-width-xlarge@m",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "uk-panel",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                href: "#",
                className: "uk-logo",
                "data-uk-scroll": true,
                children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "uk-hidden dark:uk-visible",
                  width: "70",
                  src: "../assets/images/light-medium-2.png",
                  alt: "benMoussa"
                }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "uk-visible dark:uk-hidden",
                  width: "70",
                  src: "../assets/images/dark-medium-2.png",
                  alt: "benMoussa"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                className: "uk-text-xlarge@m uk-margin-small-top@m",
                children: ["Great creators start with great taste. ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Intelligent people start with great intuition. ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Geniuses have both."]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "uk-subnav uk-subnav-small uk-flex-center uk-text-gray-40 uk-margin-top uk-margin-medium-top@m",
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    "aria-label": "linkedin",
                    href: "https://www.linkedin.com/in/ghaiethbenmoussa/",
                    target: "_blank",
                    rel: "noreferrer",
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "uk-icon uk-icon-medium@m unicon-logo-linkedin"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    "aria-label": "github",
                    href: "https://github.com/benmoussa96",
                    target: "_blank",
                    rel: "noreferrer",
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "uk-icon uk-icon-medium@m unicon-logo-github"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    "aria-label": "instagram",
                    href: "https://www.instagram.com/thechaingenius/",
                    target: "_blank",
                    rel: "noreferrer",
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "uk-icon uk-icon-medium@m unicon-logo-instagram"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    "aria-label": "medium",
                    href: "https://thechaingenius.medium.com",
                    target: "_blank",
                    rel: "noreferrer",
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "uk-icon uk-icon-medium@m unicon-logo-medium"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    "aria-label": "discord",
                    href: "https://discordapp.com/users/1069635708140142592",
                    target: "_blank",
                    rel: "noreferrer",
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "uk-icon uk-icon-medium@m unicon-logo-discord"
                    })
                  })
                })]
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("hr", {
          className: "uk-margin-medium uk-margin-3xlarge-top@m"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "uk-panel uk-text-small",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "uk-grid uk-child-width-auto@m uk-flex-center uk-flex-between@m uk-text-center uk-text-left@m",
            "data-uk-grid": true,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "uk-subnav uk-subnav-small uk-text-muted uk-flex-center",
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/privacy",
                    children: "Privacy policy"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/terms",
                    children: "Terms of use"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "uk-margin-small-left",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    "data-uk-totop": "",
                    "data-uk-scroll": true,
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "uk-icon uk-icon-small unicon-chevron-up"
                    })
                  })
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "uk-flex-first@m uk-flex-center",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                className: "uk-text-muted",
                children: ["Built with \u2764\uFE0F by The Chain Genius\xA9", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "2023 \u2022 All rights reserved"]
              })
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const components_Footer = (Footer);
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function App({
  Component,
  pageProps
}) {
  (0,external_react_.useEffect)(() => {
    document.getElementById("__next")?.classList.add("uni-body");
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_DarkModeToggle, {}), /*#__PURE__*/jsx_runtime_.jsx(components_MenuMobile, {}), /*#__PURE__*/jsx_runtime_.jsx(components_Contact, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "wrap",
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_Menu, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})]
  });
}

/***/ }),

/***/ 1126:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,922,664], () => (__webpack_exec__(5167)));
module.exports = __webpack_exports__;

})();