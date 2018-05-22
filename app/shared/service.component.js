"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CourseService = /** @class */ (function () {
    function CourseService() {
    }
    CourseService.prototype.getCourses = function () {
        return COURSES;
    };
    CourseService.prototype.getSpecificCourse = function (id) {
        return COURSES.find(function (x) { return x.id === id; });
    };
    CourseService = __decorate([
        core_1.Injectable()
    ], CourseService);
    return CourseService;
}());
exports.CourseService = CourseService;
var COURSES = [
    {
        id: 1,
        Name: 'Selenium Framework development',
        ReleaseDate: '9/26/2017',
        imageurl: '/app/assets/images/selenium.png',
        Duration: '3 Hours',
        Level: 'Beginners'
    },
    {
        id: 2,
        Name: 'Coded UI Framework development',
        ReleaseDate: '10/30/2016',
        imageurl: '/app/assets/images/visualstudio.png',
        Duration: '6 Hours',
        Level: 'Intermediate'
    },
    {
        id: 3,
        Name: 'Docker on Windows',
        ReleaseDate: '8/26/2017',
        imageurl: '/app/assets/images/docker.png',
        Duration: '4 Hours',
        Level: 'Advanced'
    },
    {
        id: 4,
        Name: 'Android Automation',
        ReleaseDate: '6/26/2017',
        imageurl: '/app/assets/images/Appium.png',
        Duration: '7 Hours',
        Level: 'Beginners'
    }
];
//# sourceMappingURL=service.component.js.map