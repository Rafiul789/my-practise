function add(a, b) {

    return a + b

}

function myNum(a, b, Num) {

    let c = a + b
    let d = a - b

    function Adder() {

        let m = Num(a, b)

        return c * d * m

    }
    return Adder()

}

let Adder = myNum(6, 4, add)
console.log(Adder)