//nav bitton
document.addEventListener("DOMContentLoaded", function() {
    const navButton = document.getElementById("navButton");
    const paramsContainer = document.getElementById("ParamsContainer");
    const playButtonContainer = document.querySelector(".playButtonContainer");
    const paramButtonContainer = document.querySelector(".paramButtonContainer");
    const S1 = document.getElementById("S1");

    navButton.addEventListener("click", () => {
        if (window.innerWidth < 768) {
            if (playButtonContainer.style.display === "none") {
                playButtonContainer.style.display = "block";
                paramButtonContainer.style.display = "block";
                S1.style.width = "85%";
                S1.style.marginLeft = "10%";
                S1.style.marginRight = "5%";

            } else {
                paramsContainer.style.visibility = "Visible";
                playButtonContainer.style.display = "none";
                paramButtonContainer.style.display = "none";
                S1.style.width = "95%";
                S1.style.marginLeft = "3.1%";
                S1.style.marginRight = "2%";
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
