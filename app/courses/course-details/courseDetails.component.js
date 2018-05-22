"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var service_component_1 = require("../../shared/service.component");
var router_1 = require("@angular/router");
var CourseDetails = /** @class */ (function () {
    function CourseDetails(courseService, routes) {
        this.courseService = courseService;
        this.routes = routes;
    }
    CourseDetails.prototype.ngOnInit = function () {
        this.course = this.courseService.getSpecificCourse(+this.routes.snapshot.params['id']);
    };
    CourseDetails = __decorate([
        core_1.Component({
            templateUrl: 'app/courses/course-details/courseDetails.component.html',
            styles: [
                "\n            .container {padding-left: 20px; padding-right:20px; }\n            .course-image: {height: 100px; }\n        "
            ]
        }),
        __metadata("design:paramtypes", [service_component_1.CourseService, router_1.ActivatedRoute])
    ], CourseDetails);
    return CourseDetails;
}());
exports.CourseDetails = CourseDetails;
//# sourceMappingURL=courseDetails.component.js.map