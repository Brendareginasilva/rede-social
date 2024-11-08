const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

 function vizualizarinformacoesglobais(s) {
    const res = await fetch (url)
  const dados = res.jason()
 const paragrafo = document.createElement("p")  
 paragrafo.classList.add('graficos-container__texto')
 paragrafo.innerHTML=`você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${totsl_pessoas_conectadasem alguma rede social e passam mèdia ${ dados.tempo_medio}` 
  horas conectadas.}
  console.log(paragrafo);
  const.container= document 
 }

 vizualizarinformacoesglobais()