const fr = require('face-recognition')

const detector = fr.FaceDetector()

const img = fr.loadImage('./captains.jpg')

//const detector = fr.FaceDetector();
console.log('detecting faces')
const faceSize = 150
const faces =  detector.detectFaces(img, faceSize)

const win = new fr.ImageWindow()
win.setImage(fr.tileImages(faces))
fr.hitEnterToContinue()
