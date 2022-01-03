var rect = {
    height: 50,

    width: 50,

    draw: function() {
        console.log('This is first rectangle');
        this.rectProperties()

    },

    rectProperties: function() {

        console.log('Height is ' + this.height)
        console.log('Width is ' + this.width)



    }





}

rect.draw()