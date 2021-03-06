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
var service_component_1 = require("../shared/service.component");
var toastr_service_1 = require("../common/toastr.service");
var CourseListCompnent = /** @class */ (function () {
    function CourseListCompnent(course, toastr) {
        this.course = course;
        this.toastr = toastr;
    }
    //ngOnInit is called right after the directive's data-bound properties have been checked for the first time
    //More like Hooks in NUnit [BeforeTest]
    CourseListCompnent.prototype.ngOnInit = function () {
        this.courses = this.course.getCourses();
    };
    CourseListCompnent.prototype.showToastrMessage = function (message) {
        this.toastr.Success(message);
    };
    CourseListCompnent = __decorate([
        core_1.Component({
            template: "\n    <div>\n    <h1> All courses </h1>\n    <hr/>\n    <div class=\"row\">\n        <div class=\"col-md-5\" *ngFor=\"let course of courses\">\n            <course-thumb (click)= \"showToastrMessage(course.Name)\" #thumbnail [course] = \"course\"> </course-thumb>\n        </div>\n    </div>\n\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [service_component_1.CourseService, toastr_service_1.ToastrService])
    ], CourseListCompnent);
    return CourseListCompnent;
}());
exports.CourseListCompnent = CourseListCompnent;
//# sourceMappingURL=courselist.component.js.map