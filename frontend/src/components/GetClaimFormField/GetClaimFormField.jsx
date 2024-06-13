// import React from 'react';
import { useState } from "react";
import styles from "./getclaimformfield.module.css";
import useSubmitGetClaim from "../../hooks/useSubmitGetClaim";

const GetClaimFormField = () => {
  const [inputs, setInputs] = useState({
    productID: "",
  });

  const { loading, submitGetClaim, showData, data } = useSubmitGetClaim();

  const productData = data.Product;

  const submitHandler = async (e) => {
    e.preventDefault();
    await submitGetClaim(inputs);
  };

  return (
    <>
      <form onSubmit={submitHandler} className={`${styles.body}`}>
        <div>
          <label htmlFor="productID">Product ID</label>
          <input
            type="text"
            name="productID"
            id="productID"
            placeholder="Eg. 123456"
            minLength={6}
            required={true}
            value={inputs.productID}
            onChange={(e) =>
              setInputs({ ...inputs, productID: e.target.value })
            }
          />
        </div>
        <div className={`w-[85%] mx-auto text-center`}>
          <button
            className={`w-2/6 bg-black text-white p-2 rounded-lg ${styles.buttonContainer}`}
            type="submit"
          >
            {loading ? "Finding...." : "Find Claim"}
          </button>
        </div>
      </form>
      {showData && (
        <div>
          <p>Product ID: {productData.productID}</p>
          <p>Claimant Name: {productData.claimantName}</p>
          <p>Claim Type: {productData.claimType}</p>
          <p>Claim Desc: {productData.claimDesc}</p>
        </div>
      )}
    </>
  );
};

export default GetClaimFormField;
