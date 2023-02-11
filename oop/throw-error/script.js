// Throw Error

class Math{

    static sum(...numbers){

        // Mengirim Error
        if(numbers.length === 0){
            throw new Error("tidak boleh kosong")
        }
        let total = 0

        for(const number of numbers){
            total += number
        }

        return total
    }

}


console.log(Math.sum())