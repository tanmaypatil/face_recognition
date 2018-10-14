const fr = require('face-recognition');

const win = new fr.ImageWindow();



console.log("Loading  viraat images ");
const img1 = fr.loadImage('./viraatkohli.png');
const img2 = fr.loadImage('./viraatkohli2.png');
const msimg1 = fr.loadImage('./msdhoni.jpg');
//win.setImage(img1);
//win.setImage(img2);

/*
const vimg1  = detector.detectFaces(img1);
const vimg2  = detector.detectFaces(img2); */
const detector = fr.FaceDetector();
const vsimg1  = detector.detectFaces(msimg1);


let  viraat_faces = [ ] ;
viraat_faces.push(vimg1);
viraat_faces.push(vimg2);*/

console.log('detecting ms dhoni');
//const win = new fr.ImageWindow()
//win.setImage(fr.tileImages(vsimg1));
win.setImage( fr.tileImages(vsimg1));
fr.hitEnterToContinue()


//win.setImage(fr.tileImages(viraat_faces));
//fr.hitEnterToContinue();
/*
console.log("Loading  smith images ");
const smimg1 = fr.loadImage('./smith.png');
const smimg2 = fr.loadImage('./stevesmith2.png');

win.setImage(smimg1);
win.setImage(smimg2);

const vimg3  = detector.detectFaces(smimg1);
const vimg4  = detector.detectFaces(smimg2);

//const smith_faces = [ vimg3, vimg4] ;
let smith_faces = [];
smith_faces.push(vimg3);
smith_faces.push(vimg4);

console.log("Loading msd images ");
const msimg1 = fr.loadImage('./msdhoni.png');
const msimg2 = fr.loadImage('./msdhoni2.png');

const faceSize = 150
const vimg5  = detector.detectFaces(msimg1,faceSize);
const vimg6  = detector.detectFaces(msimg2,faceSize);




let dhoni_faces = [];
dhoni_faces.push(vimg5);
dhoni_faces.push(vimg6);


const recognizer = fr.FaceRecognizer();

const numJitters = 15;

recognizer.addFaces(dhoni_faces, 'msd',numJitters); 
recognizer.addFaces(smith_faces, 'smith',numJitters);
recognizer.addFaces(viraat_faces, 'viraat',numJitters);



console.log("running prediction");
const msimg3 = fr.loadImage('./msdhoni3.jpg');

const faceImage = detector.detectFaces(msimg3);
const predictions = recognizer.predictBest(faceImage);
console.log(predictions);
*/