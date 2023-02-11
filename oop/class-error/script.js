// Error Handling

class ValidationError extends Error{
    constructor(msg, field){
        super(msg)
        this.field = field
    }
}

class Math{

    static sum(...numbers){

        // Mengirim Error
        if(numbers.length === 0){
            throw new ValidationError("tidak boleh kosong")
        }
        let total = 0

        for(const number of numbers){
            total += number
        }

        return total
    }

}

try {
        console.log(Math.sum())
} catch (error) {
    if(error instanceof ValidationError){
        console.log(`kesalahan: ${error}`)
    }
} finally{
    console.log("memakai finally program tetap akan jalan walaupun ada error atau tidak")
}
