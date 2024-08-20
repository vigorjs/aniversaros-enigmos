import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import logo1 from "../../../assets/HutRiLogoPutih.png";
import logo2 from "../../../assets/Logo_Color_Enigma.png";
import styles from "./SpinnerLoadingScree.module.css";

const SpinnerLoadingScreen = (props) => {
  const [showFirstLogo, setShowFirstLogo] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstLogo((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`${styles["loading-screen"]} ${
        props.loading ? "" : styles["hidden"]
      }`}
    >
      <div
        className={`${styles["spinner-container"]} flex flex-col justify-center items-center`}
      >
        <div
          className={`${styles["loading-logo-container"]} flex justify-center items-center`}
        >
          <img
            src={logo1}
            alt="Logo 1"
            className={`${styles["loading-logo"]} ${
              showFirstLogo ? styles["show"] : ""
            }`}
          />
          <img
            src={logo2}
            alt="Logo 2"
            className={`${styles["loading-logo"]} ${
              !showFirstLogo ? styles["show"] : ""
            } pt-[60px]`}
          />
        </div>
        {/* <span className={`${styles["loader"]} mt-[-130px]`}></span> */}
      </div>
    </div>
  );
};

SpinnerLoadingScreen.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default SpinnerLoadingScreen;
