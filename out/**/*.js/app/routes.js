"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var courselist_component_1 = require("./courses/courselist.component");
var courseDetails_component_1 = require("./courses/course-details/courseDetails.component");
var create_course_component_1 = require("./courses/create-course.component");
exports.appRoutes = [
    { path: 'course/new', component: create_course_component_1.CreateCourseComponent },
    { path: 'course', component: courselist_component_1.CourseListCompnent },
    { path: 'course/:id', component: courseDetails_component_1.CourseDetails },
    { path: '', redirectTo: 'course', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map