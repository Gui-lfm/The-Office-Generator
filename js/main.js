const episodioAletorio = document.querySelector(".principal__botao")
const divEp = document.querySelector('[data-epGerado]')

const sectionEp = document.createElement('section')
sectionEp.classList.add("episodio-gerado", "container")

episodioAletorio.addEventListener("click", (evento)=>{

    //evento.preventDefault()
    const numAleatorio = Math.floor(Math.random() * episodios.length)

    let titulo = episodios[numAleatorio].titulo
    let imagem = episodios[numAleatorio].imagem
    let sinopse = episodios[numAleatorio].sinopse

    sectionEp.innerHTML = criaSection(titulo, imagem, sinopse)
    divEp.appendChild(sectionEp);

    
})

function criaSection(titulo, imagem, sinopse){

    const linhaEpisodioGerado = `<h2 class="episodio-gerado__titulo" >${titulo}</h2>
    <img class="episodio-gerado__imagem" src=${imagem} alt="">
    <p class="episodio-gerado__descricao" id="ep_gerado">${sinopse}</p>`

    return linhaEpisodioGerado
}
