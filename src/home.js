export default function loadHome() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const hero = document.createElement("section");
  hero.classList.add("hero-split");

  // Left (image)
  const left = document.createElement("div");
  left.classList.add("hero-left");

  const img = document.createElement("img");
  img.src = "https://images.unsplash.com/photo-1529042410759-befb1204b468";
  left.appendChild(img);

  // Right (text)
  const right = document.createElement("div");
  right.classList.add("hero-right");

  const title = document.createElement("h1");
  title.textContent = "A Essência da Itália em Cada Detalhe";

  const subtitle = document.createElement("p");
  subtitle.classList.add("subtitle");
  subtitle.textContent = "Culinária sofisticada, preparada com autenticidade e paixão.";

  const button = document.createElement("button");
  button.classList.add("cta-btn");
  button.textContent = "Ver Menu";


  // evento de clique já pra trocar aba, se quiser
  button.addEventListener("click", () => {
    document.querySelector("#menu-btn").click();
  });

  right.appendChild(title);
  right.appendChild(subtitle);
  right.appendChild(button);

  hero.appendChild(left);
  hero.appendChild(right);

  content.appendChild(hero);
}
