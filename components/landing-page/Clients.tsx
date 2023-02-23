import React from "react";

const Clients = () => {
  return (
    <div
      className="uni-brands uk-padding-3xlarge-top uk-padding-medium-bottom uk-padding-remove-top@m uk-padding-xlarge-bottom@m uk-panel uk-overflow-hidden"
      data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 300;"
    >
      <div className="uk-container uk-container-small">
        <div className="uk-panel uk-text-center dark:uk-text-white">
          <header className="uk-panel uk-flex-center uk-flex-middle uk-text-center">
            <span className="uk-text-overline uk-text-bold uk-text-muted">
              Trusted by amazing clients:
            </span>
          </header>
          <div
            className="uk-grid uk-grid-xlarge@m uk-child-width-1-2 uk-child-width-expand@m uk-flex-middle uk-flex-center uk-grid uk-margin-medium-top"
            data-uk-grid
          >
            <div>
              <img
                className="uk-width-xsmall"
                src="../assets/images/clients/kayros-light.svg"
                alt="Metamask"
                data-uk-svg=""
              />
            </div>
            <div>
              <img
                className="uk-width-xsmall"
                src="../assets/images/clients/di-light.svg"
                alt="BitGo"
                data-uk-svg=""
              />
            </div>
            <div>
              <img
                className="uk-width-xsmall"
                src="../assets/images/clients/dar-blockchain-light.svg"
                alt="Coinbase"
                data-uk-svg=""
              />
            </div>
            {/* <div>
              <img
                className="uk-width-xsmall"
                src="../assets/images/wallets/wallet-04.svg"
                alt="Trust Wallet"
                data-uk-svg=""
              />
            </div>
            <div>
              <img
                className="uk-width-xsmall"
                src="../assets/images/wallets/wallet-05.svg"
                alt="Exodus"
                data-uk-svg=""
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
