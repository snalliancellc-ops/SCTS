/* hero-bg.js
 * Rotates background images for the .feature-hero section.
 */
(function () {
  const folder = 'assets/hero-images/';
  const imageFiles = ['1.png', '2.jpg', '3.jpg', '4.jpg'];
  const imageCount = imageFiles.length;
  const intervalMs = 5000;

  const container = document.getElementById('feature-hero-bg');
  if (!container) return;

  const layerA = container.querySelector('.layer-a');
  const layerB = container.querySelector('.layer-b');
  if (!layerA || !layerB) return;

  let current = 0;
  let showA = true;

  function setBg(el, index) {
   const url = folder + imageFiles[index];
   el.style.backgroundImage = `url("${url}")`;
  }

  function preload(index) {
   const img = new Image();
   img.src = folder + imageFiles[index];
  }

  for (let i = 0; i < imageCount; i++) preload(i);

  setBg(layerA, 0);
  layerA.style.opacity = '1';
  layerB.style.opacity = '0';

  function next() {
   const nextIndex = (current + 1) % imageCount;
   const incoming = showA ? layerB : layerA;
   const outgoing = showA ? layerA : layerB;

   setBg(incoming, nextIndex);
   incoming.style.transition = 'opacity 1s ease-in-out';
   outgoing.style.transition = 'opacity 1s ease-in-out';

   incoming.style.opacity = '1';
   outgoing.style.opacity = '0';

   showA = !showA;
   current = nextIndex;
  }

  setInterval(next, intervalMs);
})();
