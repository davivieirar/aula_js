function calcularDesconto() {
    let valorProduto = document.getElementById('preco').value

    let resultado = valorProduto - (valorProduto * 0.2)
    console.log(resultado)
    //Duas casas decimais
    let resultadoFormatado = parseFloat(resultado).toFixed(2)

    //Exibe o texto com valor formatado para reais
    let textoResultado = `O valor final do produto é R$${resultadoFormatado}`

    //Exibe o texto da variável textoResultado dentro da tag h3
    desconto = document.getElementsByTagName('h3')[0].innerHTML = textoResultado
}
