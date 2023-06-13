function calcular(event) {
    event.preventDefault();
    const inputPeso = document.getElementById("peso");
    const inputAltura = document.getElementById("altura");
    const peso = inputPeso.value;
    const altura = inputAltura.value/100;
    const resultadoElement = document.getElementById("resultado");    
    
    if (peso > 300 || peso < 1) {
        inputPeso.style.border = "1px solid red";
        resultado="Erro: os campos devem seguir os seguintes limites \n Peso: entre 300kg e 1kg ";
    } else {
        inputPeso.style.border = "1px solid white";
    }

    if (altura > 3 || altura < 0.2) {
        inputAltura.style.border = "1px solid red";
        resultado="Erro: os campos devem seguir os seguintes limites  \n Altura: entre 300cm e 20cm";
    } else {
        inputAltura.style.border = "1px solid white";
    }

    if (peso < 300 && peso > 1 && altura < 3 && altura > 0.2) {
        const imc = peso / (altura*altura);
        const imcArredondado = imc.toFixed(2);        
        var resultado=""
        if (imcArredondado < 18.5) {
            resultado= `IMC: ${imcArredondado} \n Abaixo do peso`;
        }
        if (imcArredondado >= 18.5 && imcArredondado <= 24.99) {
            resultado= `IMC: ${imcArredondado} \n Peso ideal`;
        }
        if (imcArredondado >= 25 && imcArredondado <= 29.99) {
            resultado= `IMC: ${imcArredondado} \n Sobrepeso`;
        }
        if (imcArredondado > 30) {
            resultado= `IMC: ${imcArredondado} \n Obesidade`;
        }
    }   
    resultadoElement.innerText = resultado;    
}