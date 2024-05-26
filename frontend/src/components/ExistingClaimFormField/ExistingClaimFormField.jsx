import { useState } from "react";
import styles from "./existingclaimformfield.module.css";
import useSubmitExistingClaim from "../../hooks/useSubmitExistingClaim";

const ExistingClaimFormField = () => {
  const [inputs, setInputs] = useState({
    claimType: "",
    claimDesc: "",
    productID: "",
  });

  const { loading, submitExistingClaim } = useSubmitExistingClaim();

  const submitHandler = async (e) => {
    e.preventDefault();
    await submitExistingClaim(inputs);
  };

  return (
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
          onChange={(e) => setInputs({ ...inputs, productID: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="claimType">Claim Type</label>
        <input
          type="text"
          name="claimType"
          id="claimType"
          placeholder="Eg. Loss of Property"
          required={true}
          value={inputs.claimType}
          onChange={(e) => setInputs({ ...inputs, claimType: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="claimDesc">
          Give a detailed Description of thr <b>Accident</b>
        </label>
        <textarea
          name="claimDesc"
          id="claimDesc"
          placeholder="Enter your description here...."
          required={true}
          value={inputs.claimDesc}
          onChange={(e) => setInputs({ ...inputs, claimDesc: e.target.value })}
        ></textarea>
      </div>
      <div className={`w-[85%] mx-auto text-center`}>
        <button
          className={`w-2/6 bg-black text-white p-2 rounded-lg ${styles.buttonContainer}`}
          type="submit"
        >
          {loading ? "Submitting...." : "Submit Claim"}
        </button>
      </div>
    </form>
  );
};

export default ExistingClaimFormField;
