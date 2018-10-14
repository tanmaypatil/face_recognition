const fr = require('face-recognition');
const fs = require('fs');
const recognizer = fr.FaceRecognizer();
var  modelState = require('./model.json');


function photoDedup ( fileName ) {
// Restoring model .
   console.log("loading serialised model");
   recognizer.load(modelState);

   console.log("running prediction");
   console.log("process variables "+process.argv[2]);
   let fileName = process.argv[2];
   let msimg3 = "";
   if (fileName ) {
      msimg3 = fr.loadImage('./'+fileName);
   }
   else {
    msimg3 = fr.loadImage('./msdhoni3.jpg');
   }
   const detector = fr.FaceDetector();
   const faceImage = detector.detectFaces(msimg3);
   
   const predictionsAll = recognizer.predict(faceImage[0]);
   console.log(predictionsAll);
   const predictions = recognizer.predictBest(faceImage[0]);
   console.log(predictions);
   let id = predictions.className ;
   recognizer.addFaces(faceImage,id,15);
   modelState = recognizer.serialize();
   fs.writeFileSync('model.json', JSON.stringify(modelState));
}

