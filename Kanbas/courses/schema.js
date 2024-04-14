import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
  {
    name: { type: String, default: "New Course", required: true },
    number: { type: String, default: "NC0001", required: true },
    startDate: Date,
    endDate: Date,
    image: { type: String, default: "husky.jpg" },
  },
  { collection: "courses" },
);
export default courseSchema;
