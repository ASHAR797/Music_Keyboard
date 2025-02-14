const clap = new Audio("sound/clap-10-36723.mp3");
const hihat = new Audio("sound/hihat-closing-98355.mp3");
const kick_btn = new Audio("sound/kick-greg-232043.mp3");
const openhat_btn = new Audio("sound/openhat-164697.mp3")
const boom_btn = new Audio("sound/impact-rubble-smash-betacut-1-00-01.mp3")
const ride_btn = new Audio("sound/long-ride-cymbal-2-36337.mp3")
const tom_btn = new Audio("sound/tom-0104-107508.mp3")
const tink_btn = new Audio("sound/ding-126626.mp3")
document.addEventListener("keydown", (e) => {
    if (e.key === "a" || e.key === "A") {
        clap.play();
    }
})
document.addEventListener("keydown", (e) => {
    if (e.key === "s" || e.key === "S") {
        hihat.play();
    }
})

document.addEventListener("keydown", (e) => {
    if (e.key === "d" || e.key === "D") {
        kick_btn.play();
    }
})

document.addEventListener("keydown", (e) => {
    if (e.key === "F" || e.key === "f")
        openhat_btn.play();
})

document.addEventListener("keydown", (e) => {
    if (e.key === "g" || e.key === "G") {
        boom_btn.play();
    }
})
document.addEventListener("keydown", (e) => {
    if (e.key === "J" || e.key === "j") {
        ride_btn.play();
    }
})

document.addEventListener("keydown", (e) => {
    if (e.key === "k" || e.key === "K") {
        tom_btn.play();
    }
})

document.addEventListener("keydown", (e) => {
    if (e.key === "L" || e.key === "l") {
        tink_btn.play();
    }
})