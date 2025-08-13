const imageContainer = document.getElementById("falling-images");
const images = Array.from({ length: 18 }, (_, i) => `images/ph${i + 1}.jpg`);
const flowers = [
  "flowers/flower1.png",
  "flowers/flower2.png",
  "flowers/flower3.png"
];

/* ------------------ Falling Images Animation ------------------ */
function createFallingImage(src) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("falling-wrapper");
  wrapper.style.left = Math.random() * 100 + "vw";

  const img = document.createElement("img");
  img.src = src;
  img.classList.add("falling-photo");
  wrapper.appendChild(img);
  imageContainer.appendChild(wrapper);

  setTimeout(() => morphToFlower(wrapper, img), 5000);
  setTimeout(() => wrapper.remove(), 10000);
}

function morphToFlower(wrapper, photo) {
  photo.style.opacity = '0';
  setTimeout(() => {
    const flower = document.createElement('img');
    flower.classList.add('flower-img');
    flower.src = flowers[Math.floor(Math.random() * flowers.length)];
    flower.alt = 'Flower';
    wrapper.appendChild(flower);
  }, 500);
}

function initializeFallingPhotos() {
  setInterval(() => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    createFallingImage(randomImage);
  }, 1200);
}
initializeFallingPhotos();

/* ------------------ Memory Reveal ------------------ */
function revealMemories() {
  document.getElementById("memory-gallery").classList.remove("hidden");
}

/* ------------------ Gift Box Open ------------------ */
function openMemoryBox() {
  const box = document.getElementById("memoryBox");

  // Only trigger if not already opened
  if (!box.classList.contains("opened")) {
    box.classList.add("opened");

    // Play sistersong.mp3 when box opens
    const bgMusic = document.getElementById("background-music");
    bgMusic.currentTime = 0;
    bgMusic.play().catch(err => {
      console.log("Music play blocked by browser, waiting for user interaction...");
    });
  }
}
