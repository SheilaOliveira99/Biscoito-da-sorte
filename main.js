// Seleciona os elementos de tela e a imagem pelo ID
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const img1 = document.querySelector("#img1");
const btnReset = document.querySelector("#btnReset");
const screen2Text = screen2.querySelector("p")


// FAZ COM QUE UMA HORA SUMA O SCREEN1 E APAREÇA O SCREEN2 E VICE VERSA.
function toggleScreens(screen1, screen2) {
  screen1.classList.add("hide");
  screen2.classList.remove("hide"); 

  if (!screen2.classList.contains("hide")) {
    //Seleciona o "p", sempre com o ID, e adiciona a classe de animação feita no CSS 
    const rotatingText = screen2.querySelector("#rotatingText");
    rotatingText.classList.add("rotating");
    
    //Gera as frases aleatórias do Array.
    const phrasesRandom = phrases[Math.floor(Math.random() * phrases.length)];
    screen2Text.textContent = phrasesRandom;
  }



}

//Array com frases diferentes
  const phrases = [
    'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
    'Não importa o tamanho da montanha, ela não pode tapar o sol.',
    'O bom-senso vale mais do que muito conhecimento.',
    "São os nossos amigos que nos ensinam as mais valiosas lições.",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."
  ];

// Mostra screen2 ao clicar no img1
img1.addEventListener(
  'click', () => toggleScreens(screen1, screen2));

// Retorna para screen1 ao clicar no botão
btnReset.addEventListener(
  'click', () => toggleScreens(screen2, screen1));

