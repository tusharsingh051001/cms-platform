import { Schema, model } from "mongoose";

const date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
const seconds = date.getSeconds();
let amOrPm = "am";
if (hours > 12) {
  hours = hours - 12;
  amOrPm = "pm";
}
const currDate = `${hours}:${minutes}:${seconds} ${amOrPm}`;

const dataSchema = new Schema(
  {
    claimantName: {
      type: String,
      required: true,
    },
    productID: {
      type: String,
      required: true,
    },
    claimType: {
      type: String,
      required: true,
    },
    claimDesc: {
      type: String,
      required: true,
    },
    claimStatus: {
      type: String,
      required: true,
      default: "pending",
    },
  },
  { timestamps: true }
);

const Data = model("Data", dataSchema);
export default Data;
