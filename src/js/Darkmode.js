function Dmode() {
    const logoImage = document.getElementById("logoImage");
    const normalplay = document.getElementById("NP");
    const ffplay = document.getElementById("FF");
    const sdplay = document.getElementById("SD");
    const info = document.getElementById("infoL");
    const flogo = document.getElementById("flogo");
    const github = document.getElementById("github");

    if (logoImage.src.includes("lightlogo.svg")) {
        logoImage.src = "Media/darklogo.svg"; 
    } else if (logoImage.src.includes("darklogo.svg")) {
        logoImage.src = "Media/lightlogo.svg";
    }
    if (flogo.src.includes("lightlogo.svg")) {
        flogo.src = "Media/darklogo.svg"; 
    } else if (flogo.src.includes("darklogo.svg")) {
        flogo.src = "Media/lightlogo.svg";
    }

    if (normalplay.src.includes("DarkNPButton.svg")) {
        normalplay.src = "Media/LightNPButton.svg";
    } else if (normalplay.src.includes("LightNPButton.svg")) {
        normalplay.src = "Media/DarkNPButton.svg";
    }


    if (ffplay.src.includes("DarkFF.svg")) {
        ffplay.src = "Media/LightFF.svg";
    } else if (ffplay.src.includes("LightFF.svg")) {
        ffplay.src = "Media/DarkFF.svg";
    }


    if (sdplay.src.includes("lightsd.svg")) {
        sdplay.src = "Media/darksd.svg";
    } else if (sdplay.src.includes("darksd.svg")) {
        sdplay.src = "Media/lightsd.svg";
    }

    if (info.src.includes("darkinf.svg")) {
        info.src = "Media/lightinf.svg";
    } else if (info.src.includes("lightinf.svg")) {
        info.src = "Media/darkinf.svg";
    }

    if (github.src.includes("darkgit.svg")) {
        github.src = "Media/lightgit.svg";
    } else if (github.src.includes("lightgit.svg")) {
        github.src = "Media/darkgit.svg";
    }




    document.body.classList.toggle("dark-mode");

}