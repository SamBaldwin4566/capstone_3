//Class of employees
class Employees {
    constructor(employeeName, employeeType, salesTarget, sales){
        this.employeeName = employeeName
        this.employeeType = employeeType
        this.salesTarget = salesTarget
        this.sales = sales
    }
    
    //Method to check if employee has reached their monthly sales target
    salesTargetReached(){                       
        if (this.sales >= this.salesTarget) {
            return true
        }
        else {
            return false
        }
    }
}

//Subclass for salaried employees
class Salaried extends Employees {
    constructor(employeeName, employeeType, salesTarget, sales, monthlySalary){
        super(employeeName, employeeType, salesTarget, sales)
        this.monthlySalary = monthlySalary
    }

    //Method to work out playslip for salaired employees
    salariedPayslip(){                          
        let target = this.salesTargetReached()
    
        //Calculation if the sales target was reached
        if(target == true){
            return (this.monthlySalary*1.1).toFixed(2)         
            
        }
        //If the sales target was not reached
        else{
            return (this.monthlySalary).toFixed(2)              
        }
    }

    //Method displays pay information
    displaySalariedInfo(){                              
        let info = `Name: ${this.employeeName}
Employee Type: ${this.employeeType}
Sales Target Achieved: ${this.salesTargetReached()}
Salary this month: £${this.salariedPayslip()}
`
        return info
    }
}

//Subclass for hourly employees
class Hourly extends Employees {
    constructor(employeeName, employeeType, salesTarget, sales, hourlyRate, hoursWorked){
        super(employeeName, employeeType, salesTarget, sales)
        this.hourlyRate = hourlyRate
        this.hoursWorked = hoursWorked
    }
    
    //Method to work out playslip for hourly employees
    hourlyPayslip(){                          
        let target = this.salesTargetReached()
        //Calculation if the sales target was reached
        if(target == true){
            this.hourlyRate = (this.hourlyRate*1.5).toFixed(2)
            return (this.hourlyRate*this.hoursWorked).toFixed(2)            
        }
        //If the sales target was not reached
        else{
            return (this.hourlyRate*this.hoursWorked).toFixed(2)            
        }

    }

    //Method displays pay information
    displayHourlyInfo(){                                    
        let info = `Name: ${this.employeeName}
Employee Type: ${this.employeeType}
Sales Target Achieved: ${this.salesTargetReached()}
Salary this month: £${this.hourlyPayslip()} (hourly rate x hours worked)     
`
        return info
    }
}

//Subclass for hybrid employees
class Hybrid extends Employees {
    constructor(employeeName, employeeType, salesTarget, sales, baseSalary, hourlyRate, addHours){
        super(employeeName, employeeType, salesTarget, sales)
        this.baseSalary = baseSalary
        this.hourlyRate = hourlyRate
        this.addHours = addHours
    }

    //Method to work out playslip for hybrid employees
    hybridPayslip(){                          
        let target = this.salesTargetReached()
        //Calculation if the sales target was reached
        if(target == true){
            this.hourlyRate = (this.hourlyRate*1.2).toFixed(2)
            return ((this.hourlyRate * this.addHours) + this.baseSalary).toFixed(2)         
        }
        //If the sales target was not reached
        else {
            return ((this.hourlyRate*this.addHours)+this.baseSalary).toFixed(2)             
        }
    }

    //Method displays pay information
    displayHybridInfo(){                                
        let info = `Name: ${this.employeeName}
Employee Type: ${this.employeeType}
Sales Target Achieved: ${this.salesTargetReached()}
Salary this month: £${this.hybridPayslip()} (hourly rate x additional hours) + base salary)
`
        return info
    }
}


//Two instances of each kind of employee
let employee1 = new Salaried("Bernard", "Salaried", 40, 45, 2000)
let employee2 = new Salaried("Diamond", "Salaried", 22, 19, 1800)
let employee3 = new Hourly("Billy-Bob", "Hourly", 10, 9, 10, 30)
let employee4 = new Hourly("Gordon", "Hourly", 16, 16, 9.5, 25)
let employee5 = new Hybrid("Charlotte", "Hybird", 20, 3, 1000, 10, 10)
let employee6 = new Hybrid("Foxy", "Hyrbid", 18, 40, 1000, 10, 4)

console.log(employee1.displaySalariedInfo())
console.log(employee2.displaySalariedInfo())
console.log(employee3.displayHourlyInfo())
console.log(employee4.displayHourlyInfo())
console.log(employee5.displayHybridInfo())
console.log(employee6.displayHybridInfo())