// import React from 'react';
import { useState } from "react";
import styles from "./deleteclaimformfield.module.css";
import useSubmitDeleteClaim from "../../hooks/useSubmitDeleteClaim";

const DeleteClaimFormField = () => {
  const [inputs, setInputs] = useState({
    productID: "",
  });

  const { loading, submitDeleteClaim } = useSubmitDeleteClaim();

  const submitHandler = async (e) => {
    e.preventDefault();
    await submitDeleteClaim(inputs);
  };

  return (
    <form onSubmit={submitHandler} className={`${styles.body}`}>
      <div>
        <label htmlFor="">Product ID</label>
        <input
          type="text"
          name="productID"
          id="productID"
          placeholder="Eg. 123456"
          minLength={6}
          required={true}
          value={inputs.productID}
          onChange={(e) => setInputs({ ...inputs, productID: e.target.value })}
        />
      </div>
      <div className={`w-[85%] mx-auto text-center`}>
        <button
          className={`w-2/6 bg-black text-white p-2 rounded-lg ${styles.buttonContainer}`}
          type="submit"
        >
          {loading ? "Deleting...." : "Delete Claim"}
        </button>
      </div>
    </form>
  );
};

export default DeleteClaimFormField;
