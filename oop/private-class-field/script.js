// Membuat private class field

class Counter{
    #counter = 0

    increment(){
        this.#counter++
    }

    decrement(){
        this.#counter--
    }

    get(){
        return this.#counter
    }
}

const counter = new Counter()
counter.decrement()
counter.decrement()
counter.decrement()
counter.increment()
counter.increment()

console.log(counter.get())