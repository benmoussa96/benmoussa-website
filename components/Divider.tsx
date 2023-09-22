import React from "react";
import Image from "next/image";

const Divider = () => {
  return (
    <img
      className="uk-width-2xsmall uk-flex-center uk-margin-auto uk-margin-medium uk-margin-large@m"
      src="../assets/images/divider-01.svg"
      alt="Divider"
      data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
    />
  );
};

export default Divider;
