class Company {
    constructor() {
        this.departments = {}
    }

    addEmployee(name, salary, position, department) {

        salary = Number(salary);

        if (!name || !salary || !position || !department) {
            throw new Error('Invalid input!');
        }

        if (salary < 0) {
            throw new Error('Invalid input!');
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = {
                totalSalary: 0,
                avgSalary: 0,
                employees: []
            }
        }
        this.departments[department].totalSalary += salary;
        this.departments[department].employees.push([name, salary, position]);
        this.departments[department].avgSalary = (this.departments[department].totalSalary / this.departments[department].employees.length);

        return `New employee is hired. Name: ${name}. Position: ${position}`


    }

    bestDepartment() {
        let bestAvgSalary = 0;
        let bestDept = '';

        for (let dept in this.departments) {
            if (this.departments[dept].avgSalary > bestAvgSalary) {
                bestAvgSalary = this.departments[dept].avgSalary.toFixed(2);
                bestDept = dept;
            }
        }

        let result = [
            `Best Department is: ${bestDept}`,
            `Average salary: ${bestAvgSalary}`
        ]

        let bestDeptArr = this.departments[bestDept].employees.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

        for (let [employee, salary, position] of bestDeptArr) {
            result.push(`${employee} ${salary} ${position}`)
        }

        return result.join('\n')
    }

}

let c = new Company();
console.log(c.addEmployee("", 2000, "engineer", "Construction"));
console.log(c.addEmployee("Pesho", 1500, "electrical engineer", "Construction"));
console.log(c.addEmployee("Slavi", 500, "dyer", "Construction"));
console.log(c.addEmployee("Stan", 2000, "architect", "Construction"));
console.log(c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing"));
console.log(c.addEmployee("Pesho", 1000, "graphical designer", "Marketing"));
console.log(c.addEmployee("Gosho", 1350, "HR", "Human resources"));

console.log(c.bestDepartment());
