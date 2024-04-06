function changeMessage() {
    document.getElementById("message").innerHTML = "Text changed successfully!";
};

function changeBodyColour() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
};

function createParagraph() {
    const x = document.getElementById("container");
    const para = document.createElement("p");
    const node = document.createTextNode("New paragraph added dynamically!");
    para.appendChild(node);

    x.appendChild(para);
};


window.addEventListener("load", createParagraph());
window.addEventListener("load", changeBodyColour());