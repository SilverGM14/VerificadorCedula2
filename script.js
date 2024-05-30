function verificarNumero() {
    var numero = document.getElementById("inputNumero").value.replace(/\s/g, '');
    var resultado = document.getElementById("resultado");
    
    if (numero.length !== 11 || isNaN(numero)) {
        resultado.innerHTML = '<div class="alert alert-danger" role="alert">Número inválido. El número de identificación debe tener 11 dígitos.</div>';
    } else {
        resultado.innerHTML = '<div class="alert alert-success" role="alert">Número válido. El número de identificación es correcto.</div>';
    }
}