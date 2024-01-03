import { conectaApi } from "./conectaApi.js";
import construyeCard from "./mostrarVideo.js";

async function buscaVideo(e){
  e.preventDefault()
  const datosPesquiza = document.querySelector('[data-pesquiza]').value;
  const busca = await conectaApi.buscaVideo(datosPesquiza)
  const lista = document.querySelector('[data-lista]')

  while(lista.firstChild){
    lista.removeChild(lista.firstChild)
  }
  
  busca.forEach(e => lista.appendChild(construyeCard(e.titulo, e.descricao, e.url, e.imagem)))

}

const btnPesquiza = document.querySelector('[data-btn-pesquiza]')

btnPesquiza.addEventListener('click', e => buscaVideo(e))
