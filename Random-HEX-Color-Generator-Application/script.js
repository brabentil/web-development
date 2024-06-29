const containerEl = document.querySelector(".container");

for (let index = 0; index < 100; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");

    const colorCodeEl = document.createElement("span");
    colorCodeEl.classList.add("color-code");
    colorContainerEl.appendChild(colorCodeEl);

    const copyButtonEl = document.createElement("button");
    copyButtonEl.innerText = "copy";
    colorContainerEl.appendChild(copyButtonEl);

    containerEl.appendChild(colorContainerEl);
}

const randomColor = () => {
    const chars = "0123456789ABCDEF";
    const colorCodeLength = 6;

    let colorCode = "";

    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars[randomNum];
    }
    return "#" + colorCode;
};

const mainColorContainerEls = document.querySelectorAll(".color-container");

const generateColor = () => {
    for (let i = 0; i < mainColorContainerEls.length; i++) {
        const colorContainerEl = mainColorContainerEls[i];
        const newColorCode = randomColor();
        const colorCodeEl = colorContainerEl.querySelector(".color-code");

        colorContainerEl.style.backgroundColor = newColorCode;
        colorCodeEl.innerText = newColorCode;
    }
};


generateColor();

mainColorContainerEls.forEach(colorContainerEl => {
    const copyButtonEl = colorContainerEl.querySelector("button");
    copyButtonEl.addEventListener("click", () => {
        const colorCodeEl = colorContainerEl.querySelector(".color-code");
        navigator.clipboard.writeText(colorCodeEl.innerText).then(() => {
            alert(`Copied the color code: ${colorCodeEl.innerText}`);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });
});

