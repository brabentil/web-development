const heading = document.querySelector(".heading");
const text = heading.textContent;
const alpha = text.split("");
heading.textContent = "";

for (let i = 0; i < alpha.length; i++) {
    heading.innerHTML += `<span>${alpha[i]}</span>`;
}

let count = 0;

const onArrival = () => {
    const span = heading.querySelectorAll("span")[count];
    span.classList.add("fade");
    count++;
    if (count >= alpha.length) {
        clearInterval(timer); 
    }
};

let timer = setInterval(onArrival, 140);
