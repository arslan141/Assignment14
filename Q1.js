// Sample Input
let employees = [
    { "id": 1, "name": "Abhinav", "department": "IT", "Salary": 75000 },
    { "id": 2, "name": "Gaurav", "department": "Sales", "Salary": 52000 },
    { "id": 3, "name": "Raj", "department": "IT", "Salary": 64000 }
];

// a) Filter employees according to department = IT
let ITEmployees = employees.filter(employee => employee.department === 'IT');
console.log("Employees in IT Department:", ITEmployees);

// b) Filter employees who earn a salary < 65000
let employeesWithLowSalary = employees.filter(employee => employee.Salary < 65000);
console.log("Employees with Salary < 65000:", employeesWithLowSalary);
