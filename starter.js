const fr = require('face-recognition')

const image = fr.loadImage('./msdhoni.jpg');
const win = new fr.ImageWindow();

// display image
win.setImage(image);

// drawing the rectangle into the displayed image
//win.addOverlay(rectangle)

// pause program until key pressed
fr.hitEnterToContinue();