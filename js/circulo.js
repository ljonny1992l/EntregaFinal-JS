class ResultadoC {
    constructor(r) {
        this.r = r;
    }
}

let resultadosC = [];

//Mensajes por defecto

document.querySelector("#pantallaCirculo").innerHTML = "Esperando datos para calcular el área";

document.querySelector("#segundaPantallaCirculo").innerHTML = "Esperando para mostrar todas las areas calculadas";

//Acción al pulsar botón para calcular el área

document.querySelector("#btnCirculo").addEventListener("click", () => {
    
    const radio = parseFloat(document.querySelector("#radio").value);
    
    if (radio != parseFloat(document.querySelector("#radio").value)) {

        document.querySelector("#pantallaCirculo").innerHTML = "";

        const mensaje = "Ingrese un nro. que represente los metros del radio del circulo";
        
        document.querySelector("#pantallaCirculo").innerHTML = mensaje;
        
        //Libreria Toastify

        Toastify({
            text: "Cálculo no realizado..!!!",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover                      
        }).showToast();        

    } else {

        // //limpio la pantalla con el mensaje cargado por defecto

        document.querySelector("#pantallaCirculo").innerHTML = "";

        const resultado = Math.PI * Math.pow(radio, 2);
        document.querySelector("#pantallaCirculo").innerHTML = resultado.toFixed(2) + " m2";


        //Agrupo todos los resultados en un único array

        const unResultado = new ResultadoC(parseFloat(resultado.toFixed(2)));
        resultadosC.push(unResultado);
        console.log(resultadosC);

        //guardo el resultado en el localSorage
        localStorage.setItem("resultadosC", JSON.stringify(resultadosC));        

        //Libreria Toastify

        Toastify({
            text: "Cálculo realizado..!!!",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover                        
        }).showToast();
        
    }  
})

//Acción al pulsar botón para borar resultados

document.querySelector("#borrarCirculo").addEventListener("click", () => {
    
    const r = "Esperando datos para calcular el área";
    const reset = "";
    const resetDos = "Esperando para mostrar todas las areas calculadas";
    document.querySelector("#pantallaCirculo").innerHTML = r;
    document.querySelector("#radio").value = reset;
    document.querySelector("#segundaPantallaCirculo").innerHTML= resetDos;
});

//Acción al pulsar botón para mostrar los resultados de las áreas calculadas

document.querySelector("#mostrarResultadosCirculo").addEventListener("click", () => {

    //limpio la pantalla con el mensaje cargado por defecto

    document.querySelector("#segundaPantallaCirculo").innerHTML = "";

    //recupero lo guardado en el localStorage
        
    const recuperado = localStorage.getItem("resultadosC");
    const convertido = JSON.parse(recuperado);

    //muestro los resultados en el html

    setTimeout(() => {
        convertido.forEach(element => {            
            const p = document.createElement("p");
            p.textContent = element.r + " m2";
            segundaPantallaCirculo.append(p);
        });
    }, 1000);

});