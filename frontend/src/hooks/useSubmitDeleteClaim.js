import { useState } from "react";
import toast from "react-hot-toast";

const useSubmitDeleteClaim = () => {
  const [loading, setLoading] = useState(false);

  const submitDeleteClaim = async ({ productID }) => {
    const success = handleInputErrors({
      productID,
    });

    if (!success) return;

    setLoading(true);

    try {
      const res = await fetch(
        `http://localhost:8000/api/data/delete/${productID}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "An unknown error occurred.");
      }

      toast.success("Claim is successfully deleted!!");

      const data = await res.json();

      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, submitDeleteClaim };
};

export default useSubmitDeleteClaim;

function handleInputErrors({ productID }) {
  if (!productID) {
    toast.error("Please fill in all the fields");
    return false;
  }

  return true;
}
