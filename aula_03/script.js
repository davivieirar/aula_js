// const salada=['banana','uva','maçã','pera'];
// console.log("salada 1:",salada)

// salada.push('leite consensado')
// console.log("salada 2:",salada)

// salada.push('leite em pó')
// console.log("salada 3:",salada)

// const removido=salada.pop()
// console.log("salada 4:",salada)
// console.log(removido)

// salada.splice(4, 1)
// console.log("salada 5:",salada)

// salada.shift() //remove o primeiro
// console.log("salada 6:",salada)

// salada.unshift('banana')
// console.log('salada 7:',salada)

// let nomes=['Ronier','Larissa','Vandecir','Davi','Alessandro']
// let posicao=nomes.indexOf('Davi')
// if(posicao===-1){
//     console.log('Nome não encontrado')
// }else{
//     console.log(nomes[posicao])
// }

// const cores=['azul','branco','vermelho','branco']

// function falar(parametroFala){
//     console.log('Estou falando')
// }
// falar('Olá FS12')

// function grito(parametroFala){
//     console.log(parametroFala.toUpperCase())
// }

// function somar(p1,p2){
//     return p1+p2
// }
// console.log(somar(1,2))

// function imprimir(funcaoImprimir,texto){
//     funcaoImprimir(texto)
// }
// imprimir(console.log,'Olá mundo')


// const salada=['banana','maçã','uva','pera']
// function capsLk(valor){
//     return valor.toUpperCase()
// }
// const saladaUpper=salada.map((fruta)=>fruta.toUpperCase())
// console.log(salada)
// console.log(saladaUpper)

// const nomes=['Ronier','Larissa','Vandecir','Davi','Alessandro','Davi']    
// function filtrarNomes(nome){
//         if(nome.toUpperCase()==='davi'.toUpperCase){
//         return nome;
//     }
// }
// console.log(nomes.filter(filtrarNomes)+'Quantidade de nomes :'+nomes.filter(filtrarNomes).length)
// console.log(nomes.includes('Ronier'))

// let frutas=['a','b','c','d']

// let i
// for(i=0;i<frutas.length;i++){
    
//     console.log(frutas)
// }   

// let frutas=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
// for(let i=0;i<frutas.length;i++){
// let salvo=i
// if(i%2!=0){
//     console.log(frutas[i])
// }
// }

// let pares=[]
// for(let i=0;i<20;i++){
//     if(i%2==0){
//         pares.push(i+2)
//         i+2
//     }
// }
// console.log(pares)

// const frutas=['abacaxi','banana','pera','uva']
// frutas.forEach((value, index, frutas) => console.log(value, index, frutas))

// const endereco=['Soriano Albuquerque','100','apt 6','Fortaleza','Ceará']
// console.log(endereco.join(', '))

numeros=[1,2,3,4,5]
const maior=Math.max(...numeros)
console.log(maior)


