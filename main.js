var SpeechRecognition=window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function Start() {
    document.getElementById("textbox").innerHTML="";
    recognition.start()  
}
recognition.onresult = function(event) {
console.log(event);
var content=event.results[0][0].transcript;
console.log(content);
document.getElementById("textbox").innerHTML=content;
if (content=="take my selfie") {
    speak();   
}
}
function speak() {
    var synth = window.speechSynthesis;
    speakdata="taking new selfie in 5 seconds";
    var utterance= new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterance);
    Webcam.attach(camera);
    setTimeout(function(){
  take_snapshot() ;
  save()
    },5000);
}
Webcam.set({
width:360,height:250,image_format:"jpeg",jpeg_quality:90
});
camera=document.getElementById("camera");
function take_snapshot() {
  Webcam.snap(function(data_url){
document.getElementById("result").innerHTML="<img id='img1' src='"+data_url+"'>";
  });
}
function save() {
    link=document.getElementById("link")
    img=document.getElementById("img1").src;
    link.href=img;
    link.click();
}