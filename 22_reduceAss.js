
class Employee {
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
    detail(){
        console.log(`Employee Details => emp_id:${this.emp_id},emp_name:${this.emp_name},emp_dept:${this.emp_dept},emp_company:${this.emp_company}}`);
    }
}
const emp_anil = new Employee(22,"anil","IT",50000,"TCS");
const emp_radha = new Employee(33,"radha","HR",74000,"Wipro");
const emp_rishi = new Employee(55,"rishi","Finance",47000,"TCS");
const emp_sonali = new Employee(66,"sonali","Finance",45000,"Infy");
const emp_monika = new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny = new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi = new Employee(99,"Mahesh","HR",85000,"Infy");

  
const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`=================STEP1=======================`);

console.log(`-----------------------------Find All The emp "Wipro"-------------------------------------`);

const arrayNew =arrayEmployees.filter((currentValue)=>{
    return currentValue.emp_company=="Wipro";
});

arrayNew.forEach((element)=>{
    element.detail();
});
console.log(`====================STEP 2======================`);
console.log(`-----------------------------Find all the emp Form "IT" or"HR" dept -------------------------------------`);
const arrayDept = arrayEmployees.filter((currentValue)=>{
    return (currentValue.emp_dept=="IT"|| currentValue.emp_dept=="HR")

});
arrayDept.forEach((element)=>{
    element.detail();
});

console.log(`====================STEP 3======================`);
console.log(`-----------------------------Find all the employe whose emp.id gretare than 50-------------------------------------`);
const arrayEamp = arrayEmployees.filter((currentValue)=>{
    return currentValue.emp_id>50;
});
arrayEamp.forEach((element)=>{
    element.detail();
});

console.log(`====================STEP 4======================`);
console.log(`-----------------------------Find all the employe whose name start with letter 'A'or'V'or'M'-------------------------------------`);
const arrayName = arrayEmployees.filter((currentValue)=>{
    return(currentValue.emp_name.startsWith('a')||currentValue.emp_name.startsWith('V')||currentValue.emp_name.startsWith('M'));
});
arrayName.forEach((element)=>{
    element.detail();
});

console.log(`=================================Step 5=====================================`);
console.log(`---------- Get the average salary of employee's from all department---------- `);
const avgSalary = arrayEmployees.filter((emp)=>{
    return emp.emp_dept=="IT","HR","Fianance";
});

const sumSalary = avgSalary.reduce( (runningTotal, currentValue)=>{
    return runningTotal+currentValue.emp_salary;
}, 0 );
console.log(sumSalary);
console.log(`Average salary for all departments employee's: ${sumSalary/avgSalary.length}`);


console.log("=================================Step 6=====================================");
console.log(`---------- Get the average salary of employee's for "IT" department---------- `);

const arraySalary = arrayEmployees.filter((emp)=>{
    return emp.emp_dept=="IT";
});

const salary = avgSalary.reduce((runningTotal,currentValue)=>{
    return runningTotal+currentValue.emp_salary;
},0);
console.log(sumSalary);
console.log(`Average salary from IT department is: ${salary/arraySalary.length}`);