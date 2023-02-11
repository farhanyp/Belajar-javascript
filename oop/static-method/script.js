// Menggunakan static method
// Static method biasanya digunakan sebagai utility

class Math{

    static sum(...numbers){
        let total = 0

        for(const number of numbers){
            total += number
        }

        return total
    }

}

console.log(Math.sum(1,1,1))