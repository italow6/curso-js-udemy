const avo = { nome:'Joao Raimundo', sobrenome:'Santos'}
const pai = {__proto__: avo, nome:'Iran'}
const filho = {__proto__: pai, nome:'Italo'}

console.log(avo.nome, avo.sobrenome)