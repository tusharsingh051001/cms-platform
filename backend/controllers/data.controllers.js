import { Data } from "../models/!modelExports.js";

export const newClaim = async (req, res) => {
  try {
    const { claimantName, productID, claimType, claimDesc, claimStatus } =
      req.body;
    if (!productID) {
      return res.status(400).json({
        error: "ProductId cannot be empty!",
      });
    }

    // const product = await Data.findOne({ productID });

    // if (product) {
    //   return res.status(400).json({
    //     error: "Product exist, please go Existing Claims Page",
    //   });
    // }

    const newData = new Data({
      claimantName,
      productID,
      claimType,
      claimDesc,
      claimStatus,
    });

    await newData.save();

    if (newData) {
      res.status(201).json({
        _id: newData._id,
        claimantName: newData.claimantName,
        productID: newData.productID,
        claimType: newData.claimType,
        claimDesc: newData.claimDesc,
        claimStatus: newData.claimStatus,
      });
    }
  } catch (error) {
    console.log("ERROR IN NEW_CLAIM!: ", error.message);
    res.status(500).json({
      error: "Internsal Server Error",
    });
  }
};
