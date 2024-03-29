import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector('[data-formulario]');


async function criarVideo(e){
  e.preventDefault()
  const imagem = document.querySelector('[data-imagem]').value;
  const titulo = document.querySelector('[data-titulo]').value;
  const url = document.querySelector('[data-url]').value;
  const descricao = Math.floor(Math.random * 10).toString();
  
  await conectaApi.criaVideo( titulo, descricao, url, imagem)
  window.location.href = '../pages/envio-concluido.html'
}

formulario.addEventListener('submit', e => criarVideo(e))

