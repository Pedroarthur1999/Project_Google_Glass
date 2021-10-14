
function mudaFoto(foto) {
    if (foto == 1) {
        oculos = true;
        if (oculos == true) {
            arquivo = "_imagens/glass-oculos-preto-peq.png"
        }
    }
    if (foto == 2) {
        oculos = false;
        arquivo = "_imagens/home.png"

    }

    if (foto == 3) {
        oculos = false;
        arquivo = "_imagens/especificacoes.png"
    }

    if (foto == 4) {
        oculos = false;
        arquivo = "_imagens/fotos.png";

    }
    if (foto == 5) {
        oculos = false;
        arquivo = "_imagens/multimidia.png";

    }
    if (foto == 6) {
        oculos = false;
        arquivo = "_imagens/contato.png"

    }
    document.getElementById("icone").src = arquivo;

}