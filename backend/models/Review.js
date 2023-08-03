import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      require: true,
    },
    comment: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Review", ReviewSchema);
