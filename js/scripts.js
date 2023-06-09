function calcular(event) {
    event.preventDefault();
    const inputPeso = document.getElementById("peso");
    const inputAltura = document.getElementById("altura");
    const peso = inputPeso.value;
    const altura = inputAltura.value/100;    
    
    if (peso > 300 || peso < 1) {
        inputPeso.style.border = "1px solid red";
    } else {
        inputPeso.style.border = "1px solid white";
    }

    if (altura > 300 || altura < 20) {
        inputAltura.style.border = "1px solid red";
    } else {
        inputAltura.style.border = "1px solid white";
    }

    if (peso < 300 || peso > 1 && altura < 300 || altura > 20) {
        const imc = peso / (altura*altura);
    }    
}