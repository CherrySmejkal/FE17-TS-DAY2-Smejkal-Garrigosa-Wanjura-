//Basic Excercise 1

class Person {
    name:string;
    age:number;
    jobTitle:string;
    constructor(name:string, age:number, jobTitle:string){
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    printInfo(){
        return `Hello there. My name is ${this.name} and I am ${this.age} years old, and I am ${this.jobTitle}.`;
    }
}

let doctor = new Person ("Isadora Lee", 54, "Head of Operation Department");
document.write(doctor.printInfo());
document.write("<br>");

//Basic Excercise 2

class PersonDetail extends Person {
    salary: number;
    jobLocation: string;
    constructor(name:string, age:number, jobTitle:string, salary:number, jobLocation:string){
        super(name, age, jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    printInfo() {
        return `${super.printInfo()} And I get $${this.salary} every month, and I work in ${this.jobLocation}.`;
 
    }
}

let nurse = new PersonDetail ("Kirsten Bell", 33, "Operation station nurse", 3300, "New York");
document.write(nurse.printInfo());