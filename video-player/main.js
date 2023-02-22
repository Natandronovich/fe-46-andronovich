const video = document.querySelector('.video'); 
const btnPlay = document.querySelector(".play");           
const btnPause = document.querySelector(".pause");
const progress = document.querySelector(".progress");
const btnVolume = document.querySelector(".volume");
const btnMute = document.querySelector(".mute");
const btnSettings = document.querySelector(".settings");
const btnFullscreen = document.querySelector(".fullscreen");


function toggleVideoStatus() {
    if (video.paused){
        video.play()
    } else {
        video.pause()
    }
}
btnPlay.addEventListener('click', toggleVideoStatus)
video.addEventListener('click', toggleVideoStatus)


function stopVideo() {
    video.pause()
}
btnPause.addEventListener('click', stopVideo)


// function setProgress() {
//     video.curretTime = (progress.value * video.duration) / 100
// }
// progress.addEventListener('change', setProgress)