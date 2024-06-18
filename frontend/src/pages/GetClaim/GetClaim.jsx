// import React from 'react';
import BackButtonContainer from "../../components/BackButtonContainer/BackButtonContainer";
import GetClaimFormField from "../../components/GetClaimFormField/GetClaimFormField";
import styles from "./getclaim.module.css";

const GetClaim = () => {
  return (
    <div className={`${styles.body}`}>
      <BackButtonContainer />
      <div className={`flex items-center justify-center p-4`}>
        <GetClaimFormField />
      </div>
    </div>
  );
};

export default GetClaim;
