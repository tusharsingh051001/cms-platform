// import React from 'react';
import BackButtonContainer from "../../components/BackButtonContainer/BackButtonContainer";
import NewClaimFormField from "../../components/NewClaimFormField/NewClaimFormField";
import styles from "./newclaim.module.css";

const NewClaim = () => {
  return (
    <div className={`${styles.body}`}>
      <BackButtonContainer />
      <div className={`flex items-center justify-center p-4`}>
        <NewClaimFormField />
      </div>
    </div>
  );
};

export default NewClaim;
