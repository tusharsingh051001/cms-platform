// import React from 'react';
import BackButtonContainer from "../../components/BackButtonContainer/BackButtonContainer";
import ExistingClaimFormField from "../../components/ExistingClaimFormField/ExistingClaimFormField";
import styles from "./existingclaim.module.css";

const ExistingClaim = () => {
  return (
    <div className={`${styles.body}`}>
      <BackButtonContainer />
      <div className={`flex items-center justify-center p-4`}>
        <ExistingClaimFormField />
      </div>
    </div>
  );
};

export default ExistingClaim;
