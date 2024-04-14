import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    number: { type: String, required: true },
    startDate: Date,
    endDate: Date,
    image: { type: String, default: "husky.jpg" },
  },
  { collection: "courses" },
);
export default courseSchema;
