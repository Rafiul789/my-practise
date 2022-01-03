var rect = {
    height: 100,
    width: 100,

    draw: function() {

        console.log("This is object literal");
        console.log("The height is " + this.height)
        console.log("The width is " + this.width)

    }



}

rect.draw();