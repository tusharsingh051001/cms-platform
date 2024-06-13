import { useState } from "react";
import toast from "react-hot-toast";

const useSubmitGetClaim = () => {
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);
  let [data, setData] = useState("");

  const submitGetClaim = async ({ productID }) => {
    const success = handleInputErrors({
      productID,
    });

    if (!success) return;

    setLoading(true);

    try {
      const res = await fetch(
        `http://localhost:8000/api/data/view/${productID}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "An unknown error occurred.");
      }

      const dataField = await res.json();

      setData(dataField);

      if (!data) setShowData(false);

      console.log(data);

      setShowData(true);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, submitGetClaim, showData, data };
};

export default useSubmitGetClaim;

function handleInputErrors({ productID }) {
  if (!productID) {
    toast.error("Please fill in all the fields");
    return false;
  }

  return true;
}
