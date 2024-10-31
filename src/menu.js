export default function renderMenu(content) {
  const cardText = [
    {
      heading: "Eyeballs on Toast",
      text: "Eggs on toast, but eyeballs instead. With gravy! Sheep eyeballs, for extra deliciousness.",
      cost: 14,
    },
    {
      heading: "Avocado Slime Salad",
      text: "What can we say? Avocado is slimy! And delicious. Nothing against some avocado.",
      cost: 18,
    },
    {
      heading: "Ectoplasmic Soup",
      text: "Ghosts drip ectoplasm. We collect it. It makes a really good stock!",
      cost: 12,
    },
  ]

  let AUDollar = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: "AUD",
    maximumFractionDigits: 0,
  });

  const container = document.createElement("div");
  console.log(content);
  container.setAttribute("class", "container menu");
  content.appendChild(container);

  for (const currentCard in cardText) {
    const menuCard = document.createElement("div");
    menuCard.setAttribute("class", "menu__card");
    const menuHeading = document.createElement("h2");
    menuHeading.setAttribute("class", "menu__heading");
    menuHeading.innerText = cardText[currentCard].heading;
    const menuText = document.createElement("div");
    menuText.setAttribute("class", "menu__text");
    menuText.innerText = cardText[currentCard].text;
    const menuCost = document.createElement("div");
    menuCost.setAttribute("class", "menu__cost");
    menuCost.innerText = AUDollar.format(cardText[currentCard].cost);

    menuCard.appendChild(menuHeading);
    menuCard.appendChild(menuText);
    menuCard.appendChild(menuCost);
    container.appendChild(menuCard);
  }
}