import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import session from "express-session";
import UserRoutes from "./Users/routes.js";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import AssignmentRoutes from "./Kanbas/assignments/routes.js";
import cors from "cors";

const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas";
mongoose.connect(CONNECTION_STRING);

const app = express();
const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  }),
);

if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.HTTP_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));

app.use(express.json());
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
Hello(app);
Lab5(app);
app.listen(process.env.PORT || 4000);
