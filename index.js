const audio = new Audio("public/gnome_woo.mp3");
const timeout_min = 25 * 1000;
const timeout_max = 10 * 60 * 1000;

const storage_key = "get_gnomed";
const storage = storageLoad();

hydrate();
playEffectRandomly();

function playEffectRandomly() {
  setTimeout(() => {
    playEffect();
    playEffectRandomly();
    playCountIncrement();
    storageSave();
    hydrate();
  }, rInt(timeout_min, timeout_max));
}

function playEffect() {
  audio.play()
}

function playCountIncrement() {
  storage.play_count = (storage.play_count || 0) + 1
}

function storageLoad() {
  const str = localStorage.getItem(storage_key) || "{}"
  return JSON.parse(str);
}

function storageSave() {
  const str = JSON.stringify(storage)
  localStorage.setItem(storage_key, str);
}

function hydrate() {
  const play_count = document.getElementById("play_count")
  play_count.innerHTML = `You've been gnomed ${storage.play_count || 0} times`;
}

function rInt(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
