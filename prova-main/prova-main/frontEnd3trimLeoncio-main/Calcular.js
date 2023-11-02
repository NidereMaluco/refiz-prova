function Calcular() {
    let idadeHumana = document.getElementById("ageInput").value;
    let idadeCanina = idadeHumana * 7;

    var categoriaIdade;
    if (idadeCanina <= 11) {
        categoriaIdade = "Criança";
    } else if (idadeCanina <= 17) {
        categoriaIdade = "Adolescente";
    } else if (idadeCanina <= 29) {
        categoriaIdade = "Jovem";
    } else if (idadeCanina <= 59) {
        categoriaIdade = "Adulto";
    } else {
        categoriaIdade = "Idoso";
    }

    let mostraResultado = document.getElementById("mostraResultado");
    mostraResultado.textContent = "Resultado: A idade humana do cachorrinho é " + idadeHumana + " anos. Categoria de idade: " + categoriaIdade;
}