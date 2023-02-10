// Membuat Consturctor Function
// Menggunakan parameter
function Person(firstname, middlename,lastname){
    // Membuat property 
    this.firstname = firstname
    this.middlename = middlename
    this.lastname = lastname

    // Membuat method
    this.fullname= function(){
        console.log(`${this.firstname} ${this.middlename} ${this.lastname}`)
    }
}

// Membuat object Person
const yp = new Person("yp1", "yp2", "yp3")
yp.fullname()

const farhan = new Person("Farhan","Yudha","Pratama")
farhan.fullname()