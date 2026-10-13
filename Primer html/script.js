const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const mensaje = document.getElementById("mensaje").value;

    const resultado = document.getElementById("resultado");
    const titulo = document.createElement("h2");
    const datos = [
        "Nombre: " + nombre,
        "Correo electrónico: " + correo,
        "Teléfono: " + telefono,
        "Mensaje: " + mensaje
    ].map(function (texto) {
        const parrafo = document.createElement("p");
        parrafo.textContent = texto;
        return parrafo;
    });

    titulo.textContent = "Datos ingresados";
    resultado.replaceChildren(titulo, ...datos);
});
