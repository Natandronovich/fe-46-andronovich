const video = document.querySelector('.video'); 
// const video = document.getElementById("myVideo");
// const btnPlay = document.querySelector(".play");           
// const btnPause = document.querySelector(".pause");

function toggleVideoStatus() {
    if (video.paused){
        video.play()
    } else {
        video.pause()
    }
}
// btnPlay.addEventListener('click', toggleVideoStatus)
video.addEventListener('click', toggleVideoStatus)