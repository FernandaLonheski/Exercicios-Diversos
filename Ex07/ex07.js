// Progama que mostra os números primos até 200

function numprim(num) {
    var nume = new Array()
    for (var i = 0; i <= num; i ++){
        if(eprimo(i)){
            nume.push(i)
        }
    }
    return nume
}
function eprimo(num) {
    for(let i = 2; i <num; i++)
    if(num % i === 0) {
        return false
    }
    return num > 1
}
console.log(numprim(200))