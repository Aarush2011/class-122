x = 0;
y = 0;

draw_rect="";
draw_circle="";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML="System is listening please speak";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content = event.result[0][0].transcript;
    document.getElementById("status").innerHTML="speech has recognized as :"+content;
    if(content=="circle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="started drawing circle";
        draw_circle="start";
    }
    if(content=="rectangle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="started drawing rectangle";
        draw_rect="start";
    }

}
function draw(){
    if(draw_circle=="start"){
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="circle is drawn";
        draw_circle="";
    }
    if(draw_rect=="start"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML="Rectangle is drawn";
        draw_rect="";
    }
}