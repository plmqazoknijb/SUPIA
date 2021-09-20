var imgArray=new Array(); 

imgArray[0]="back1.jpg"; 
imgArray[1]="back2.jpg"; 
imgArray[2]="back3.jpg"; 
imgArray[3]="back4.jpg";

function showImage(){ 
var imgNum=Math.round(Math.random()*3); 
var objImg=document.getElementById("introimg"); 
objImg.src=imgArray[imgNum]; setTimeout(showImage,5000); 
}
