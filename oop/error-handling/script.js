// Error Handling

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

try {
        console.log(Math.sum())
} catch (error) {
    console.log(`kesalahan: ${error}`)
} finally{
    console.log("memakai finally program tetap akan jalan walaupun ada error atau tidak")
}

class Counter{
    
    #counter = 1


    sum(){
        try{
            return this.#counter
        }finally{
            this.#counter++
        }
    }

}