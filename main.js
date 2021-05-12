Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri) { document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; }); 
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/xcnEjwNvj/model.json', modelLoaded);

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotresult)
}

function gotresult(error, result){
    if(error){
        console.error("error")
    }
    else{
        console.log(result);
        document.getElementById("result_name").innerHTML = result[0].label;
        p = result[0].label
        if(p == "Horns Emoji"){
            document.getElementById("result_emoji").innerHTML = "&#129304;";
        }
        if(p == "finger-thumb gesture"){
            document.getElementById("result_emoji").innerHTML = "&#128076;";
        }
        if(p == "Thumbs Up"){
            document.getElementById("result_emoji").innerHTML = "&#128077;";
        }
        if(p = "Thumbs Down"){
            document.getElementById("result_emoji").innerHTML = "&#128078;";
        }
    }
}
function modelLoaded(){};