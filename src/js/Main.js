//nav bitton
document.addEventListener("DOMContentLoaded", function() {
    const navButton = document.getElementById("navButton");
    const paramsContainer = document.getElementById("ParamsContainer");
    const playButtonContainer = document.querySelector(".playButtonContainer");
    const paramButtonContainer = document.querySelector(".paramButtonContainer");

    navButton.addEventListener("click", () => {
        if (window.innerWidth < 768) {
            if (paramsContainer.style.visibility === "hidden") {
                paramsContainer.style.visibility = "visible";
                playButtonContainer.style.display = "block";
                paramButtonContainer.style.display = "block";
            } else {
                paramsContainer.style.visibility = "hidden";
                playButtonContainer.style.display = "none";
                paramButtonContainer.style.display = "none";
            }
        } else {
            if (paramsContainer.style.visibility === "hidden") {
                paramsContainer.style.visibility = "visible";
            } else {
                paramsContainer.style.visibility = "hidden";
            }
        }
    });
});

