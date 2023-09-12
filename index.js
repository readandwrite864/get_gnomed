const audio = new Audio("public/gnome_woo.mp3");
const timeout_min = 25 * 1000;
const timeout_max = 3 * 60 * 1000;

playEffectRandomly();

function playEffectRandomly() {
  setTimeout(() => {
    playEffect();
    playEffectRandomly();
  }, rInt(timeout_min, timeout_max));
}

function playEffect() {
  audio.play()
}

function rInt(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
