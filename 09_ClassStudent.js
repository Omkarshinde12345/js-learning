class Student {

    constructor(RollNumber, name , division){

        this.RollNumber;
        this.name;
        this.division;

    }

    detail(){

        console.log(`Person Details => RollNumber: ${this.RollNumber}, Name: ${this.name}, Division: ${this.division}`);

    }

}

const Omkar = new Student(101, "Omkar", "division");

Omkar.detail();

 

const Vijay = new Student(122, "Vijay", "division");

Vijay.detail();