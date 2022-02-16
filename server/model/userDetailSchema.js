import mongoose from "mongoose";

const userDetailSchema = new mongoose.Schema({
  AppHRA: {
    type: String,
    required: true,
  },
  Bas: {
    type: String,
    required: true,
  },
  FA: {
    type: String,
    required: true,
  },
  HRA: {
    type: String,
    required: true,
  },
  Inv: {
    type: String,
    required: true,
  },
  LTA: {
    type: String,
    required: true,
  },
  Med: {
    type: String,
    required: true,
  },
  Rent: {
    type: String,
    required: true,
  },
  metro: {
    type: String,
    required: true,
  },
});
const UserDetail = mongoose.model("UserDetail", userDetailSchema);
export default UserDetail;
