import mongoose from "mongoose";


const schema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: [true, "Please enter url"],
    },
    timespent: {
      type: Number,
      required: [true, "Please enter timespent"],
    },
  },
  { timestamps: true }
);



export const Tab = mongoose.model("Tab", schema);
