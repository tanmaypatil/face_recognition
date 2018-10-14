const fr = require('face-recognition');
const imageArray = require('images.json');
const recognizer = fr.FaceRecognizer();
let  modelState = require('./model.json');
recognizer.load(modelState);
console.log("running prediction");
let startTime = new Date();
let startHr = startTime.getHours();
let startMin = startTime.getMinutes();
let startSc = startTime.getSeconds();

console.log(startHr + ":" + startMin + ":" + startSc);
let msimg1 = fr.loadImage('./msdhoni_large.png');
let detector = fr.FaceDetector();
let  faceImage = detector.detectFaces(msimg1);
let  predictions = recognizer.predictBest(faceImage[0]);
console.log(predictions);

let  endTime = new Date();
let endHr = endTime.getHours();
let  endMin = endTime.getMinutes();
let endSc = endTime.getSeconds();
console.log(endHr + ":" + endMin + ":"+ endSc);

console.log("loading a small file msdhoni_inter.png");


startTime = new Date();
startHr = startTime.getHours();
startMin = startTime.getMinutes();
startSc = startTime.getSeconds();
console.log(startHr + ":" + startMin + ":" + startSc);
let msimg2 = fr.loadImage('./msdhoni4.jpg');
let detector2 = fr.FaceDetector();

let faceImage2 = detector2.detectFaces(msimg2);
if ( Array.isArray ( faceImage2))
{
    console.log("faceimage2 is array "+faceImage2.length);
}
else 
{
    console.log("faceimage2 is not a array ");
}
predictions = recognizer.predictBest(faceImage2[0]);
console.log(predictions);
endTime = new Date();
endHr = endTime.getHours();
endMin = endTime.getMinutes();
endSc = endTime.getSeconds();
console.log(endHr + ":" + endMin + ":"+ endSc);

console.log("running on a grayscale image ");
startTime = new Date();
startHr = startTime.getHours();
startMin = startTime.getMinutes();
startSc = startTime.getSeconds();
console.log(startHr + ":" + startMin + ":" + startSc);
msimg2 = fr.loadImage('./msdhoni4_grayscale.jpg');
detector2 = fr.FaceDetector();

faceImage2 = detector2.detectFaces(msimg2);
if ( Array.isArray ( faceImage2))
{
    console.log("faceimage2 is array "+faceImage2.length);
}
else 
{
    console.log("faceimage2 is not a array ");
}
predictions = recognizer.predictBest(faceImage2[0]);
console.log(predictions);
endTime = new Date();
endHr = endTime.getHours();
endMin = endTime.getMinutes();
endSc = endTime.getSeconds();
console.log(endHr + ":" + endMin + ":"+ endSc);


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
   let msimg2 = fr.loadImage('./msdhoni4_grayscale.jpg');
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




