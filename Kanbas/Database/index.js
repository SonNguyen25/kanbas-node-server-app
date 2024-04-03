import courses from "./courses.js";
import modules from "./modules.js";
import assignments from "./assignments.js";
import users from "./users.js";
import grades from "./grades.js";
import enrollments from "./enrollment.js";
import todo from "./todo.js";


const db = {
  courses,
  modules,
  todo,
  assignments,
};

// Export the db object
export default { db, courses, modules, assignments, users, grades, enrollments, todo};