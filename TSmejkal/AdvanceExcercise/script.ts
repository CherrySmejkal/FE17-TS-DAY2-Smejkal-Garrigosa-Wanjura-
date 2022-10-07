let cars:Array<Vehicles> = [];

class Vehicles {
    name:string;
    model:string;
    detail:string;
    price:number;
    constructor(name:string, model:string, detail:string, price:number){
        this.name = name;
        this.model = model;
        this.detail = detail;
        this.price = price;
        cars.push(this);
    }
    showResult(){
        return `      
        <div class="card col col-4 m-2" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title mt-3">${this.name}</h5>
          <p class="card-text">
           Model: ${this.model} <br>
           Detail: ${this.detail}
          </p>

          <a
            class="btn btn-primary btn-price"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
            >See Price</a
          >
        </div>
      </div>
       
      <div class="collapse mt-3" id="collapseExample">
        <div class="card card-body">
            Price is ${this.price}
        </div>
      </div> `;
    }
}


class Motorbikes extends Vehicles{
    fuel: string;
    kmLeft: number;
    constructor(name:string, model:string, detail:string, price:number, fuel:string, kmLeft: number ){
        super(name, model, detail, price);
        this.fuel = fuel;
        this.kmLeft = kmLeft;
        cars.push(this);
    }
}

class Trucks extends Vehicles{
    seatNumber: number;
    productionYear: number;
    constructor(name:string, model:string, detail:string, price:number, seatNumber : number, productionYear: number ){
        super(name, model, detail, price);
        this.seatNumber = seatNumber;
        this.productionYear = productionYear;
        cars.push(this);
    }
}

let car1 = new Vehicles ("Personal Car", "X3", "Tesla", 55000);
let car2 = new Vehicles ("Personal Car", "Yaris", "Toyota", 25000);
let car3 = new Trucks ("Truck", "Z23", "Kia", 45000, 15, 2021);
let car4 = new Trucks ("Truck", "Tacoma", "Toyota", 25000, 5, 2023);
let car5 = new Motorbikes ("Motorbike", "Revo", "Toyota", 10000, "EV", 200000 );

let vehicleType:string[]= [];
for (let car of cars) {
    document.getElementById("data").innerHTML += car.showResult();
    addVehicleType(car.name);
}


function addVehicleType(name:string){
        if(!(vehicleType.includes(name))){
        vehicleType.push(name);      
    }

let selectVehicle =  document.getElementById("vehicleType");
let optionVehicle = document.createElement("option")
for (let index in vehicleType) {
    optionVehicle.value = index;
    optionVehicle.text = vehicleType[index];
}
console.log(optionVehicle);
selectVehicle?.appendChild(optionVehicle);
}
