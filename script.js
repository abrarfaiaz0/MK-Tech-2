let left = document.getElementById("left");
let right = document.getElementById("right");
let currentImg = 1;
let maxImages = 6;


left.onclick = function(){slideLeft();};
right.onclick = function(){slideRight();};

function slideRight(){
    img = document.getElementById("slide-image");
    if(currentImg==maxImages){
        currentImg=1;
    }
    else currentImg = currentImg + 1;
    img.src = "src/ss-" + currentImg +".jpg";
    currentImg = parseInt(currentImg);
    console.log(currentImg);
}

function slideLeft(){
    img = document.getElementById("slide-image");
    if(currentImg==1){
        currentImg=6;
    }
    else currentImg = currentImg - 1;
    img.src = "src/ss-" + currentImg +".jpg";
    currentImg = parseInt(currentImg);
    console.log(currentImg);
}