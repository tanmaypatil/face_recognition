const fr = require('face-recognition');
const fs = require('fs');
const recognizer = fr.FaceRecognizer();
let  imageList = require('./imageTrainList.json');
let modelState = require('./trainedModel.json');
const detector = fr.FaceDetector();

function trainAModel ( fileName  , className ) { 
   let  msimg3 = fr.loadImage('./'+fileName);  
   const faceImage = detector.detectFaces(msimg3);
   recognizer.addFaces(faceImage,className,15);
}

function loadAndTrainModels() {
    console.log("loading serialised model");
    recognizer.load(modelState);
    for (let image of imageList) {
       let fileName = image.fileName ;
       let className = image.tag ;
       trainAModel(fileName , className );
    }
    let modelState = recognizer.serialize();
    fs.writeFileSync('trainedModelNew.json', JSON.stringify(modelState));
}

if (require.module === main) {
    loadAndTrainModels();
}