function changeButtonColor() {
    var button = document.getElementById("coloredButton");

    if(button.classList.contains("btn-danger")){
        button.classList.remove("btn-danger");
        button.classList.add("btn-warning");
    }else if (button.classList.contains("btn-warning")) {
        button.classList.remove("btn-warning");
        button.classList.add("btn-success");
    } else if (button.classList.contains("btn-success")){
        button.classList.remove("btn-success");
        button.classList.add("btn-danger");
    }
}

function timeColor() {
    setInterval(changeButtonColor, 10000);
}
window.addEventListener("load", (event) => {
    timeColor();
});