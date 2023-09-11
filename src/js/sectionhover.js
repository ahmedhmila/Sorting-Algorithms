document.addEventListener("DOMContentLoaded", function() {
    const card = document.querySelector(".infocard-container"),
        letters = card.querySelector(".section-letters");

    let x = 0,
        y = 0,
        xDirection = 1,
        yDirection = 1,
        speed = 1;

    const rect = card.getBoundingClientRect();

    const updatePosition = () => {
        if (x < 0 || x > rect.width) {
            xDirection *= -1;
        }

        if (y < 0 || y > rect.height) {
            yDirection *= -1;
        }

        x += xDirection * speed;
        y += yDirection * speed;

        letters.style.setProperty("--x", `${x}px`);
        letters.style.setProperty("--y", `${y}px`);

        letters.innerText = randomString(6900);
    }

    setInterval(updatePosition, 100); //vitess mtaa l update ltaa letters

    function randomString(length) {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
});