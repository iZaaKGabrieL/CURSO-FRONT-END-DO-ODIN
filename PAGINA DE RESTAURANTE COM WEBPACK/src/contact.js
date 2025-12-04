export default function loadContact() {
  const container = document.createElement("div");
  container.classList.add("contact");

  container.innerHTML = `
    <h2>Contato</h2>

    <div class="contact-item">
      <span class="icon">📞</span>
      <p>+55 (11) 99999-0000</p>
    </div>

    <div class="contact-item">
      <span class="icon">✉️</span>
      <p>contato@laverdetavola.com</p>
    </div>

    <div class="contact-item">
      <span class="icon">📍</span>
      <p>Rua Roma, 128 — São Paulo, SP</p>
    </div>

    <div class="contact-item">
      <span class="icon">🕒</span>
      <p>Seg a Dom — 11h às 23h</p>
    </div>
  `;

  return container;
}
