function setup() {
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function preload() {
    img = loadImage("dog_cat.jpg");   
}

function draw() {
    image(video,0,0,380,380);
    if(status !=""){
            objectDetector.detect(video, gotResults);
     document.getElementById("status").innerHTML = "status: Objects Have Been Detected";
    }
}

function modelLoaded() {
    console.log("Model Loaded");
    status = true;
}

function gotResults(error,results){
    if (error) {
        console.error(error);
    }
    console.log(results);
    objects = results;
}