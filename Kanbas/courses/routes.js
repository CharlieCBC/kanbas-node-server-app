import db from "../Database/index.js";
import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  const createCourse = async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  };

  const deleteCourse = async (req, res) => {
    // TODO: check courseID
    const status = await dao.deleteCourse(req.params.courseId);
    res.json(status);
  }

  const findAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  }

  const findCourseById = async (req, res) => {
    // TODO: check courseID
    const course = await dao.findCourseById(req.params.courseId);
    res.json(course);
  }

  const updateCourse = async (req, res) => {
    // TODO: check courseID
    const { courseId } = req.params;
    const status = await dao.updateCourse(courseId, req.body);
    res.json(status);
  }

  app.post("/api/courses", createCourse);
  app.delete("/api/courses/:courseId", deleteCourse);
  app.get("/api/courses", findAllCourses);
  app.get("/api/courses/:courseId", findCourseById);
  app.put("/api/courses/:courseId", updateCourse);

}

// splitttttttttttttttttttttttttttttttttttt
//
// export default function CourseRoutes(app) {
//   app.put("/api/courses/:id", (req, res) => {
//     const { id } = req.params;
//     const course = req.body;
//     db.courses = db.courses.map((c) =>
//       c._id === id ? { ...c, ...course } : c,
//     );
//     res.sendStatus(204);
//   });
//
//   app.delete("/api/courses/:id", (req, res) => {
//     const { id } = req.params;
//     db.courses = db.courses.filter((c) => c._id !== id);
//     res.sendStatus(204);
//   });
//
//   app.post("/api/courses", (req, res) => {
//     const course = { ...req.body, _id: new Date().getTime().toString(), image: "husky.jpg" };
//     db.courses.push(course);
//     res.send(course);
//   });
//
//   app.get("/api/courses", (req, res) => {
//     const courses = db.courses;
//     res.send(courses);
//   });
//
//   app.get("/api/courses/:id", (req, res) => {
//     const { id } = req.params;
//     const course = db.courses
//         .find((c) => c._id === id);
//     if (!course) {
//       res.status(404).send("Course not found");
//       return;
//     }
//     res.send(course);
//   });
//
// }
