//Basic Excercise 1
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.printInfo = function () {
        return "Hello there. My name is ".concat(this.name, " and I am ").concat(this.age, " years old, and I am ").concat(this.jobTitle, ".");
    };
    return Person;
}());
var doctor = new Person("Isadora Lee", 54, "Head of Operation Department");
document.write(doctor.printInfo());
document.write("<br>");
//Basic Excercise 2
var PersonDetail = /** @class */ (function (_super) {
    __extends(PersonDetail, _super);
    function PersonDetail(name, age, jobTitle, salary, jobLocation) {
        var _this = _super.call(this, name, age, jobTitle) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    PersonDetail.prototype.printInfo = function () {
        return "".concat(_super.prototype.printInfo.call(this), " And I get $").concat(this.salary, " every month, and I work in ").concat(this.jobLocation, ".");
    };
    return PersonDetail;
}(Person));
var nurse = new PersonDetail("Kirsten Bell", 33, "Operation station nurse", 3300, "New York");
document.write(nurse.printInfo());
