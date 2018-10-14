const fr = require('face-recognition');
const imageArray = require('./images.json');
const recognizer = fr.FaceRecognizer();
let  modelState = require('./model.json');
recognizer.load(modelState);
console.log("running prediction");

analyseAll(imageArray);

function analyseAll(imageArray) {
    for (let count = 0 ; count < imageArray.length ; count ++) {
        analyseImage(imageArray[count].fileName , imageArray[count].desc);
    }
}
/* function to analyse the image 
and  do the prediction */
function analyseImage ( imageName , desc ) {
   console.log( desc); 
   let startTime = new Date();
   let startHr = startTime.getHours();
   let startMin = startTime.getMinutes();
   let startSc = startTime.getSeconds();
   console.log(startHr + ":" + startMin + ":" + startSc);
   let msimg2 = fr.loadImage(imageName);
   let detector2 = fr.FaceDetector();

   let faceImage2 = detector2.detectFaces(msimg2);
   if ( Array.isArray ( faceImage2)) {
       console.log("faceimage2 is array "+faceImage2.length);
   }
   else {
   
    console.log("faceimage2 is not a array ");
   }
   let predictions = recognizer.predictBest(faceImage2[0]);
   console.log(predictions);
   let endTime = new Date();
   let endHr = endTime.getHours();
   let endMin = endTime.getMinutes();
   let endSc = endTime.getSeconds();
   console.log(endHr + ":" + endMin + ":"+ endSc);
}




