
difference=0
r_wristx=0
l_wristx=0


function setup(){
 canvas=createCanvas(1000,500)
    canvas.position(450,250)

video= createCapture(VIDEO)
video.size(500,300)
video.position(-50,250)

poseNet= ml5.poseNet(video,modelloaded)
poseNet.on('pose',gotresults)
}

function modelloaded(){
console.log("posenet has been intialized")
}

function gotresults(result){
if (result.length>0) {
    console.log(result)
 
 l_wristx=result[0].pose.leftWrist.x
 r_wristx=result[0].pose.rightWrist.x
difference=floor(l_wristx-r_wristx)
console.log("left="+l_wristx,"right="+r_wristx,"diff="+difference)
}
}

function draw() {
    background("#fffacd")
    textSize(difference)
   text("Hello you are awesome!",0,250)
    document.getElementById("hwans").innerHTML= difference+"px"

} 


