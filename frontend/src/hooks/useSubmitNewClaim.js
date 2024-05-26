import { useState } from "react";
import toast from "react-hot-toast";

const useSubmitNewClaim = () => {
  const [loading, setLoading] = useState(false);

  const submitNewClaim = async ({
    claimantName,
    productID,
    claimType,
    claimDesc,
  }) => {
    // console.log("inside hook");
    const success = handleInputErrors({
      claimantName,
      productID,
      claimType,
      claimDesc,
    });

    if (!success) return;

    setLoading(true);

    // console.log("Entering TryCatch Block");
    try {
      const res = await fetch(`/api/data/new`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          claimantName,
          productID,
          claimType,
          claimDesc,
        }),
      });

      // console.log(data);

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "An unknown error occurred.");
      }

      const data = await res.json();

      toast.success("Claim Successfully Submitted");

      console.log(data);
    } catch (error) {
      console.log("Error in Submitting the New Data:", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { submitNewClaim, loading };
};

export default useSubmitNewClaim;

function handleInputErrors({ claimantName, productID, claimType, claimDesc }) {
  if (!claimantName || !productID || !claimType || !claimDesc) {
    toast.error("Please fill out all the fields");
    // console.log("false");
    return false;
  }

  if (productID.length < 6) {
    toast.error("Invalid Product ID");
    // console.log("false");
    return false;
  }

  //   console.log("true");
  return true;
}
