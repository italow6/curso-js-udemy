const soma = function (x,y){
    return x+y
}

const imprimirResultado = function(a, b, operacao=soma){
    console.log(operacao(a,b))
}

imprimirResultado(3,4)

let pessoa = {
    nome: "italo",
    falar(){
        console.log(this.nome)
    }
}

pessoa.falar()