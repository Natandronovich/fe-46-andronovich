const video = document.querySelector('.video'); 
// const video = document.getElementById("myVideo");
const btnPlay = document.querySelector(".btn__play");           
const btnMute = document.querySelector(".btn_mute");

function toggleVideoStatus() {
    if (video.paused){
        video.play()
    } else {
        video.pause()
    }
}
btnPlay.addEventListener('click', toggleVideoStatus)
// video.addEventListener('click', toggleVideoStatus)

function mute(btn,elem){
    var video = document.getElementById(elem);
    if (video.muted){
    video.muted = false;
    } else{
    video.muted = true;
    }
}