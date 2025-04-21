//Problem 1

const employee1 = {
    name: "Sam", department: "Tech", designation: "Manager", salary: 40000, raise: true,
};
const employee2 = {
    name: "Mary", department: "Finance", designation: "Trainee", salary: 18500, raise: true,
};
const employee3 = {
    name: "Bill", department: "HR", designation: "Executive", salary: 21200, raise: false,
};

console.log("Employees: ", employee1, employee2, employee3);

//Problem 2

const company = {
    companyName: "Tech Stars", website: "www.techstars.site", employees: [employee1, employee2, employee3],
};

console.log("Company Info: ", company);

//Problem 3

const newEmployee = {
    name: "Anna", department: "Tech", designation: "Executive", salary: 25600, raise: false,
};

company.employees.push(newEmployee);

console.log("Updated Company: ", company);

//Problem 4

var totalSalary = 0;
for (var i = 0; i < company.employees.length; i++) {
    totalSalary += company.employees[i].salary;
}

console.log("Total Salary: ", totalSalary);

//Probelm 5

function applyRaises(companyObj) {
    for (var i = 0; i < companyObj.employees.length; i++) {
        var employee = companyObj.employees[i];
        if (employee.raiseEligible === true) {
            employee.salary = employee.salary * 1.1;
            employee.raiseEligible = false;
        }
    }
}

applyRaises(company);
console.log("Updated Company Again: ", company);

//Problem 6

var homeEmployees = ["Anna", "Sam"];

for (var i = 0; i < company.employees.length; i++) {
    var employee = company.employees[i];
    if (homeEmployees.indexOf(employee.firstName) !== -1) {
        employee.home = true;
    } 
    else {
        employee.home = false;
    }
}

console.log("Final Updated Company: ", company);