function calcularExpresao(tipo, valorOrientado) {
    if (tipo === 'acao') {

        if (valorOrientado === 'limparCampo') {
            document.getElementById('campoInput').value = '';
        }

        if (valorOrientado === '/' || valorOrientado === '*' || valorOrientado === '-' || valorOrientado === '+' || valorOrientado === '**' || valorOrientado === '.') {
            document.getElementById('campoInput').value += valorOrientado;
        }

        if (valorOrientado === 'igualResultado') {
            var valor_campo = eval(document.getElementById('campoInput').value);
            document.getElementById('campoInput').value = valor_campo;
        }


    } else if (tipo === 'valor') {
        var teste = document.getElementById('campoInput').value += valorOrientado;
    }


    document.getElementById('calculos_recentes').innerHTML = document.getElementById('campoInput').value;

}

function deleteElemento() {
    var campo_resultado = document.getElementById('campoInput').value;
    document.getElementById('campoInput').value = campo_resultado.substring(0, campo_resultado.length - 1);
}