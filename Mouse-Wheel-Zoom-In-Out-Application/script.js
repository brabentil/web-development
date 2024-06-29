const zoomScreen = document.querySelector(".container");

let zoom = 1;
const zoomSpeed = 0.1;

document.addEventListener("wheel", (e) => {
    e.preventDefault();

    if (e.deltaY > 0) {
        zoom += zoomSpeed;
    } else {
        zoom -= zoomSpeed;
    }

   
    if (zoom < 0.1) zoom = 0.1; 
    zoomScreen.style.transform = `scale(${zoom})`;
});
