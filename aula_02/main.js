function liberarAcesso() {
    let idade = document.getElementById('idade').value
    let nome = document.getElementById('nome').value
    if (idade >= 18 && idade < 60) {
        console.log(`Pode entrar! ${nome}`);
    } else if (idade >= 60) {
        console.log(`Na melhor idade! Entra free! ${nome}`);
    } else if(idade>=17){
        console.log(`Foi barrado no baile! ${nome}`);
    }else if(idade==''||nome==''){
        alert('Favor, informar idade/nome')
    }

}










// function liberarAcesso(idade, nome) {
//     if (idade >= 18 && idade < 60) {
//         console.log(`Pode entrar! ${nome}`);
//     } else if (idade >= 60) {
//         console.log(`Na melhor idade! Entra free! ${nome}`);
//     } else {
//         console.log(`Foi barrado no baile! ${nome}`);
//     }
// }
// liberarAcesso(75, 'Davi');
