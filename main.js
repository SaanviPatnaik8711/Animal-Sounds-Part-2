//https://teachablemachine.withgoogle.com/models/DBZ2mjRbF/

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DBZ2mjRbF/model.json', modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}