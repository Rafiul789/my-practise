var rect = {
    height: 100,

    width: 100,

    draw: function() {

        console.log("Welcome to this property")

        this.printProperties()

    },
    printProperties: function() {

        console.log("Height is " + this.height)

        console.log("Width is " + this.width)

    }






}

function myNew() {
    height = 50,

        width = 50

    rect.printProperties()


}
myNew()




rect.draw()

var another = {

    height: 50,

    width: 50,
    call: rect.printProperties

}

console.log(another)

another.call()