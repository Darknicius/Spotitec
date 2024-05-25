//alert("Olá, seja bem vinda(o) à atividade!")//

let meusAlbuns = [
  {
    "nome_do_album": "Clube dos Canalha",
    "nome_da_banda": "Matanza",
    "ano_do_album": 2016,
    "imagem_da_capa_do_album": "https://akamai.sscdn.co/letras/360x360/albuns/d/9/6/6/22400.jpg",
    "link" : "https://www.youtube.com/watch?v=HQcEDB8Pfeg"
  },
  {
    "nome_do_album": "Mtg coracao",
    "nome_da_banda": "Topic",
    "ano_do_album": 2023,
    "imagem_da_capa_do_album": "https://i.scdn.co/image/ab67616d00001e020b2b4c60c3527f5e0593dc18",
    "link" : "https://www.youtube.com/watch?v=tlNAzbInKKw"
  },
  {
    "nome_do_album": "Hybrid Theory",
    "nome_da_banda": "Linkin Park",
    "ano_do_album": 2000,
    "imagem_da_capa_do_album": "https://upload.wikimedia.org/wikipedia/pt/2/23/Linkin_Park_Hybrid_Theory.jpg",
    "link" : "https://www.youtube.com/watch?v=D2ts2GWOSv8"
  },
  {
    "nome_do_album": "Lalala",
    "nome_da_banda": "Song by Y2K and bbno$ ",
    "ano_do_album": 2019,
    "imagem_da_capa_do_album": "https://i1.sndcdn.com/artworks-000592799000-xioddh-t500x500.jpg",
    "link" : "https://www.youtube.com/watch?v=N2Y2vQ-1m7M"
  },
  {
    "nome_do_album": "Dilatacao hipnotica 6.0",
    "nome_da_banda": "Song by DJ FLG and Mc Gw",
    "ano_do_album": 2023,
    "imagem_da_capa_do_album": "https://i.scdn.co/image/ab67616d0000b273b51ebdf71d4516ce8630ff39"
  },
  {
    "nome_do_album": "Dilatacao hipnotica 5.0",
    "nome_da_banda": "Song by DJ CRAZY 013",
    "ano_do_album": 2023,
    "imagem_da_capa_do_album": "https://i1.sndcdn.com/artworks-KDEtowl7e800EVTr-ByyPsA-t500x500.jpg",
    "link" : "https://www.youtube.com/watch?v=7Rp0r4A4J3E"
  },
  {
    "nome_do_album": "melodia alucinogena",
    "nome_da_banda": "Song by DJ AK BR",
    "ano_do_album": 2022,
    "imagem_da_capa_do_album": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/78/b9/f9/78b9f93b-b9b4-f69c-1f32-a09a6852ee8c/0.jpg/1200x1200bf-60.jpg",
    "link" : "https://www.youtube.com/watch?v=I25qH7sDI98"
  },
  {
    "nome_do_album": "Montagem glitch",
    "nome_da_banda": "Song by DJ LA Beat and MC GW",
    "ano_do_album": 2021,
    "imagem_da_capa_do_album": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/cb/26/29/cb2629aa-0ed2-bdf2-72d5-8489702b266b/024543590873_cover.jpg/400x400cc.jpg",
    "link" : "https://www.youtube.com/watch?v=4xAgrjzXQGE"
  },
  {
    "nome_do_album": "M4",
    "nome_da_banda": "Teto e Matuê",
    "ano_do_album": 2021,
    "imagem_da_capa_do_album": "https://i.scdn.co/image/ab67616d0000b273487fb212b617972491c1f61a",
    "link" : "https://www.google.com/search?q=M4&sca_esv=c61a3541004a5e3a&rlz=1C1GCEU_pt-BRBR1094BR1095&tbm=vid&sxsrf=ACQVn09TzoNqnX1JixHh_P2uguW9LiQ-2Q:1707568892028&source=lnms&sa=X&ved=2ahUKEwidlPTp5aCEAxXNrZUCHdD5CZUQ_AUoAnoECAEQBA&biw=1440&bih=773&dpr=1#"
  },
  {
    "nome_do_album": "Mtg - Ótimos Videogames",
    "nome_da_banda": "TLAQ1ZEN",
    "ano_do_album": 2023,
    "imagem_da_capa_do_album": "https://i.scdn.co/image/ab67616d00001e0296f6e5bd89352949cac04234",
    "link" : "https://www.youtube.com/watch?v=d6QytaJd_ro"
  },
  {
    "nome_do_album": "Maçã Verde",
    "nome_da_banda": "MC Hariel e Caio Passos",
    "ano_do_album": 2020,
    "imagem_da_capa_do_album": "https://i1.sndcdn.com/artworks-AD7U5tG3Vxxo-0-t500x500.jpg",
    "link" : "https://www.google.com/search?q=%22Ma%C3%A7%C3%A3+Verde&sca_esv=c61a3541004a5e3a&rlz=1C1GCEU_pt-BRBR1094BR1095&biw=1440&bih=773&tbm=vid&sxsrf=ACQVn08xSja7t_Cl1Q9qDzSkiE9e_Wn9_g%3A1707569033420&ei=iW_HZYqcGcaf1sQP882DgAg&ved=0ahUKEwjKhKqt5qCEAxXGj5UCHfPmAIAQ4dUDCA4&uact=5&oq=%22Ma%C3%A7%C3%A3+Verde&gs_lp=Eg1nd3Mtd2l6LXZpZGVvIg0iTWHDp8OjIFZlcmRlMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLAUjlCFAAWABwAHgAkAEAmAF1oAF1qgEDMC4xuAEDyAEA-AEC-AEB&sclient=gws-wiz-video#"
  },
  {
    "nome_do_album": "Saque",
    "nome_da_banda": "Mystic!, Uxie Kid e BocaoTudoDues",
    "ano_do_album": 2021,
    "imagem_da_capa_do_album": "https://i1.sndcdn.com/artworks-5CS2viWXRIqRQeUo-o9biBg-t500x500.jpg",
    "link" : "https://www.youtube.com/watch?v=ugOmV9yBoNo"
  },
  {
    "nome_do_album": "Cradles",
    "nome_da_banda": "Sub urban",
    "ano_do_album": 2019,
    "imagem_da_capa_do_album": "https://i.scdn.co/image/ab67616d0000b273a327368f2a7a3b8b56ce242e",
    "link" : "https://www.youtube.com/watch?v=KBtk5FUeJbk"
  },
  {
    "nome_do_album": "Xanguai",
    "nome_da_banda": "Gapes",
    "ano_do_album": 2023,
    "imagem_da_capa_do_album": "https://source.boomplaymusic.com/group10/M00/08/03/56e6f1f5fb9741e082cbaf560c9b4c2c_464_464.jpg",
    "link" : "https://www.google.com/search?q=xangai+musica&sca_esv=89401e48948f66be&rlz=1C1GCEU_pt-BRBR1094BR1095&hl=en&tbm=vid&sxsrf=ACQVn08tRz-22Ou7N_6jRvgEAr_q1j1wgA:1707570505636&source=lnms&sa=X&ved=2ahUKEwi2_qrr66CEAxUEpZUCHShFAooQ_AUoAXoECAMQAw&biw=1440&bih=773&dpr=1#k"
  },
  {
    "nome_do_album": "Sleep Paralysis Demon",
    "nome_da_banda": "Ethan Bortnick",
    "ano_do_album": 2023,
    "imagem_da_capa_do_album": "https://i.scdn.co/image/ab67616d0000b27314a0f2ba1da01779d2896249",
    "link" : "https://www.youtube.com/watch?v=pOjc_5Dxeuk"
  },
  {
    "nome_do_album": "Sem Aliança no Dedo",
    "nome_da_banda": "Mc xenom",
    "ano_do_album": 2022,
    "imagem_da_capa_do_album": "https://i1.sndcdn.com/artworks-3vrLjdtKL5JAnVu9-SKrW1Q-t500x500.jpg",
    "link" : "https://www.google.com/search?q=sem+alian%C3%A7a+no+dedo&sca_esv=89401e48948f66be&rlz=1C1GCEU_pt-BRBR1094BR1095&hl=en&biw=1440&bih=773&tbm=vid&sxsrf=ACQVn0-yCCkCDwBlo9R96hk_9OWjADzZeg%3A1707570542540&ei=bnXHZb_JILHV1sQPrPyasAo&oq=Sem+Alian%C3%A7a+no+Dedo&gs_lp=Eg1nd3Mtd2l6LXZpZGVvIhRTZW0gQWxpYW7Dp2Egbm8gRGVkbyoCCAAyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIFEAAYgAQyBhAAGBYYHkjuD1AAWNoCcAF4AJABAJgBdqABdqoBAzAuMbgBAcgBAPgBAfgBAqgCCsICBxAjGOoCGCc&sclient=gws-wiz-video#"
  },
  {
    "nome_do_album": "Vuco bom 2",
    "nome_da_banda": "Mc livinho e DJ Topo",
    "ano_do_album": 2021,
    "imagem_da_capa_do_album": "https://i.scdn.co/image/ab67616d0000b273a369f43bef3d405ad0235c9f",
    "link" : "https://www.google.com/search?q=Vuco+bom+2&sca_esv=89401e48948f66be&rlz=1C1GCEU_pt-BRBR1094BR1095&hl=en&biw=1440&bih=773&tbm=vid&sxsrf=ACQVn0_J0rqbbIwM6rke2IsC6Z4OL5SdUA%3A1707570574755&ei=jnXHZeLHLYXX1sQPqNiAoAc&ved=0ahUKEwjixqWM7KCEAxWFq5UCHSgsAHQQ4dUDCA4&uact=5&oq=Vuco+bom+2&gs_lp=Eg1nd3Mtd2l6LXZpZGVvIgpWdWNvIGJvbSAyMggQABiABBjLATIGEAAYFhgeMgYQABgWGB4yCxAAGIAEGIoFGIYDSNYKUABYkANwAXgAkAEAmAGPAaABjwGqAQMwLjG4AQPIAQD4AQH4AQKoAgrCAgcQIxjqAhgn&sclient=gws-wiz-video#"
  },
  {
    "nome_do_album": "Balança e Bafora",
    "nome_da_banda": "Mc juninho da VD",
    "ano_do_album": 2022,
    "imagem_da_capa_do_album": "https://i.scdn.co/image/ab67616d0000b273dbeb04e99a57c2f9c0e75658",
    "link" : "https://www.google.com/search?q=Balan%C3%A7a+e+Bafora&sca_esv=89401e48948f66be&rlz=1C1GCEU_pt-BRBR1094BR1095&hl=en&biw=1440&bih=773&tbm=vid&sxsrf=ACQVn0_fLBZGP8mHLX5oZYwXwc82v98xPw%3A1707570606965&ei=rnXHZee9Os3O1sQP4cy9yAo&ved=0ahUKEwjnzNOb7KCEAxVNp5UCHWFmD6kQ4dUDCA4&uact=5&oq=Balan%C3%A7a+e+Bafora&gs_lp=Eg1nd3Mtd2l6LXZpZGVvIhFCYWxhbsOnYSBlIEJhZm9yYTIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5I_QVQAFgAcAB4AJABAJgBqgGgAaoBqgEDMC4xuAEDyAEA-AEC-AEB&sclient=gws-wiz-video#"
  },
  
]

function organizaEmLinhasEColunas(albuns) {
  const numeroDeColunas = 3
  const numeroDeLinhas = Math.ceil(albuns.length / numeroDeColunas)

  let linhas = new Array(numeroDeLinhas)

  let indiceAlbuns = 0;

  for (let i = 0; i < numeroDeLinhas; i++) {
    linhas[i] = new Array(numeroDeColunas)

    for (let j = 0; j < numeroDeColunas; j++) {
      if (indiceAlbuns < albuns.length) {
        linhas[i][j] = albuns[indiceAlbuns++]
      }
    }
  }

  return linhas
}

function criaCardHtmlParaAlbum(album) {
  return `
  <div class="album-card">
    <img class="album-cover" src="${album.imagem_da_capa_do_album}" alt="">
    <div class="album-info">
      <h5 class="album-title">${album.nome_do_album}</h5>
      <p class="album-artist">${album.nome_da_banda}</p>
      <p class="album-year">${album.ano_do_album}</p>
      <a href="${album.link}" class="album-link">Link</a>
    </div>
  </div>
  `;
}

function criaLinhaDeAlbuns(uma_linha) {
  const div = document.createElement("div");
  div.classList.add("album-row");
  div.innerHTML = uma_linha.map(coluna => criaCardHtmlParaAlbum(coluna)).join("\n");
  return div;
}

function criaListaDeAlbuns(linhas) {
  const div = document.createElement("div")
  div.classList.add("col-lg-12", "px-0", "container")
  div.setAttribute("id", "album-list")

  linhas.forEach(linha => {
    div.appendChild(criaLinhaDeAlbuns(linha))
  });

  return div
}

function atualizaListaDeAlbuns() {
  const listaDeAlbuns = document.getElementById("album-list")
  const albunsEmbaralhados = embaralhar(meusAlbuns);
  listaDeAlbuns.replaceWith(criaListaDeAlbuns(organizaEmLinhasEColunas(meusAlbuns)))
}


function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


window.addEventListener("load", () => {
  onload()
});


let searchinput = document.getElementById("searchInput")
let searchBtn = document.getElementById("search-button")

searchBtn.addEventListener("click", function(e){
  e.preventDefault()
  let pesquisa = searchinput.value.trim().toLowerCase()
  let AlbunsFiltrados = meusAlbuns.filter((album)=> {
    return album.nome_do_album.toLowerCase().includes(pesquisa)
  })
  const listaDeAlbuns = document.getElementById("album-list")
  listaDeAlbuns.replaceWith(criaListaDeAlbuns(organizaEmLinhasEColunas(AlbunsFiltrados)))
})

document.getElementById('submit-button').addEventListener('click', function() {
  const musica = {
    "nome_do_album": document.getElementById('nome_do_album').value,
    "nome_da_banda": document.getElementById('nome_da_banda').value,
    "ano_do_album": document.getElementById('ano_do_album').value,
    "imagem_da_capa_do_album": document.getElementById('imagem_da_capa_do_album').value,
    "link" : document.getElementById('link').value
  };
  meusAlbuns.push(musica);
  localStorage.setItem("data" , JSON.stringify(meusAlbuns));
  atualizaListaDeAlbuns()
  
}); 

function onload() {

  new_data_json = localStorage.getItem("data")
  let new_data_js = JSON.parse(new_data_json)
  if(new_data_js && new_data_js.length != 0){
    meusAlbuns = new_data_js
  }
  console.log(new_data_js)

  let listaDeAlbuns = document.getElementById("album-list")
  listaDeAlbuns.replaceWith(criaListaDeAlbuns(organizaEmLinhasEColunas(JSON.parse(localStorage.getItem("data")))))
  atualizaListaDeAlbuns()
}

async function pegarDadosDaAPI(nomeDoAlbum) {
  //const nomeDoAlbum = "Is This It"
  const respostaDaApi = await fetch(`https://api.gvillalta.com/albums/${encodeURIComponent(nomeDoAlbum)}`).then(response => response.json())
  return respostaDaApi
}

let listaDeMusicas = pegarDadosDaAPI("Is This It")

if (!array.isArray(listaDeMusicas)) {
  listaDeMusicas = array.from(listaDeMusicas);
  console.log(listaDeMusicas) 
}








