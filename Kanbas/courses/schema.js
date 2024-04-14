import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
  {
    name: { type: String, default: "New Course" },
    number: { type: String, default: "NC0001" },
    startDate: Date,
    endDate: Date,
    image: { type: String, default: "husky.jpg" },
  },
  { collection: "courses" },
);
export default courseSchema;
