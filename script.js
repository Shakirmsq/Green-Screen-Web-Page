// function upload() {
//     var text = document.getElementById("finput");

//     var name = text.value;
//     alert("You chose : " + name);
// }

// Also can be done by another technique


// Global variable

var image;
var grayimage;

function upload() {


    var fileinput = document.getElementById("finput");
    // create SimpleImage from chosen file
    image = new SimpleImage(fileinput);
    grayimage = new SimpleImage(fileinput);

    // Get canvas
    var canvas = document.getElementById("can");
    var canvas2 = document.getElementById("can2");

    // Draw image on canvas
    image.drawTo(canvas);
    grayimage.drawTo(canvas2);

}

function makeGray() {

    for (var px of image.values()) {

        var avg = px.getRed() + px.getGreen() + px.getBlue();
        px.setRed(avg);
        px.setGreen(avg);
        px.setBlue(avg);
    }
    var canvas2 = document.getElementById("can2");
    image.drawTo(canvas2);

}