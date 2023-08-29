class ResultadoT {
    constructor(r) {
        this.r = r;
    }
}

let resultadosT = [];

document.querySelector("#pantalla").innerHTML= "Esperando datos para calcular el área";

document.querySelector("#segundaPantalla").innerHTML = "Esperando para mostrar todas las areas calculadas";

//Acción al pulsar botón para calcular el área

document.querySelector("#btnTriangulo").addEventListener("click", () => {

    const b = parseFloat(document.querySelector("#base").value);
    const a = parseFloat(document.querySelector("#altura").value);

    if (b != parseFloat(document.querySelector("#base").value) || a != parseFloat(document.querySelector("#altura").value)) {
        
        document.querySelector("#pantalla").innerHTML = "";

        const mensaje = "Ingrese nros. que representen los metros de la base y/o la altura";

        document.querySelector("#pantalla").innerHTML = mensaje;

        //Libreria Toastify

        Toastify({
            text: "Cálculo no realizado..!!!",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover            
        }).showToast();

    } else {

        // //limpio la pantalla con el mensaje cargado por defecto

        document.querySelector("#pantalla").innerHTML = "";
        
        const r = (b * a) / 2;
        document.querySelector("#pantalla").innerHTML = r.toFixed(2) + " m2";

        //Agrupo todos los resultados en un único array

        const unResultado = new ResultadoT(parseFloat(r.toFixed(2)));
        resultadosT.push(unResultado);
        console.log(resultadosT);

        //guardo el resultado en el localStorage
        localStorage.setItem("resultadosT", JSON.stringify(resultadosT));
        
        //Libreria Toastify

        Toastify({
            text: "Cálculo realizado..!!!",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover            
        }).showToast();
    }
})

//Acción al pulsar botón para borar resultados

document.querySelector("#borrarTriangulo").addEventListener("click", () => {
    const r = "Esperando datos para calcular el área";
    const reset = "";
    const reset2 = "Esperando para mostrar todas las areas calculadas";
    document.querySelector("#pantalla").innerHTML = r;
    document.querySelector("#base").value = reset;
    document.querySelector("#altura").value = reset;
    document.querySelector("#segundaPantalla").innerHTML = reset2;
});

//Acción al pulsar botón para mostrar los resultados de las áreas calculadas

document.querySelector("#mostrarResultadosTriangulo").addEventListener("click", () => {

    //limpio la pantalla con el mensaje cargado por defecto

    document.querySelector("#segundaPantalla").innerHTML = "";

    //recupero lo guardado en el localStorage

    const recuperadoT = localStorage.getItem("resultadosT");
    const convertidoT = JSON.parse(recuperadoT);    

    //muestro los resultados en el html

    setTimeout(() => {
        convertidoT.forEach(element => {
            const p = document.createElement("p");
            p.textContent = element.r + " m2";
            segundaPantalla.append(p);            
        });        
    }, 1000);

});