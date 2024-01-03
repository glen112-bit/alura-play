async function listaVideos(){
  const connetcion = await fetch('http://localhost:3000/videos')
  const res = await connetcion.json()
  return res
}
listaVideos();

async function criaVideo(titulo, descricao, url, imagem){
  const conexion = await fetch('http://localhost:3000/videos', {
    method: 'POST',
    headers: {
      "Content-type":"application/json"
    },
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} visualizaciones`,
      url: url,
      imagem: imagem
    })
  });
  const conexionConvertida = await conexion.json();
  return conexionConvertida
}

async function buscaVideo (termoDeBusca) {
  const conexion = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
  const conexionConvertida = await conexion.json()
  return conexionConvertida;
}

export const conectaApi = {
  listaVideos,
  criaVideo,
  buscaVideo
}
