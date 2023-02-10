// Membuat Consturctor inheritance
// Menggunakan parameter
function Employee(firstname, middlename){
    // Membuat property 
    this.firstname = firstname
    this.middlename = middlename
    // Membuat method
    this.fullname= function(){
        console.log(`${this.firstname} ${this.middlename}`)
    }
}

function Manager(firstname,middlename,lastname){
    this.lastname = lastname
    Employee.call(this,firstname,middlename)
    this.fullname= function(){
        console.log(`${this.firstname} ${this.middlename} ${this.lastname}`)
    }
}

const yp = new Employee("yp1", "yp2")
const farhan = new Manager("farhan", "yudha","pratama")
yp.fullname()
farhan.fullname()