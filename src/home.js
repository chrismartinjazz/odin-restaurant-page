import ghostIcon from "./ghost_icon.svg";

export default function renderHome(content) {
  const container = document.createElement("div");
  container.setAttribute("class", "container hero");
  content.appendChild(container);

  const heroImage = document.createElement("div");
  heroImage.setAttribute("class", "hero__image");
  container.appendChild(heroImage);

  const ghostImage = document.createElement("img");
  ghostImage.src = ghostIcon;
  heroImage.appendChild(ghostImage);

  const heroHeading = document.createElement("h1");
  heroHeading.setAttribute("class", "hero__heading");
  heroHeading.textContent = "Spookalicious";
  heroImage.appendChild(heroHeading);

  const heroText = document.createElement("p");
  heroText.textContent = "Food's better spooky.";
  container.appendChild(heroText);
}