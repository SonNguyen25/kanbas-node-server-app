import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
const app = express();

app.use(express.json());
const corsOptions = {
    origin: ["http://localhost:3000", "https://kanbas-node-server-app-lu4z.onrender.com", "https://a5--beautiful-pika-bb3cab.netlify.app"],
  credentials: true,
};
app.use(cors(corsOptions));
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);

app.listen(4000);
