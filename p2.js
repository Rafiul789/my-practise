let myNum = [1, 4, 56, 34, 43, 23, 12]

// let sum = 0

// for (let i = 0; i < myNum.length; i++) {

//     sum += myNum[i]


// }

// console.log(sum)

let sum = 0
for (let i = 0; i < myNum.length; i++) {

    if (myNum[i] % 2 == 1) {
        sum += myNum[i]

    }



}
console.log(sum)