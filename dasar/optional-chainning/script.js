// Memakai optional chainning

let data = {
    names : {
        // name : {
        //     yp : "farhan"
        // }
    }
};

// Optional chaining dipakai untuk mengecek apakah object mengandung nullish atau tidak, jika tidak mengandung nullish maka akan dicek lagi setelahnya apakah nullish atau tidak

// Jika object mengandung nullish maka akan diganti menjadi undefined
let chainning = data?.names?.name.yp

console.log (chainning)