var properties = function(width, height) {
    return {

        width: width,
        height: height,

        draw: function() {
            console.log('This is a rectangle');

            this.rectProperties()

        },
        rectProperties: function() {

            console.log('The height is ' + this.height);
            console.log('The width is ' + this.width);

        }





    }


}

var rect1 = properties(10, 20);

rect1.draw();

var rect2 = properties(15, 25);

rect2.draw();