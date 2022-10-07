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
var cars = [];
var Vehicles = /** @class */ (function () {
    function Vehicles(name, model, detail, price) {
        this.name = name;
        this.model = model;
        this.detail = detail;
        this.price = price;
        cars.push(this);
    }
    Vehicles.prototype.showResult = function () {
        return "      \n        <div class=\"card col col-4 m-2\" style=\"width: 18rem\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title mt-3\">".concat(this.name, "</h5>\n          <p class=\"card-text\">\n           Model: ").concat(this.model, " <br>\n           Detail: ").concat(this.detail, "\n          </p>\n\n          <a\n            class=\"btn btn-primary btn-price\"\n            data-bs-toggle=\"collapse\"\n            href=\"#collapseExample\"\n            role=\"button\"\n            aria-expanded=\"false\"\n            aria-controls=\"collapseExample\"\n            >See Price</a\n          >\n        </div>\n      </div>\n       \n      <div class=\"collapse mt-3\" id=\"collapseExample\">\n        <div class=\"card card-body\">\n            Price is ").concat(this.price, "\n        </div>\n      </div> ");
    };
    return Vehicles;
}());
var Motorbikes = /** @class */ (function (_super) {
    __extends(Motorbikes, _super);
    function Motorbikes(name, model, detail, price, fuel, kmLeft) {
        var _this = _super.call(this, name, model, detail, price) || this;
        _this.fuel = fuel;
        _this.kmLeft = kmLeft;
        cars.push(_this);
        return _this;
    }
    return Motorbikes;
}(Vehicles));
var Trucks = /** @class */ (function (_super) {
    __extends(Trucks, _super);
    function Trucks(name, model, detail, price, seatNumber, productionYear) {
        var _this = _super.call(this, name, model, detail, price) || this;
        _this.seatNumber = seatNumber;
        _this.productionYear = productionYear;
        cars.push(_this);
        return _this;
    }
    return Trucks;
}(Vehicles));
var car1 = new Vehicles("Personal Car", "X3", "Tesla", 55000);
var car2 = new Vehicles("Personal Car", "Yaris", "Toyota", 25000);
var car3 = new Trucks("Truck", "Z23", "Kia", 45000, 15, 2021);
var car4 = new Trucks("Truck", "Tacoma", "Toyota", 25000, 5, 2023);
var car5 = new Motorbikes("Motorbike", "Revo", "Toyota", 10000, "EV", 200000);
var vehicleType = [];
for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
    var car = cars_1[_i];
    document.getElementById("data").innerHTML += car.showResult();
    addVehicleType(car.name);
}
function addVehicleType(name) {
    if (!(vehicleType.includes(name))) {
        vehicleType.push(name);
    }
    var selectVehicle = document.getElementById("vehicleType");
    var optionVehicle = document.createElement("option");
    for (var index in vehicleType) {
        optionVehicle.value = index;
        optionVehicle.text = vehicleType[index];
    }
    console.log(optionVehicle);
    selectVehicle === null || selectVehicle === void 0 ? void 0 : selectVehicle.appendChild(optionVehicle);
}
