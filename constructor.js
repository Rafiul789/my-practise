var Rectangle = function(height, width) {

    this.height = height
    this.width = width

    this.draw = function() {
        console.log("this is rectangle");
        this.properties()
        console.log(this)

    }
    this.properties = function() {

        console.log("The height is " + this.height);
        console.log("The width is " + this.width);

    }


}

var rect1 = new Rectangle(10, 20);

rect1.draw()