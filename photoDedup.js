const fr = require('face-recognition');
const fs = require('fs');
const recognizer = fr.FaceRecognizer();
var  modelState = require('./model.json');
let players = require('./players.json');
const path = require('path') ;

class photoDedup {
   constructor ( repName ) {
       this.modelRepository  = repName ;
       this.rootPath = path.join ( '.','selfie.png') ;
       console.log(this.rootPath );  
       recognizer.load(modelState);
   }

   performPhotoDedup ( fileName ) {
     
      const imgFile = "./selfie.png";
      console.log(imgFile);
      const startTime = new Date();
      const startHr = startTime.getHours();
      const startMin = startTime.getMinutes();
      const startSc = startTime.getSeconds();
      console.log(startHr + ":" + startMin + ":" + startSc);
      const img = fr.loadImage(imgFile);
      const detector = fr.FaceDetector();
      const faceImage = detector.detectFaces(img);
      const predictions = recognizer.predictBest(faceImage[0]);
      const endTime = new Date();
      const endHr = endTime.getHours();
      const endMin = endTime.getMinutes();
      const endSc = endTime.getSeconds();
      console.log(endHr + ":" + endMin + ":"+ endSc);
      console.log(predictions);
      let id = predictions.className ;
      let dedupPlayer = {};
      //Check id is matching which player
      for ( let val of players) {
        if(val.tag === id ) {
            console.log("dedup found "+id) ;
            dedupPlayer = val;
        }
    }
     
      /*fs.unlink(imgFile, (err) => {
        if (err) throw err;
        console.log('successfully deleted file'+imgFile);
      });*/
      return JSON.stringify(dedupPlayer);
   }
}
module.exports = { photoDedup : photoDedup } ;