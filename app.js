const songEffects = {
    "a": new Audio("sound/clap-10-36723.mp3"),
    "s": new Audio("sound/hihat-closing-98355.mp3"),
    "d": new Audio("sound/kick-greg-232043.mp3"),
    "f": new Audio("sound/openhat-164697.mp3"),
    "g": new Audio("sound/impact-rubble-smash-betacut-1-00-01.mp3"),
    "j": new Audio("sound/long-ride-cymbal-2-36337.mp3"),
    "k": new Audio("sound/tom-0104-107508.mp3"),
    "l": new Audio("sound/ding-126626.mp3"),
    "b": new Audio("sound/fnd100-konk-zooben-saxophone-96462.mp3"),
    "c": new Audio("sound/metal-clang-284809.mp3"),
    "e": new Audio("sound/bright-synth-stab-253465.mp3"),
    "h": new Audio("sound/beep-sound-8333.mp3"),
    "i": new Audio("sound/wah-dealio-89016.mp3"),
    "m": new Audio("sound/violin-impulse-97627.mp3"),
    "n": new Audio("sound/stab-f-01-brvhrtz-224599.mp3"),
    "o": new Audio("sound/trumpet-effect-01-127188.mp3"),
    "p": new Audio("sound/xylophone-percussion-97343.mp3"),
    "q": new Audio("sound/old-organ-snare-drum-81080.mp3"),
    "r": new Audio("sound/mega-bass-sub-drop-effect-240472.mp3"),
    "t": new Audio("sound/kick-greg-232043.mp3"),
    "u": new Audio("sound/ding-126626.mp3"),
    "v": new Audio("sound/echo-105584.mp3"),
    "w": new Audio("sound/chime-sound-7143.mp3"),
    "x": new Audio("sound/clap-10-36723.mp3"),
    "y": new Audio("sound/impact-rubble-smash-betacut-1-00-01.mp3"),
    "z": new Audio("sound/long-ride-cymbal-2-36337.mp3"),
}
document.addEventListener("keydown", function (Event) {
    if (songEffects[Event.key]) {
        songEffects[Event.key].play();
    }
})