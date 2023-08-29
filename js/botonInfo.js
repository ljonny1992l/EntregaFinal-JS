class Resultado {
    constructor(r) {
        this.r = parseFloat(r);
    }
}

let resultados = [];

//Mensajes por defecto

document.querySelector("#pantallaCuadrado").innerHTML = "Esperando datos para calcular el área";

document.querySelector("#segundaPantallaC").innerHTML = "Esperando para mostrar todas las areas calculadas";

//Acción al pulsar botón para calcular el área

document.querySelector("#btnCuadrado").addEventListener("click", () => {

    const l = parseFloat(document.querySelector("#lados").value);


    if (l != parseFloat(document.querySelector("#lados").value)) {

        document.querySelector("#pantallaCuadrado").innerHTML = "";

        const mensaje = "Ingrese un nro. que represente los metros de uno de los lados del cuadrado";

        document.querySelector("#pantallaCuadrado").innerHTML = mensaje;

        //Libreria Toastify

        Toastify({
            text: "Cálculo no realizado..!!!",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left",
            stopOnFocus: true, // Prevents dismissing of toast on hover            
        }).showToast();

    } else {

        // //limpio la pantalla con el mensaje cargado por defecto

        document.querySelector("#pantallaCuadrado").innerHTML = "";

        const r = Math.pow(l, 2);
        document.querySelector("#pantallaCuadrado").innerHTML = r.toFixed(2) + " m2";

        //Agrupo todos los resultados en un único array

        const unResultado = new Resultado(parseFloat(r.toFixed(2)));
        resultados.push(unResultado);

        //guardo el resultado en el localSorage
        localStorage.setItem("resultados", JSON.stringify(resultados));

        //Libreria Toastify

        Toastify({
            text: "Cálculo realizado..!!!",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "left",            
            stopOnFocus: true, // Prevents dismissing of toast on hover          
        }).showToast();

    }
})

//Acción al pulsar botón para borar resultados

document.querySelector("#borrarCuadrado").addEventListener("click", () => {
    const r = "Esperando datos para calcular el área";
    const reset = "";
    const resetDos = "Esperando para mostrar todas las areas calculadas";
    document.querySelector("#pantallaCuadrado").innerHTML = r;
    document.querySelector("#lados").value = reset;
    document.querySelector("#segundaPantallaC").innerHTML = resetDos;
});

//Acción al pulsar botón para mostrar los resultados de las áreas calculadas

document.querySelector("#mostrarResultadosCuadrado").addEventListener("click", () => {

    //limpio la pantalla con el mensaje cargado por defecto

    document.querySelector("#segundaPantallaC").innerHTML = "";

    //recupero lo guardado en el localStorage

    const recuperado = localStorage.getItem("resultados");
    const convertido = JSON.parse(recuperado);    

    //muestro los resultados en el html

    setTimeout(() => {
        convertido.forEach(element => {
            const p = document.createElement("p");
            p.textContent = element.r + " m2";
            segundaPantallaC.append(p);            
        });
        console.log(convertido);
    }, 1000);

});