
document.addEventListener('DOMContentLoaded', () => {
  /** All sections that represent a “screen”. */
  const screens = document.querySelectorAll('.screen');

  /** Show the screen whose id is `scr-${name}` (e.g. name = 'worlds' → #scr-worlds). */
  function showScreen(name) {
    screens.forEach(s => s.classList.add('hidden'));               // hide all
    const target = document.getElementById(`scr-${name}`);
    if (target) target.classList.remove('hidden');
  }

  /** Simple navigation handler used by the side‑buttons that have data‑nav. */
  function navHandler(e) {
    const dest = e.currentTarget.dataset.nav; // e.g. "title", "worlds", "cats"
    if (dest) showScreen(dest);
  }

  /* -----------------------------------------------------------------
   * 1️⃣ Wire the *main* menu buttons (PLAY, CAT BASE)
   * ----------------------------------------------------------------- */
  const btnPlay   = document.getElementById('btnPlay');
  const btnCats   = document.getElementById('btnCats');
  const startBtn  = document.getElementById('startBtn');   // “DEFEND! ▶”

  if (btnPlay)   btnPlay.addEventListener('click',  () => showScreen('worlds'));
  if (btnCats)   btnCats.addEventListener('click',  () => showScreen('cats'));
  if (startBtn)  startBtn.addEventListener('click', () => {
    // hide the start overlay, then start the battle loop
    document.getElementById('startOverlay').classList.add('hidden');
    // you probably have a function called `startBattle()` in game.js
    if (typeof startBattle === 'function') startBattle();
  });

  /* -----------------------------------------------------------------
   * 2️⃣ Wire every side button that uses data‑nav (← TITLE, ← WORLDS, …)
   * ----------------------------------------------------------------- */
  document.querySelectorAll('[data-nav]').forEach(btn => {
    btn.addEventListener('click', navHandler);
  });

  /* -----------------------------------------------------------------
   * 3️⃣ Optional: expose `showScreen` globally for debugging
   * ----------------------------------------------------------------- */
  window.showScreen = showScreen;
});