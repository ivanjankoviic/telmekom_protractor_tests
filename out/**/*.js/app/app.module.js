"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var course_app_component_1 = require("./course-app.component");
var courselist_component_1 = require("./courses/courselist.component");
var courseThumbnail_component_1 = require("./courses/courseThumbnail.component");
var nav_component_1 = require("./nav/nav.component");
var service_component_1 = require("./shared/service.component");
var toastr_service_1 = require("./common/toastr.service");
var courseDetails_component_1 = require("./courses/course-details/courseDetails.component");
var routes_1 = require("./routes");
var create_course_component_1 = require("./courses/create-course.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(routes_1.appRoutes)
            ],
            declarations: [
                course_app_component_1.CourseAppComponents,
                courselist_component_1.CourseListCompnent,
                courseThumbnail_component_1.CourseThumbnailComponent,
                nav_component_1.NavigationComponent,
                courseDetails_component_1.CourseDetails,
                create_course_component_1.CreateCourseComponent
            ],
            bootstrap: [course_app_component_1.CourseAppComponents],
            providers: [
                service_component_1.CourseService,
                toastr_service_1.ToastrService,
                {
                    provide: 'canDeactiveCreateEvent',
                    useValue: checkDirtyState
                }
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
function checkDirtyState() {
    return false;
}
//# sourceMappingURL=app.module.js.map