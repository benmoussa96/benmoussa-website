import React from "react";

const DarkModeToggle = () => {
  return (
    <div
      className="darkmode-trigger uk-position-top-left uk-position-small uk-position-fixed uk-box-shadow-large uk-radius-circle"
      data-darkmode-toggle=""
    >
      <label className="switch">
        <span className="sr-only">Dark mode toggle</span>
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
