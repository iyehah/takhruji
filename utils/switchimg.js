// File: util/switchimg.js

let currentImage = 'img1';

export function switchImage(imgElement, img1, img2) {
  if (!imgElement) return;
  setInterval(() => {
    currentImage = currentImage === 'img1' ? 'img2' : 'img1';
    imgElement.src = currentImage === 'img1' ? img1 : img2;
  }, 5000);
}
