const images = [
  "best.jpg",
  "chat.jpg",
  "party.jpg",
  "wedding_outside.jpg",
  "wedding_umbrella.jpg",
];

const todayBackgroundImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(img/${todayBackgroundImage})`;
// const bgImage = document.createElement("img");
// bgImage.src = `img/${todayBackgroundImage}`;
// document.body.appendChild(bgImage);
