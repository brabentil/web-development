function videoURL(link) {
    const video = document.getElementById("video");
    video.src = link;
    video.load();  
    video.play();  
}

function toggleMute() {
    const video = document.getElementById("video");
    const muteBtn = document.getElementById("mute-btn");

    if (video.muted) {
        video.muted = false;
        muteBtn.textContent = '🔊'; 
    } else {
        video.muted = true;
        muteBtn.textContent = '🔇'; 
    }
}
