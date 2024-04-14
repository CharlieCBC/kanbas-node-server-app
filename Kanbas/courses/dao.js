import courseModel from "./model.js";

export const createCourse = (course) => {
  delete course._id;
  return courseModel.create(course);
};

export const findAllCourses = () => courseModel.find();
export const findCourseById = (courseId) => courseModel.findById(courseId);
export const findCourseByNumber = (courseNumber) =>
  courseModel.findOne({ number: courseNumber });
export const findCourseByName = (courseName) =>
  courseModel.findOne({ name: courseName });
export const deleteCourse = (courseId) =>
  courseModel.deleteOne({ _id: courseId });
export const updateCourse = (courseId, course) =>
  courseModel.updateOne({ _id: courseId }, { $set: course });
