console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3
//Export aponta para module.exports
exports = null
console.log(module.exports)

exports = {
    nome: 'Teste'
}
//Modo errado assim não retorna
console.log(module.exports)

module.exports = {publico: true}



