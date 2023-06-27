var valorAntigoTela = "";
var valorTela = ""; 
var acaoEscolhida; 

function atualizaTela(valor) {
    var tela = document.getElementById("tela");
    valorTela = valor;
    tela.innerText = valorTela;

    if (valorTela != "" && valorAntigoTela != "" && acaoEscolhida != "") {
         document.getElementById("botaoIgual").removeAttribute("disabled")

        return
    }

    document.getElementById("botaoIgual").setAttribute("disabled", "disabled")
}

function botaoDigitoClick (e) {
    var digito = e.target.value;
    atualizaTela(`${valorTela}${digito}`);
}

function botaoAcaoClick (e) {
    var acao = e.target.value;
    rodarAcao(acao);
}



function rodarAcao (acao) {
    if (acao === "=") {
        var resultado;
        if (acaoEscolhida === "+") {
            resultado = parseInt(valorAntigoTela) + parseInt(valorTela);
        }

        if (acaoEscolhida === "-") {
            resultado = parseInt(valorAntigoTela) - parseInt(valorTela);
        }


        if (acaoEscolhida === "/") {
            resultado = parseInt(valorAntigoTela) / parseInt(valorTela);
        }


        if (acaoEscolhida === "x") {
            resultado = parseInt(valorAntigoTela) * parseInt(valorTela);
        }

        
        atualizaTela(resultado)
        valorAntigoTela = "" 
        return
    }

    if (acao === "c") {
        location.reload();
    }

    valorAntigoTela = valorTela;
    acaoEscolhida = acao;
    atualizaTela("");
}