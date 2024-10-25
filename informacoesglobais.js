const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

 function vizualizarinformacoesglobais(s) {
    const res = await fetch (url)
  const dados = res.jason()
  console.log(dados)  
}
