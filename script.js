var allimg = document.getElementsByClassName("slide");

const right = document.querySelector(".right");
const left = document.querySelector(".left");
var i = 0;
right.addEventListener("click", function(){
    if(i==3){
        i=-1;
        allimg[i+1].style.display="block";
        allimg[3].style.display="none";
        i=0;
    }else{
        allimg[i+1].style.display="block";
        allimg[i].style.display="none";
        i++;
    }
    
});
left.addEventListener("click", function(){
    if(i==0){
        allimg[i].style.display="none";
        allimg[3].style.display="block";
    i=4;
    }else
    allimg[i].style.display="none";
    allimg[i-1].style.display="block";
    i--;
});










