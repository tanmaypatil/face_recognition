const fr = require('face-recognition');

const detector = fr.FaceDetector();

console.log("Loading  viraat images ");
const img1 = fr.loadImage('./viraatkohli.jpg');
const img2 = fr.loadImage('./viraatkohli2.jpg');

const vimg1  = detector.detectFaces(img1);
const vimg2  = detector.detectFaces(img2);

let  viraat_faces = [] ;
viraat_faces = vimg1.concat(vimg2);

console.log("Loading  smith images ");
const smimg1 = fr.loadImage('./stevesmith3.jpg');
const smimg2 = fr.loadImage('./stevesmith2.jpg');

const vimg3  = detector.detectFaces(smimg1);
const vimg4  = detector.detectFaces(smimg2);

//const smith_faces = [ vimg3, vimg4] ;
let smith_faces = [];
smith_faces = vimg3.concat(vimg4);
console.log("post smith");

console.log("Loading msd images ");
const msimg1 = fr.loadImage('./msdhoni.png');
const msimg2 = fr.loadImage('./msdhoni2.png');

const vimg5  = detector.detectFaces(msimg1);
const vimg6  = detector.detectFaces(msimg2);
let dhoni_faces = [] ;
dhoni_faces = vimg5.concat(vimg6);

console.log(" Post dhoni faces");
const recognizer = fr.FaceRecognizer();

const numJitters = 15
recognizer.addFaces(smith_faces, 'smith',numJitters);
recognizer.addFaces(viraat_faces, 'viraat',numJitters);
recognizer.addFaces(dhoni_faces, 'msd',numJitters); 


console.log("running prediction");
const msimg3 = fr.loadImage('./msdhoni3.jpg');

const faceImage = detector.detectFaces(msimg3);
if ( Array.isArray(faceImage)) {
    console.log("is array");
}
else {
    console.log("not a array");
}

const predictionsAll = recognizer.predict(faceImage[0]);
console.log(predictionsAll);
const predictions = recognizer.predictBest(faceImage[0]);
console.log(predictions);


