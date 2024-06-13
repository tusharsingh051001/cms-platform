// import React from 'react';
import BackButtonContainer from "../../components/BackButtonContainer/BackButtonContainer";
import DeleteClaimFormField from "../../components/DeleteClaimFormField/DeleteClaimFormField";
import styles from "./deleteclaim.module.css";

const DeleteClaim = () => {
  return (
    <div className={`${styles.body}`}>
      <BackButtonContainer />
      <div className={`flex items-center justify-center p-4`}>
        <DeleteClaimFormField />
      </div>
    </div>
  );
};

export default DeleteClaim;
