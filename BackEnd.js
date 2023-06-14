let docTitle = document.title;

window.addEventListener("blur", () => {
    document.title = "To com saudade ja ;-;"

});

window.addEventListener("focus", () => {

    document.title = docTitle;

});