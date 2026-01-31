const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const contrasena = document.getElementById("contrasena");
const confirmarContrasena = document.getElementById("confirmarContrasena");
const edad = document.getElementById("edad");
const ciudad = document.getElementById("ciudad");
const celular = document.getElementById("celular");
const categoria = document.getElementById("categoria");
const origen = document.getElementById("origen");
const botonEnviar = document.getElementById("botonEnviar");
const botonLimpiar = document.getElementById("botonLimpiar");
const formulario = document.getElementById("formularioRegistro");

function validarFormulario() {
    const valido =
        validarTexto(nombre, "errorNombre", 3) &
        validarCorreo() &
        validarContrasena() &
        validarConfirmacion() &
        validarNumero(edad, "errorEdad", 18) &
        validarTexto(ciudad, "errorCiudad", 1) &
        validarTexto(celular, "errorCelular", 9) &
        validarSelect(categoria, "errorCategoria") &
        validarSelect(origen, "errorOrigen");

    botonEnviar.disabled = !valido;
}

function validarTexto(campo, errorId, min) {
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (campo.value.trim().length < min || (campo.id === "nombre" && !soloLetras.test(campo.value))) {
        marcarInvalido(campo, errorId);
        return false;
    }
    marcarValido(campo, errorId);
    return true;
}

function validarCorreo() {
    const exp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!exp.test(correo.value)) {
        marcarInvalido(correo, "errorCorreo");
        return false;
    }
    marcarValido(correo, "errorCorreo");
    return true;
}

function validarContrasena() {
    const exp = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!exp.test(contrasena.value)) {
        marcarInvalido(contrasena, "errorContrasena");
        return false;
    }
    marcarValido(contrasena, "errorContrasena");
    return true;
}

function validarConfirmacion() {
    if (contrasena.value !== confirmarContrasena.value || confirmarContrasena.value === "") {
        marcarInvalido(confirmarContrasena, "errorConfirmacion");
        return false;
    }
    marcarValido(confirmarContrasena, "errorConfirmacion");
    return true;
}

function validarNumero(campo, errorId, min) {
    if (campo.value < min) {
        marcarInvalido(campo, errorId);
        return false;
    }
    marcarValido(campo, errorId);
    return true;
}

function validarSelect(select, errorId) {
    if (select.value === "") {
        marcarInvalido(select, errorId);
        return false;
    }
    marcarValido(select, errorId);
    return true;
}

function marcarValido(campo, errorId) {
    campo.parentElement.classList.add("valido");
    campo.parentElement.classList.remove("invalido");
    document.getElementById(errorId).innerText = "✔ Correcto";
}

function marcarInvalido(campo, errorId) {
    campo.parentElement.classList.add("invalido");
    campo.parentElement.classList.remove("valido");
    document.getElementById(errorId).innerText = "✖ Campo inválido";
}

formulario.addEventListener("input", validarFormulario);

formulario.addEventListener("submit", e => {
    e.preventDefault();
    alert("¡Registro exitoso en Papelería Compu Click!");
    formulario.reset();
    botonEnviar.disabled = true;
});

botonLimpiar.addEventListener("click", () => {
    formulario.reset();
    botonEnviar.disabled = true;
});

function ofertaDia() {
    alert("¡Visita hoy nuestro local y recibes el 10% de descuentos!");
}
