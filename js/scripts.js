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

    if (altura > 3 || altura < 0.2) {
        inputAltura.style.border = "1px solid red";
    } else {
        inputAltura.style.border = "1px solid white";
    }

    if (peso < 300 && peso > 1 && altura < 3 && altura > 0.2) {
        const imc = peso / (altura*altura);
        const imcArredondado = imc.toFixed(2);
        console.log(imcArredondado);
        
    }    
}