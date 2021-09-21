var i = 0;
var images = [];
var slideTime = 4000; // 3 seconds
images[0] = 'main_image/main1.jpg';
images[1] = 'main_image/main2.jpg';
images[2] = 'main_image/main3.jpg';
images[3] = 'main_image/main4.jpg';
function changePicture() {
    document.body.style.backgroundImage = "url(" + images[i] + ")";
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}
window.onload = changePicture;