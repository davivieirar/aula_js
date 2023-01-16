//1
const meuArray=[true, 'teste1', 'teste2', 'teste3', 'teste4', 'teste5', 'teste6', 'teste7', 'teste8', 9]

//2
console.log(meuArray[9])

//3. a)
for(let i=0;i<10;i++){console.log(meuArray[i])}
//3. b)
function imprimir(item) {console.log(item);}  ;  meuArray.forEach(imprimir)

//4. a)
const meuArrayMutante=meuArray.map(x => 2)
console.log(meuArrayMutante)

//5. a)
const numeros=meuArrayMutante.map(x=>x+Math.floor(Math.random()*10))
for(let j=0;j<numeros.length;j++){
    console.log(numeros[j])
}
//5. b)
for(let l=0;l<numeros.length;l++){
    if(numeros[l]%2!=0){
        console.log(numeros[l])
    }
}
//5. c)
numeros.forEach(function(item){
    if(item <= 4){

    }else{
        console.log(item)
    }
})
//5. d)
const pares=numeros.filter(item=>item%2==0)
console.log(pares)

//6. a)
var cores=['verde', 'amarelo', 'laranja', 'vermelho', 'azul']
const upperCasedArray = String(cores).toUpperCase().split(",")
console.log(upperCasedArray)
//6. b)
cores.splice(1,1)
console.log(cores)
//6. c)
for (let i = 0; i < cores.length; i++) {
    cores[i] = cores[i][0].toUpperCase() + cores[i].substring(1);
}
console.log(cores)

