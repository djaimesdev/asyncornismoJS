function suma (valor1, valor2) {
    return  valor1 + valor2
}

function calc(valor1,valor2, callback){
    return callback(valor1,valor2)
}

console.log(calc(1,2,suma))

