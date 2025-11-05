// script principal: lista rápida de links e comportamento simples
document.addEventListener('DOMContentLoaded', ()=>{
  // exemplo: foco no primeiro link do projeto
  const firstLink = document.querySelector('.project .btn');
  if(firstLink) firstLink.addEventListener('click', ()=> console.log('Abrindo projeto'));
});
