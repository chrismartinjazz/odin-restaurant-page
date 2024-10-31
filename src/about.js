export default function renderAbout(content) {
  const paragraphs = [
    `Woooooooo!`,
    `Wooooooooooooooooo!`,
    `WooooooooOOOOOooooo...OK we are not actually <span class="highlight">ghosts</span>.`,
    `But we love <span class="highlight">ghosty</span> and <span class="highlight">halloweeny</span> things. And we believe in the power of <span class="highlight">spookiness</span> to bring out the best flavours even if they are the flavours of fear!`,
    `If you love <span class="highlight">halloween</span>, scary stories, <span class="highlight">eyeballs</span>, and drinking <span class="highlight">ectoplasm</span>, we think you'll love our <span class="highlight">spooktacular</span> cafe.`,
  ]

  const container = document.createElement("div");
  container.setAttribute("class", "container about");
  content.appendChild(container);

  const aboutHeading = document.createElement("h2");
  aboutHeading.setAttribute("class", "about__heading");
  container.appendChild(aboutHeading);

  const aboutText = document.createElement("div");
  aboutText.setAttribute("class", "about__text");
  container.appendChild(aboutText);

  for (const paragraph in paragraphs) {
    const newParagraph = document.createElement("p");
    newParagraph.innerHTML = paragraphs[paragraph];
    aboutText.appendChild(newParagraph);
  }
}