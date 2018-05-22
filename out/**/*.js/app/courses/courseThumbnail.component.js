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
var CourseThumbnailComponent = /** @class */ (function () {
    function CourseThumbnailComponent() {
        this.someproperty = "Some value";
        // setNgStyle() {
        //     if (this.course && this.course.location.city === "Chennai")
        //         return { color: "yellow", 'font-weight': "bold" }
        //     return {}
        // }
    }
    CourseThumbnailComponent.prototype.printfoo = function () {
        console.log("Calling printfoo");
    };
    CourseThumbnailComponent.prototype.setProperties = function () {
        if (this.course && this.course.date === "9/26/2017")
            return ["bold color"];
        return [];
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CourseThumbnailComponent.prototype, "course", void 0);
    CourseThumbnailComponent = __decorate([
        core_1.Component({
            selector: 'course-thumb',
            template: "\n        <div [routerLink]=\"['/course', course.id]\" class=\"well hoverwell thumbnail\">\n            <h2> {{course.Name}} </h2>\n            <hr />\n            <div> Release Date: {{course.ReleaseDate}} </div>\n            <div> Duration: {{course.Duration}} </div>\n            <div> Level: {{course.Level}} </div>\n            <div [ngClass]=setProperties() [ngSwitch]=\"course?.ReleaseDate\">\n                Event Date: {{course?.ReleaseDate}} \n                <span *ngSwitchCase=\"'9/26/2017'\">(4th quater) </span>\n                <span *ngSwitchCase=\"'6/26/2017'\">(2nd quater) </span>\n                <span *ngSwitchDefault>(Any quater) </span>\n            </div>\n        </div>\n    ",
            styles: ["\n        .color {color: green !important}\n        .bold {font-weight: bold;}\n        .well div {color: white;}"
            ]
        })
    ], CourseThumbnailComponent);
    return CourseThumbnailComponent;
}());
exports.CourseThumbnailComponent = CourseThumbnailComponent;
//# sourceMappingURL=courseThumbnail.component.js.map