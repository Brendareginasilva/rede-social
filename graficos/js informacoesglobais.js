const url = 'https://rawgihthubusercontent.com/guilermeonrails/api/main/dados-globais.json'
async function vizualizarinformacoesglobais(params) {
    const res = await fetch (url)
    const dados = await res.json()
    const pessoasconctadas = (dados.total_pessoas_conectados / 1e9)
    const pessoasnomundo = ( dados.total_pessoas_)
}