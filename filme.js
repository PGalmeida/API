//Pedro Gomes de ALmeida 25082
//Jennifer Nayara Mendonça 25034
async function buscaFilme(){

    let Title = document.getElementById('Title').value

    let resposta = await fetch(`https://www.omdbapi.com/?apikey=404f9c5a&t=${Title}`)

    let dados = await resposta.json()

    document.getElementById(`Year`).value = dados.Year 
    document.getElementById(`Released`).value = dados.Released
    document.getElementById(`Rated`).value = dados.Rated
    document.getElementById(`Runtime`).value = dados.Runtime
    document.getElementById(`Genre`).value = dados.Genre
    document.getElementById(`Director`).value = dados.Director
    document.getElementById(`Poster`).value = dados.Poster
    
}