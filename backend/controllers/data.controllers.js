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

export const updateClaim = async (req, res) => {
  try {
    const { claimType, claimDesc } = req.body;
    const { id: productID } = req.params;

    const product = await Data.findOne({ productID });

    if (!product) {
      throw new Error("Product not found!! Enter correct ID.");
    }

    product.claimType = claimType;
    product.claimDesc = claimDesc;

    await product.save();

    res.status(200).json({
      message: "Product Updated Successfully!!",
      Product: {
        _id: product._id,
        claimantName: product.claimantName,
        productID: product.productID,
        claimType: product.claimType,
        claimDesc: product.claimDesc,
        claimStatus: product.claimStatus,
      },
    });
  } catch (error) {
    console.log("ERROR IN UPDATE CLAIM: ", error.message);
    res.status(500).json({
      error: "internal Server Error",
    });
  }
};
