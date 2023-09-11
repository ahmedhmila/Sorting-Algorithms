//aamek l hover effect
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))],
    randomString = length => {
        const additionalChars = length - chars.length;
        const randomChars = Array.from(Array(additionalChars)).map(randomChar).join("");
        return randomChars;
    }
document.addEventListener("DOMContentLoaded", function() {

    const card = document.querySelector(".card"),
        letters = card.querySelector(".card-letters");



    const handleOnMove = e => {
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        letters.style.setProperty("--x", `${x}px`);
        letters.style.setProperty("--y", `${y}px`);

        letters.innerText = randomString(5000);
    }
    card.onmousemove = e => handleOnMove(e);

    card.ontouchmove = e => handleOnMove(e.touches[0]);
});