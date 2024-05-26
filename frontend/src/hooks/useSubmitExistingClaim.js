import { useState } from "react";
import toast from "react-hot-toast";

const useSubmitExistingClaim = () => {
  const [loading, setLoading] = useState(false);

  const submitExistingClaim = async ({ claimType, claimDesc, productID }) => {
    const success = handleInputErrors({
      claimType,
      claimDesc,
      productID,
    });

    if (!success) return;

    setLoading(true);

    try {
      const res = await fetch(
        `http://localhost:8000/api/data/existing/${productID}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            claimType,
            claimDesc,
          }),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "An unknown error occurred.");
      }

      const data = await res.json();

      toast.success("Claim Successfully Updated");

      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, submitExistingClaim };
};

export default useSubmitExistingClaim;

function handleInputErrors({ claimType, claimDesc, productID }) {
  if (!claimType || !claimDesc || !productID) {
    toast.error("Please fill in all the fields");
    return false;
  }

  return true;
}
