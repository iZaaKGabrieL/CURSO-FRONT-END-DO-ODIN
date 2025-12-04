
export default function loadMenu(){
    const content = document.getElementById("content");

  const section = document.createElement("section");
  section.classList.add("menu");

  const title = document.createElement("h1");
  title.textContent = "Menu Italiano";

  // Container dos pratos
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  // Lista de pratos
// LISTA DE PRATOS — MENU PREMIUM
const pratos = [
  {
    nome: "Spaghetti alla Carbonara",
    descricao: "Clássico romano, cremoso, pancetta crocante e pecorino.",
    imagem: "https://images.pexels.com/photos/998246/pexels-photo-998246.jpeg?_gl=1*14ehzwp*_ga*MTU0ODk5NDgyOS4xNzY0Nzc3OTky*_ga_8JE65Q40S6*czE3NjQ3Nzc5OTEkbzEkZzEkdDE3NjQ3Nzk3MjckajM5JGwwJGgw",
    preco: "R$ 40,00"
  },
  {
    nome: "Fettuccine Alfredo",
    descricao: "Massa fresca ao molho amanteigado finalizado com parmesão.",
    imagem: "https://images.pexels.com/photos/11220209/pexels-photo-11220209.jpeg?_gl=1*ebj82r*_ga*MTU0ODk5NDgyOS4xNzY0Nzc3OTky*_ga_8JE65Q40S6*czE3NjQ3Nzc5OTEkbzEkZzEkdDE3NjQ3Nzk3ODgkajQ2JGwwJGgw",
    preco: "R$ 45,00"
  },
  {
    nome: "Lasanha alla Bolognese",
    descricao: "Camadas de massa, carne e molho artesanal, tudo perfeitamente gratinado.",
    imagem: "https://images.pexels.com/photos/31119071/pexels-photo-31119071.jpeg?_gl=1*ujpjgx*_ga*MTU0ODk5NDgyOS4xNzY0Nzc3OTky*_ga_8JE65Q40S6*czE3NjQ3Nzc5OTEkbzEkZzEkdDE3NjQ3Nzk4MzgkajU5JGwwJGgw",
    preco: "R$ 55,00"
  },
  {
    nome: "Ravioli di Ricotta",
    descricao: "Raviolis recheados com ricotta fresca e molho pomodoro leve.",
    imagem: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
    preco: "R$ 38,00"
  },
  {
    nome: "Gnocchi al Pesto Genovese",
    descricao: "Nhoque artesanal mergulhado em pesto de manjericão.",
    imagem: "https://images.pexels.com/photos/1256875/pexels-photo-1256875.jpeg?_gl=1*21ricq*_ga*MTU0ODk5NDgyOS4xNzY0Nzc3OTky*_ga_8JE65Q40S6*czE3NjQ3Nzc5OTEkbzEkZzEkdDE3NjQ3Nzk4ODckajEwJGwwJGgw",
    preco: "R$ 42,00"
  },
  {
    nome: "Risotto ai Funghi",
    descricao: "Arroz cremoso com cogumelos italianos e parmesão.",
    imagem: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
    preco: "R$ 48,00"
  },
  {
    nome: "Pizza Margherita",
    descricao: "Tomate fresco, mozzarella e manjericão. Simples e perfeita.",
    imagem: "https://images.pexels.com/photos/6605220/pexels-photo-6605220.jpeg?_gl=1*g7tuc8*_ga*MTU0ODk5NDgyOS4xNzY0Nzc3OTky*_ga_8JE65Q40S6*czE3NjQ3Nzc5OTEkbzEkZzEkdDE3NjQ3Nzk5NzQkajQ4JGwwJGgw",
    preco: "R$ 50,00"
  },
  {
    nome: "Pizza Pepperoni",
    descricao: "Clássica, visual limpo, fundo branco — catálogo perfeito.",
    imagem: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?_gl=1*14fg0vf*_ga*MTU0ODk5NDgyOS4xNzY0Nzc3OTky*_ga_8JE65Q40S6*czE3NjQ3Nzc5OTEkbzEkZzEkdDE3NjQ3ODAwOTAkajE3JGwwJGgw",
    preco: "R$ 55,00"
  },
  {
    nome: "Bruschetta Tradizionale",
    descricao: "Pão crocante, tomate marinado e azeite extravirgem.",
    imagem: "https://images.unsplash.com/photo-1473093226795-af9932fe5856",
    preco: "R$ 25,00"
  },
  {
    nome: "Insalata Caprese",
    descricao: "Mozzarella fresca, tomate e manjericão. Minimalista e elegante.",
    imagem: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    preco: "R$ 30,00"
  },
  {
    nome: "Tiramisù",
    descricao: "Camadas suaves de mascarpone, café e cacau — o clássico italiano.",
    imagem: "https://images.pexels.com/photos/2138849/pexels-photo-2138849.jpeg?_gl=1*1p5qv8t*_ga*MTU0ODk5NDgyOS4xNzY0Nzc3OTky*_ga_8JE65Q40S6*czE3NjQ3Nzc5OTEkbzEkZzEkdDE3NjQ3Nzk2MzQkajUwJGwwJGgw",
    preco: "R$ 28,00"
  },
  {
    nome: "Panna Cotta",
    descricao: "Sobremesa cremosa e leve com calda suave. Estética impecável.",
    imagem: "https://images.unsplash.com/photo-1505253468034-514d2507d914",
    preco: "R$ 26,00"
  }
];


  // Criar cards de cada prato
  pratos.forEach(prato => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = prato.imagem;

    const nome = document.createElement("h3");
    nome.textContent = prato.nome;

    const desc = document.createElement("p");
    desc.textContent = prato.descricao;

    const preco = document.createElement("p");
    preco.textContent = prato.preco;

    card.appendChild(img);
    card.appendChild(nome);
    card.appendChild(desc);
    card.appendChild(preco);

    menuContainer.appendChild(card);
  });

  section.appendChild(title);
  section.appendChild(menuContainer);

  // Limpar e carregar
  content.innerHTML = "";
  content.appendChild(section);
}
{}
    
