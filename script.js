// function upload() {
//     var text = document.getElementById("finput");

//     var name = text.value;
//     alert("You chose : " + name);
// }

// Also can be done by another technique

function upload() {
    var fileinput = document.getElementById("finput");

    // create SimpleImage from chosen file
    var image = new SimpleImage(fileinput);

    // Get canvas
    var canvas = document.getElementById("can");

    // Draw image on canvas
    image.drawTo(canvas);

}