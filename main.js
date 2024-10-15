//SALUDA SOLO UNA VEZ CON EL AUDIO ASÍ NO SE VUELVE REPETITIVO
let contadorSaludo = 0;
let contadorPreguntas = 0;

//VARIABLES DE CALCULO CO2 PARCIAL Y TOTAL
let co2Transporte;
let co2Hogar;
let co2Vida;
let co2Resultado;
let categorias_u = [
    "Guardianes Verdes",
    "Guardianes Amarillos",
    "Guardianes Rojos",
];
let descripcion = [
    "¡Tu liderazgo ambiental es inspirador! Continúa siendo un ejemplo para los demás y explora nuevas maneras de reducir aún más tu huella de carbono. Cada acción cuenta en nuestra misión colectiva por un planeta más verde.",
    "¡Estás en el camino correcto! Cada pequeño cambio suma a un gran impacto. Anímate a desafiar tus hábitos actuales y descubre cómo puedes contribuir aún más a la protección de nuestro planeta.",
    "Cada paso hacia un estilo de vida más ecológico es un paso hacia un futuro más sostenible. Empieza hoy con pequeñas acciones. ¡Tu esfuerzo personal hace una gran diferencia en la salud de nuestro planeta!",
];

//TEXTOS ANIMADOS
var bienvenida;
var edad;
let zona;
var tipoVehiculo;
var tipovehiculo;
var cantKilo;
var transporteP;
var vuelosP;
var biciP;
var carpoolingP;
var efienergy;
var avanceBtn; //LISTENERS PARA VERIFICAR LA CARGA DE DATOS
var tipoEnergy;
var viviendaP;
var personasP;
var electrosP;
var reciclasP;
var dispositivosP;
var renovablesP;
var idName;
var idEdad;

var aguaConsumo;
var product;

var felicidades;

//CREACION DE USUARIO CON LAS VARIABLES E INFORMACION A GUARDAR
class Usuario {
    constructor(
        nombre,
        edad,
        zona,
        tipoVehiculo,
        cantKilometros,
        transporteP,
        vuelos,
        bicicamina,
        compVehiculo,
        eficiencia,
        electrica,
        gasNatural,
        gasEnvasado,
        renovable,
        sizeVivienda,
        cantPersonas,
        electros,
        recicla,
        dispositivos,
        renovables,
        agua,
        locales,
        fecha,
        mail,
        co2Transporte,
        co2Hogar,
        co2Vida,
        resultado,
        categoria,
    ) {
        //preguntas de perfil
        this.nombre = nombre;
        this.edad = edad;
        this.zona = zona;
        //preguntas de transporte
        this.tipoVehiculo = tipoVehiculo;
        this.cantKilometros = cantKilometros;
        this.transporteP = transporteP;
        this.vuelos = vuelos;
        this.bicicamina = bicicamina;
        this.compVehiculo = compVehiculo;
        this.eficiencia = eficiencia;
        //preguntas de hogar
        this.electrica = electrica;
        this.gasNatural = gasNatural;
        this.gasEnvasado = gasEnvasado;
        this.renovable = renovable;
        this.sizeVivienda = sizeVivienda;
        this.cantPersonas = cantPersonas;
        this.electros = electros;
        this.recicla = recicla;
        this.dispositivos = dispositivos;
        this.renovables = renovables;
        //preguntas de estilo de vida
        this.agua = agua;
        this.locales = locales;
        //preguntas de estilo de vida
        this.fecha = fecha;
        this.mail = mail;
        this.co2Transporte = co2Transporte;
        this.co2Hogar = co2Hogar;
        this.co2Vida = co2Vida;
        this.resultado = resultado;
        this.categoria = categoria;
    }
}

window.addEventListener("keydown", function (e) {
    if (13 == e.keyCode) {
        switch (pantallaActiva) {
            case 1:
                const inputid = document.getElementById("usuarioNombre");
                if (inputid.value != "") {
                    avanzar();
                }
                break;
            case 2:
                const inputedad = document.getElementById("usuarioEdad");
                if (inputedad.value != "") {
                    avanzar();
                }
                break;
            case 20:
                const inputMail = document.getElementById("usuarioMail");
                const inputValue = inputMail.value;
                if (inputValue.includes("@")) {
                    mostrarResultados();
                }
                break;
            default:
                break;
        }
    }
});

//DEFINE EL ORDEN DE LAS PANTALLAS Y EL AVANCE Y RETROCESO
let pantallaActiva = 0;

//SE CREA EL NUEVO USUARIO
const usuario = new Usuario();

//COMIENZA LA APLICACION
function comenzar() {
    const footer = (document.getElementById("inferior").style.display = "flex");
    const centro = (document.getElementById("centro").style.height = "67vh");
    const auspiciantes = (document.getElementById("provincia").style.display =
        "flex");
    const botonesNav = (document.getElementById("botonesNav").style.display =
        "none");
    const fondo = (document.body.style.backgroundImage =
        "url(images/fondo.jpg)");
    const main = (document.getElementById("main").style.display = "flex");
    const masInfo = (document.getElementById("btnInfo").style.display = "none");

    pantallaActiva = 0;

    const listaPreguntas = (document.getElementById(
        "listaPreguntas",
    ).style.display = "none");
    const idPerfil = (document.getElementById("divPerfil").style.display =
        "none");
    const idTransporte = (document.getElementById(
        "divTransporte",
    ).style.display = "none");
    const idHogar = (document.getElementById("divHogar").style.display =
        "none");
    const idVida = (document.getElementById("divVida").style.display = "none");
    const idFinal = (document.getElementById("divFinal").style.display =
        "none");
    const resultscreen = (document.getElementById(
        "pantallaResultados",
    ).style.display = "none");
}

////////////////////////COMIENZA LA CAPTURA DE DATOS PERSONALES///////////////////

function mostrarPreguntas() {
    const inferior = (document.getElementById("inferior").style.display =
        "none");
    const centro = (document.getElementById("centro").style.height = "85vh");
    contadorPreguntas = 1;
    if (edad != null) {
        edad.destroy();
    }
    bienvenida = new Typed("#txtAnimado", {
        strings: [
            '<i class="fs-5">¡Hola!Te damos la bienvenida a nuestra calculadora de huella de carbono.</i>',
            '<i class="fs-5">Soy Huellita, tu aliada en la lucha contra el cambio climático</i>',
            '<i class="fs-5">Esta herramienta te guiará para entender y reducir tu huella de carbono personal,</i>',
            '<i class="fs-5">mostrándote cómo tus actividades diarias afectan el planeta.</i>',
            '<i class="fs-5">Juntos, exploraremos cómo puedes hacer cambios efectivos para proteger nuestro hogar común.</i>',
            '<i class="fs-5">¿Cuál es tu nombre?</i>',
        ],

        typeSpeed: 30,
        backSpeed: 30,
        shuffle: false,
        backDelay: 1000,
        loop: false,
        showCursor: false,
        fadeOut: true,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 50,
    });
    bienvenida.start();

    const preguntas = (document.getElementById("preguntas").innerHTML =
        contadorPreguntas + " / 19");
    if (usuario.nombre != undefined) {
        avanceBtn.disabled = false;
    }
    contadorSaludo += 1;
    const main = (document.getElementById("main").style.display = "none");
    const listaPreguntas = (document.getElementById(
        "listaPreguntas",
    ).style.display = "flex");
    const auspiciantes = (document.getElementById("provincia").style.display =
        "none");
    const botonesNav = (document.getElementById("botonesNav").style.display =
        "flex");
    const fondo = (document.body.style.backgroundImage =
        "url(images/perfil.jpg)");
    const masInfo = (document.getElementById("btnInfo").style.display = "flex");
    pantallaActiva = 1;
    if (contadorSaludo == 1) {
        const saludar = document.getElementById("saludo").play();
    }

    const idPerfil = (document.getElementById("divPerfil").style.display =
        "flex");
    const nombre = (document.getElementById("inputNombre").style.display =
        "flex");
    const edadf = (document.getElementById("inputEdad").style.display = "none");
    const zona = (document.getElementById("inputZona").style.display = "none");
}

function mostrarEdad() {
    const preguntas = (document.getElementById("preguntas").innerHTML =
        contadorPreguntas + " / 19");
    if (idEdad.value.trim() === "") {
        const avanceBtn = (document.getElementById("avance").disabled = true);
    }

    bienvenida.destroy();
    if (zona != null) {
        zona.destroy();
    }
    const nombreValue = document.getElementById("usuarioNombre").value;
    edad = new Typed("#txtAnimado", {
        strings: [
            '<i class="fs-5">Hola ' + nombreValue + "!</i>",
            '<i class="fs-5">Para calcular tu huella personal necesitamos algunos datos importantes</i>',
            '<i class="fs-5">Vamos a comenzar</i>',
            '<i class="fs-5">¿Qué edad tenés?</i>',
        ],

        typeSpeed: 30,
        backSpeed: 50,
        shuffle: false,
        backDelay: 1000,
        loop: false,
        showCursor: false,
        fadeOut: true,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 50,
    });
    edad.start();
    const nombre = (document.getElementById("inputNombre").style.display =
        "none");
    const anios = (document.getElementById("inputEdad").style.display = "flex");
    const zonaf = (document.getElementById("inputZona").style.display = "none");
}

function validarNumero(input) {
    const valor = parseInt(input.value);
    if (isNaN(valor) || valor < 5 || valor > 99) {
        input.value = ""; // Limpia el valor si no cumple con las restricciones
    }
}

function mostrarZona() {
    const preguntas = (document.getElementById("preguntas").innerHTML =
        contadorPreguntas + " / 19");

    edad.destroy();
    if (tipoVehiculo != null) {
        tipoVehiculo.destroy();
    }
    zona = new Typed("#txtAnimado", {
        strings: [
            '<i class="fs-5">¿En qué región de la provincia de Neuquén vivís?</i>',
        ],

        typeSpeed: 30,
        backSpeed: 50,
        shuffle: false,
        backDelay: 1000,
        loop: true,
        showCursor: false,
        fadeOut: true,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 50,
    });
    zona.start();

    const idPerfil = (document.getElementById("divPerfil").style.display =
        "flex");
    const idTransporte = (document.getElementById(
        "divTransporte",
    ).style.display = "none");
    const fondoedad = (document.body.style.backgroundImage =
        "url(images/perfil.jpg)");
    const anios = (document.getElementById("inputEdad").style.display = "none");
    const area = (document.getElementById("inputZona").style.display = "flex");
    if (usuario.zona === undefined) {
        avanceBtn.disabled = true;
    } else {
        avanceBtn.disabled = false;
    }
    const miModal4 = new bootstrap.Modal(
        document.getElementById("emergenteMapa"),
    );
    miModal4.show();
}

function idZona(event) {
    avanceBtn.disabled = false;
    usuario.zona = event.id;
    avanzar();
}

function mostrarVehiculo() {
    zona.destroy();
    if (transporteP != null) {
        transporteP.destroy();
    }
    if (cantKilo != null) {
        cantKilo.destroy();
    }
    const preguntas = (document.getElementById("preguntas").innerHTML =
        contadorPreguntas + " / 19");

    tipovehiculo = new Typed("#txtAnimado", {
        strings: [
            '<i class="fs-5">¿Qué tipo de vehículo utilizas principalmente?</i>',
        ],

        typeSpeed: 30,
        backSpeed: 50,
        shuffle: false,
        backDelay: 1000,
        loop: false,
        showCursor: false,
        fadeOut: true,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 50,
    });
    tipovehiculo.start();
    const fondoAuto = (document.body.style.backgroundImage =
        "url(images/auto.jpg)");
    const idPerfil = (document.getElementById("divPerfil").style.display =
        "none");
    const idTransporte = (document.getElementById(
        "divTransporte",
    ).style.display = "flex");
    const vehiculo = (document.getElementById("inputVehiculo").style.display =
        "flex");
    const cantKilometros = (document.getElementById(
        "cantKilometros",
    ).style.display = "none");
    const vuelos = (document.getElementById("vuelos").style.display = "none");
    const bici = (document.getElementById("bicicamina").style.display = "none");
    const car = (document.getElementById("carpooling").style.display = "none");
    const efi = (document.getElementById("efiEnergia").style.display = "none");
    const tPublico = (document.getElementById("tPublico").style.display =
        "none");
    const miModal = new bootstrap.Modal(
        document.getElementById("emergenteTransporte"),
    );
    if (usuario.tipoVehiculo === undefined) {
        avanceBtn.disabled = true;
    } else {
        avanceBtn.disabled = false;
    }
    miModal.show();
}

function idVehiculo(event) {
    avanceBtn.disabled = false;
    const vehiculoElegido = event.id;
    usuario.tipoVehiculo = vehiculoElegido;
    if (usuario.tipoVehiculo == "No tengo") {
        usuario.cantKilometros = "sin vehículo";
        usuario.eficiencia = "sin vehículo";
    }

    avanzar();
}

function mostrarKilometros() {
    tipovehiculo.destroy();
    if (transporteP != null) {
        transporteP.destroy();
    }
    const preguntas = (document.getElementById("preguntas").innerHTML =
        contadorPreguntas + " / 19");
    if (usuario.cantKilometros === undefined) {
        avanceBtn.disabled = true;
    } else {
        avanceBtn.disabled = false;
    }
    cantKilo = new Typed("#txtAnimado", {
        strings: [
            '<i class="fs-5">¿Cuántos kilómetros conduces en promedio cada semana?</i>',
        ],

        typeSpeed: 30,
        backSpeed: 50,
        shuffle: false,
        backDelay: 1000,
        loop: false,
        showCursor: false,
        fadeOut: true,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 50,
    });
    cantKilo.start();
    const vehiculo = (document.getElementById("inputVehiculo").style.display =
        "none");
    const cantKilometros = (document.getElementById(
        "cantKilometros",
    ).style.display = "flex");
    const tPublico = (document.getElementById("tPublico").style.display =
        "none");
}

function idKilometros(event) {
    avanceBtn.disabled = false;
    const kilometros = event.id;
    usuario.cantKilometros = kilometros;

    avanzar();
}

function mostrarTransporte() {
    if (usuario.tipoVehiculo == "No tengo") {
        tipovehiculo.destroy();
    } else {
        if (cantKilo != null) {
            cantKilo.destroy();
        }
    }
    if (vuelosP != null) {
        vuelosP.destroy();
    }
    const preguntas = (document.getElementById("preguntas").innerHTML =
        contadorPreguntas + " / 19");
    if (usuario.transporteP === undefined) {
        avanceBtn.disabled = true;
    } else {
        avanceBtn.disabled = false;
    }
    transporteP = new Typed("#txtAnimado", {
        strings: [
            '<i class="fs-5">¿Utilizas transporte público regularmente? ¿Cuántos días a la semana?</i>',
        ],

        typeSpeed: 30,
        backSpeed: 50,
        shuffle: false,
        backDelay: 1000,
        loop: false,
        showCursor: false,
        fadeOut: true,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 50,
    });
    transporteP.start();

    const fondotransporte = (document.body.style.backgroundImage =
        "url(images/transporte.jpg)");
    const vehiculo = (document.getElementById("inputVehiculo").style.display =
        "none");
    const cantKilometros = (document.getElementById(
        "cantKilometros",
    ).style.display = "none");
    const tPublico = (document.getElementById("tPublico").style.display =
        "flex");
    const vuelos = (document.getElementById("vuelos").style.display = "none");
}

function idTransporte(event) {
    avanceBtn.disabled = false;
    const tPublico = event.id;
    usuario.transporteP = tPublico;

    avanzar();
}

function mostrarVuelos() {
    transporteP.destroy();
    if (biciP != null) {
        biciP.destroy();
    }
    const preguntas = (document.getElementById("preguntas").innerHTML =
        contadorPreguntas + " / 19");
    if (usuario.vuelos === undefined) {
        avanceBtn.disabled = true;
    } else {
        avanceBtn.disabled = false;
    }
    vuelosP = new Typed("#txtAnimado", {
        strings: [
            '<i class="fs-5">¿Cuántos vuelos nacionales e internacionales tomas en un año?</i>',
        ],

        typeSpeed: 30,
        backSpeed: 50,
        shuffle: false,
        backDelay: 1000,
        loop: false,
        showCursor: false,
        fadeOut: true,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 50,
    });
    vuelosP.start();

    const tPublico = (document.getElementById("tPublico").style.display =
        "none");
    const vuelos = (document.getElementById("vuelos").style.display = "flex");
    const bicicamina = (document.getElementById("bicicamina").style.display =
        "none");
}

function idVuelos(event) {
    avanceBtn.disabled = false;
    const cantvuelos = event.id;
    usuario.vuelos = cantvuelos;

    avanzar();
}

function mostrarBiciCamina() {
    vuelosP.destroy();
    if (carpoolingP != null) {
        carpoolingP.destroy();
    }
    const preguntas = (document.getElementById("preguntas").innerHTML =
        contadorPreguntas + " / 19");
    if (usuario.bicicamina === undefined) {
        avanceBtn.disabled = true;
    } else {
        avanceBtn.disabled = false;
    }
    biciP = new Typed("#txtAnimado", {
        strings: [
            '<i class="fs-5">¿Realizas viajes en bicicleta o caminatas diarias?</i>',
        ],

        typeSpeed: 30,
        backSpeed: 50,
        shuffle: false,
        backDelay: 1000,
        loop: false,
        showCursor: false,
        fadeOut: true,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 50,
    });
    biciP.start();

    const vuelos = (document.getElementById("vuelos").style.display = "none");
    const bicicamina = (document.getElementById("bicicamina").style.display =
        "flex");
    const carpooling = (document.getElementById("carpooling").style.display =
        "none");
}

function idBiciCamina(event) {
    avanceBtn.disabled = false;
    const bici = event.id;
    usuario.bicicamina = bici;

    avanzar();
}

function mostrarCarpooling() {
    biciP.destroy();
    if (efienergy != null) {
        efienergy.destroy();
    }
    const preguntas = (document.getElementById("preguntas").innerHTML =
        contadorPreguntas + " / 19");
    if (usuario.compVehiculo === undefined) {
        avanceBtn.disabled = true;
    } else {
        avanceBtn.disabled = false;
    }
    carpoolingP = new Typed("#txtAnimado", {
        strings: [
            '<i class="fs-5">¿Compartes el vehículo con otras personas semanalmente?</i>',
        ],

        typeSpeed: 30,
        backSpeed: 50,
        shuffle: false,
        backDelay: 1000,
        loop: false,
        showCursor: false,
        fadeOut: true,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 50,
    });
    carpoolingP.start();

    const bicicamina = (document.getElementById("bicicamina").style.display =
        "none");
    const carpooling = (document.getElementById("carpooling").style.display =
        "flex");
    const efiEnergía = (document.getElementById("efiEnergia").style.display =
        "none");
    const ener = (document.getElementById("energia").style.display = "none");
}

function idCarpooling(event) {
    avanceBtn.disabled = false;
    const carpooling = event.id;
    usuario.compVehiculo = carpooling;

    avanzar();
}

function mostrarEficiencia() {
    carpoolingP.destroy();
    if (tipoEnergy != null) {
        tipoEnergy.destroy();
    }
    const preguntas = (document.getElementById("preguntas").innerHTML =
        contadorPreguntas + " / 19");
    if (usuario.eficiencia === undefined) {
        console.log("entró");
        avanceBtn.disabled = true;
    } else {
        avanceBtn.disabled = false;
    }
    efienergy = new Typed("#txtAnimado", {
        strings: [
            '<i class="fs-5">¿Cuál es la eficiencia de combustible de tu vehículo principal?</i>',
        ],

        typeSpeed: 30,
        backSpeed: 50,
        shuffle: false,
        backDelay: 1000,
        loop: false,
        showCursor: false,
        fadeOut: true,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 50,
    });
    efienergy.start();

    const divHogar = (document.getElementById("divHogar").style.display =
        "none");
    const carpooling = (document.getElementById("carpooling").style.display =
        "none");
    const efiEnergía = (document.getElementById("efiEnergia").style.display =
        "flex");
    const energia = (document.getElementById("bicicamina").style.display =
        "none");
}
function idEficiencia(event) {
    console.log("aca estoy");
    avanceBtn.disabled = false;
    const efi = event.id;
    usuario.eficiencia = efi;
    console.log(usuario);
    avanzar();
}

function mostrarEnergia() {
    if (usuario.tipoVehiculo == "No tengo") {
        carpoolingP.destroy();
    } else {
        efienergy.destroy();
    }
    const preguntas = (document.getElementById("preguntas").innerHTML =
        contadorPreguntas + " / 19");
    if (viviendaP != null) {
        viviendaP.destroy();
    }
    if (
        usuario.renovable == undefined &&
        usuario.gasEnvasado == undefined &&
        usuario.gasNatural == undefined &&
        usuario.electrica == undefined
    ) {
        console.log("entró toda");
        avanceBtn.disabled = true;
    } else {
        avanceBtn.disabled = false;
    }
    tipoEnergy = new Typed("#txtAnimado", {
        strings: [
            '<i class="fs-5">¿Qué fuente de calefacción empleas habitualmente en tú hogar?</i>',
        ],

        typeSpeed: 30,
        backSpeed: 50,
        shuffle: false,
        backDelay: 1000,
        loop: false,
        showCursor: false,
        fadeOut: true,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 50,
    });
    tipoEnergy.start();
    const fondoEnergia = (document.body.style.backgroundImage =
        "url(images/energia.jpg)");
    const divHogar = (document.getElementById("divHogar").style.display =
        "flex");
    const carpooling = (document.getElementById("carpooling").style.display =
        "none");
    const efiEnergía = (document.getElementById("efiEnergia").style.display =
        "none");
    const energia = (document.getElementById("energia").style.display = "flex");
    const vivienda = (document.getElementById("sizeVivienda").style.display =
        "none");
    const persons = (document.getElementById("cantPersonas").style.display =
        "none");
    const electros = (document.getElementById("electrosConsumo").style.display =
        "none");
    const reci = (document.getElementById("reciclaje").style.display = "none");
    const dispo = (document.getElementById("conDispositivos").style.display =
        "none");
    const reno = (document.getElementById("tipoRenovables").style.display =
        "none");
    const miModal2 = new bootstrap.Modal(
        document.getElementById("emergenteHogar"),
    );
    miModal2.show();
}

function guardarEnergia(event) {
    switch (event.id) {
        case "electrica":
            usuario.electrica = event.checked;
            break;
        case "gasNatural":
            usuario.gasNatural = event.checked;
            break;
        case "gasEnvasado":
            usuario.gasEnvasado = event.checked;
            break;
        case "renovable":
            usuario.renovable = event.checked;
            break;
        default:
            break;
    }
    const renovable = document.getElementById("renovable");
    const gasNatural = document.getElementById("gasNatural");
    const gasEnvasado = document.getElementById("gasEnvasado");
    const electrica = document.getElementById("electrica");
    if (
        renovable.checked == true ||
        gasNatural.checked == true ||
        gasEnvasado.checked == true ||
        electrica.checked == true
    ) {
        avanceBtn.disabled = false;
    } else {
        avanceBtn.disabled = true;
    }

    console.log(usuario);
}

function mostrarVivienda() {
    tipoEnergy.destroy();
    if (personasP != null) {
        personasP.destroy();
    }
    const preguntas = (document.getElementById("preguntas").innerHTML =
        contadorPreguntas + " / 19");
    if (usuario.sizeVivienda === undefined) {
        console.log("entró");
        avanceBtn.disabled = true;
    } else {
        avanceBtn.disabled = false;
    }
    viviendaP = new Typed("#txtAnimado", {
        strings: [
            '<i class="fs-5">¿Cuál es el tamaño de tu vivienda en metros cuadrados?</i>',
        ],

        typeSpeed: 30,
        backSpeed: 50,
        shuffle: false,
        backDelay: 1000,
        loop: false,
        showCursor: false,
        fadeOut: true,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 50,
    });
    viviendaP.start();

    const energia = (document.getElementById("energia").style.display = "none");
    const vivienda = (document.getElementById("sizeVivienda").style.display =
        "flex");
    const personas = (document.getElementById("cantPersonas").style.display =
        "none");
}

function idtamanio(event) {
    console.log("aca estoy");
    avanceBtn.disabled = false;
    const vivienda = event.id;
    usuario.sizeVivienda = vivienda;
    console.log(usuario);
    avanzar();
}

function mostrarPersonas() {
    viviendaP.destroy();
    if (electrosP != null) {
        electrosP.destroy();
    }
    const preguntas = (document.getElementById("preguntas").innerHTML =
        contadorPreguntas + " / 19");
    if (usuario.cantPersonas === undefined) {
        console.log("entró");
        avanceBtn.disabled = true;
    } else {
        avanceBtn.disabled = false;
    }
    personasP = new Typed("#txtAnimado", {
        strings: ['<i class="fs-5">¿Cuántas personas viven en tu hogar?</i>'],
        typeSpeed: 30,
        backSpeed: 50,
        shuffle: false,
        backDelay: 1000,
        loop: false,
        showCursor: false,
        fadeOut: true,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 50,
    });
    personasP.start();
    const vivienda = (document.getElementById("sizeVivienda").style.display =
        "none");
    const personas = (document.getElementById("cantPersonas").style.display =
        "flex");
    const electros = (document.getElementById("electrosConsumo").style.display =
        "none");
}

function idPersonas(event) {
    console.log("aca estoy");
    avanceBtn.disabled = false;
    const personas = event.id;
    usuario.cantPersonas = personas;
    console.log(usuario);
    avanzar();
}

function mostrarElectros() {
    personasP.destroy();
    if (reciclasP != null) {
        reciclasP.destroy();
    }
    const preguntas = (document.getElementById("preguntas").innerHTML =
        contadorPreguntas + " / 19");
    if (usuario.electros === undefined) {
        console.log("entró");
        avanceBtn.disabled = true;
    } else {
        avanceBtn.disabled = false;
    }
    electrosP = new Typed("#txtAnimado", {
        strings: [
            '<i class="fs-5">¿Qué electrodomésticos utilizas y con qué frecuencia?</i>',
        ],
        typeSpeed: 30,
        backSpeed: 50,
        shuffle: false,
        backDelay: 1000,
        loop: false,
        showCursor: false,
        fadeOut: true,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 50,
    });
    electrosP.start();
    const personas = (document.getElementById("cantPersonas").style.display =
        "none");
    const fondoener = (document.body.style.backgroundImage =
        "url(images/energia.jpg)");
    const electros = (document.getElementById("electrosConsumo").style.display =
        "flex");
    const reci = (document.getElementById("reciclaje").style.display = "none");
}

function idElectros(event) {
    console.log("aca estoy");
    avanceBtn.disabled = false;
    const electros = event.id;
    usuario.electros = electros;
    console.log(usuario);
    avanzar();
}

function mostrarReciclar() {
    electrosP.destroy();
    if (dispositivosP != null) {
        dispositivosP.destroy();
    }
    const preguntas = (document.getElementById("preguntas").innerHTML =
        contadorPreguntas + " / 19");
    if (usuario.recicla === undefined) {
        console.log("entró");
        avanceBtn.disabled = true;
    } else {
        avanceBtn.disabled = false;
    }
    reciclasP = new Typed("#txtAnimado", {
        strings: ['<i class="fs-4">¿Reciclas regularmente?</i>'],
        typeSpeed: 30,
        backSpeed: 50,
        shuffle: false,
        backDelay: 1000,
        loop: false,
        showCursor: false,
        fadeOut: true,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 50,
    });
    reciclasP.start();
    const electros = (document.getElementById("electrosConsumo").style.display =
        "none");
    const fondorecicla = (document.body.style.backgroundImage =
        "url(images/reciclaje.jpg)");
    const reci = (document.getElementById("reciclaje").style.display = "flex");
    const dispo = (document.getElementById("conDispositivos").style.display =
        "none");
}

function idReciclaje(event) {
    console.log("aca estoy");
    avanceBtn.disabled = false;
    const reci = event.id;
    usuario.recicla = reci;
    console.log(usuario);
    avanzar();
}

function mostrarDispositivos() {
    reciclasP.destroy();
    if (renovablesP != null) {
        renovablesP.destroy();
    }
    const preguntas = (document.getElementById("preguntas").innerHTML =
        contadorPreguntas + " / 19");
    if (usuario.dispositivos === undefined) {
        console.log("entró");
        avanceBtn.disabled = true;
    } else {
        avanceBtn.disabled = false;
    }
    dispositivosP = new Typed("#txtAnimado", {
        strings: [
            '<i class="fs-5">¿Cuántos dispositivos electrónicos dejas enchufados permanentemente en tu hogar?</i>',
        ],
        typeSpeed: 30,
        backSpeed: 50,
        shuffle: false,
        backDelay: 1000,
        loop: false,
        showCursor: false,
        fadeOut: true,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 50,
    });
    dispositivosP.start();

    const reci = (document.getElementById("reciclaje").style.display = "none");
    const fondoe = (document.body.style.backgroundImage =
        "url(images/energia.jpg)");
    const dispo = (document.getElementById("conDispositivos").style.display =
        "flex");
    const renova = (document.getElementById("tipoRenovables").style.display =
        "none");
}

function idDisposi(event) {
    console.log("aca estoy");
    avanceBtn.disabled = false;
    const dispo = event.id;
    usuario.dispositivos = dispo;
    console.log(usuario);
    avanzar();
}

function mostrarRenovable() {
    dispositivosP.destroy();
    if (aguaConsumo != null) {
        aguaConsumo.destroy();
    }
    const preguntas = (document.getElementById("preguntas").innerHTML =
        contadorPreguntas + " / 19");
    if (usuario.renovables === undefined) {
        console.log("entró");
        avanceBtn.disabled = true;
    } else {
        avanceBtn.disabled = false;
    }
    renovablesP = new Typed("#txtAnimado", {
        strings: [
            '<i class="fs-5">¿Tienes energía renovable con paneles solares o turbinas eólicas?</i>',
        ],
        typeSpeed: 30,
        backSpeed: 50,
        shuffle: false,
        backDelay: 1000,
        loop: false,
        showCursor: false,
        fadeOut: true,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 50,
    });
    renovablesP.start();
    const hogar = (document.getElementById("divHogar").style.display = "flex");
    const fondoenergia = (document.body.style.backgroundImage =
        "url(images/energia.jpg)");
    const dispo = (document.getElementById("conDispositivos").style.display =
        "none");
    const renova = (document.getElementById("tipoRenovables").style.display =
        "flex");
    const agua = (document.getElementById("aguaConsumo").style.display =
        "none");
    const vida = (document.getElementById("divVida").style.display = "none");
}

function idRenovable(event) {
    console.log("aca estoy");
    avanceBtn.disabled = false;
    const reno = event.id;
    usuario.renovables = reno;
    console.log(usuario);
    avanzar();
}

function mostrarAgua() {
    renovablesP.destroy();
    if (product != null) {
        product.destroy();
    }
    const preguntas = (document.getElementById("preguntas").innerHTML =
        contadorPreguntas + " / 19");
    if (usuario.agua === undefined) {
        console.log("entró");
        avanceBtn.disabled = true;
    } else {
        avanceBtn.disabled = false;
    }
    aguaConsumo = new Typed("#txtAnimado", {
        strings: [
            '<i class="fs-5">¿Cuánta agua consumes aproximadamente al día en tu hogar?</i>',
        ],
        typeSpeed: 30,
        backSpeed: 50,
        shuffle: false,
        backDelay: 1000,
        loop: false,
        showCursor: false,
        fadeOut: true,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 50,
    });
    aguaConsumo.start();
    const renova = (document.getElementById("tipoRenovables").style.display =
        "none");
    const hogar = (document.getElementById("divHogar").style.display = "none");
    const fondoagua = (document.body.style.backgroundImage =
        "url(images/agua.jpg)");
    const vida = (document.getElementById("divVida").style.display = "flex");
    const agua = (document.getElementById("aguaConsumo").style.display =
        "flex");
    const local = (document.getElementById("locales").style.display = "none");
    const miModal3 = new bootstrap.Modal(
        document.getElementById("emergenteVida"),
    );
    miModal3.show();
}

function idAgua(event) {
    console.log("aca estoy");
    avanceBtn.disabled = false;
    const agua = event.id;
    usuario.agua = agua;
    console.log(usuario);
    avanzar();
}

function mostrarLocales() {
    aguaConsumo.destroy();
    if (felicidades != null) {
        felicidades.destroy();
    }

    const preguntas = (document.getElementById("preguntas").style.color =
        "#f4dfb9");
    const p = (document.getElementById("preguntas").innerHTML =
        contadorPreguntas + " / 19");
    const flechaAvance = (document.getElementById("imgAvance").style.opacity =
        100);
    if (usuario.locales === undefined) {
        console.log("entró");
        avanceBtn.disabled = true;
    } else {
        avanceBtn.disabled = false;
    }
    product = new Typed("#txtAnimado", {
        strings: ['<i class="fs-5">¿Compras productos locales o importados?</i>'],
        typeSpeed: 30,
        backSpeed: 50,
        shuffle: false,
        backDelay: 1000,
        loop: false,
        showCursor: false,
        fadeOut: true,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 50,
    });
    product.start();
    const vida = (document.getElementById("divVida").style.display = "flex");
    const fondocompras = (document.body.style.backgroundImage =
        "url(images/compras.jpg)");
    const agua = (document.getElementById("aguaConsumo").style.display =
        "none");
    const local = (document.getElementById("locales").style.display = "flex");
    const final = (document.getElementById("divFinal").style.display = "none");
}

function idLocales(event) {
    console.log("aca estoy");
    avanceBtn.disabled = false;
    const local = event.id;
    usuario.locales = local;
    console.log(usuario);
    avanzar();
}

function mostrarFinal() {
    product.destroy();
    const p = (document.getElementById("preguntas").innerHTML = "_");
    felicidades = new Typed("#txtAnimado", {
        strings: [
            '<i class="fs-5">¡Felicidades!Completaste la info que necesito para calcular tu huella de carbono personal</i>',
            '<i class="fs-5">Me gustaría poder enviarte los resultados a tu mail.</i>',
        ],
        typeSpeed: 30,
        backSpeed: 50,
        shuffle: false,
        backDelay: 1000,
        loop: false,
        showCursor: false,
        fadeOut: true,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 50,
    });
    felicidades.start();

    avanceBtn.disabled = true;
    const flechaAvance = (document.getElementById("imgAvance").style.opacity =
        0);
    const local = (document.getElementById("locales").style.display = "none");
    const vida = (document.getElementById("divVida").style.display = "none");
    const final = (document.getElementById("divFinal").style.display = "flex");
    const fondoperfil = (document.body.style.backgroundImage =
        "url(images/perfil.jpg)");
    const calcular = (document.getElementById("calcular").style.display =
        "flex");
    const checkMail = document.getElementById("mail");
    if (checkMail.checked == false) {
        const inputMail = (document.getElementById("usuarioMail").disabled =
            false);
    }
}

function opcionMail() {
    const checkMail = document.getElementById("mail");
    const inputMail = document.getElementById("usuarioMail");
    const btn = document.getElementById("btnCalcular");
    if (checkMail.checked == true) {
        btn.disabled = false;
        inputMail.disabled = true;
    } else {
        inputMail.disabled = false;
        const inputValue = inputMail.value;
        if (inputValue.includes("@")) {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }
    }
}

function calcularHuella() {
    //FORMATEO DE DATOS PARA SER UTILIZADOS EN EL CALCULO
    var c_tipoVehiculo;
    switch (usuario.tipoVehiculo) {
        case "Gasolina":
            c_tipoVehiculo = 2.31;
            break;
        case "Diésel":
            c_tipoVehiculo = 2.68;
            break;
        case "Híbrido":
            c_tipoVehiculo = 1.3;
            break;
        case "Eléctrico":
            c_tipoVehiculo = 0;
            break;
        case "No tengo":
            c_tipoVehiculo = 0;
            break;
        default:
            break;
    }
    console.log(c_tipoVehiculo);

    var c_cantKilometros;
    switch (usuario.cantKilometros) {
        case "Menos de 50":
            c_cantKilometros = 2600;
            break;
        case "50 a 150km":
            c_cantKilometros = 7800;
            break;
        case "Más de 150km":
            c_cantKilometros = 10400;
            break;
        case "sin vehículo":
            c_cantKilometros = 0;
            break;
        case "0":
            c_cantKilometros = 0;
            break;
        default:
            c_cantKilometros = 0;
            break;
    }
    console.log(c_cantKilometros);

    var c_transporteP;
    switch (usuario.transporteP) {
        case "No utilizo":
            c_transporteP = 0;
            break;
        case "1 a 2 días":
            c_transporteP = 192;
            break;
        case "3 a 5 días":
            c_transporteP = 429;
            break;
        case "Más de 5 días":
            c_transporteP = 600;
            break;
        default:
            break;
    }
    console.log(c_transporteP);

    var c_vuelos;
    switch (usuario.vuelos) {
        case "Ninguno":
            c_vuelos = 0;
            break;
        case "1 a 3 vuelos":
            c_vuelos = 750;
            break;
        case "Más de 3 vuelos":
            c_vuelos = 1250;
            break;

        default:
            break;
    }
    console.log(c_vuelos);

    var c_bicicamina;
    switch (usuario.bicicamina) {
        case "No":
            c_bicicamina = 0;
            break;
        case "1 a 2 días":
            c_bicicamina = 327.6;
            break;
        case "3 a 5 días":
            c_bicicamina = 819;
            break;
        case "Todos los días":
            c_bicicamina = 1146;
            break;

        default:
            break;
    }
    console.log(c_bicicamina);

    var c_compVehiculo;
    switch (usuario.compVehiculo) {
        case "No":
            c_compVehiculo = 0;
            break;
        case "Sí, 1 a 2 días":
            c_compVehiculo = 192;
            break;
        case "Sí, 3 o más días":
            c_compVehiculo = 429;
            break;
        default:
            break;
    }
    console.log(c_compVehiculo);

    var c_eficiencia;
    switch (usuario.eficiencia) {
        case "Menos de 10km/litro":
            c_eficiencia = 10;
            break;
        case "10 a 15 km/litro":
            c_eficiencia = 15;
            break;
        case "Más de 15 km/litro":
            c_eficiencia = 18.5;
            break;
        case "sin vehículo":
            c_eficiencia = 1;
            break;
        default:
            c_eficiencia = 1;
            break;
    }
    console.log(c_eficiencia);

    var c_electrica;
    if (usuario.electrica == true) {
        c_electrica = 2500.0;
    } else {
        c_electrica = 1.0;
    }
    console.log(c_electrica);

    var c_gasNatural;
    if (usuario.gasNatural == true) {
        c_gasNatural = 3000;
    } else {
        c_gasNatural = 0;
    }
    console.log(c_gasNatural);

    var c_gasEnvasado;
    if (usuario.gasEnvasado == true) {
        c_gasEnvasado = 150;
    } else {
        usuario.gasEnvasado = false;
        c_gasEnvasado = 0;
    }
    console.log(c_gasEnvasado);

    var c_renovable;
    if (usuario.renovable == true) {
        c_renovable = 1;
    } else {
        usuario.renovable = false;
        c_renovable = 1;
    }
    console.log(c_renovable);

    var c_sizeVivienda;
    switch (usuario.sizeVivienda) {
        case "Menos de 50 m2":
            c_sizeVivienda = 0.9;
            break;
        case "50 a 100 m2":
            c_sizeVivienda = 1.1;
            break;
        case "Más de 100 m2":
            c_sizeVivienda = 1.3;
            break;
        default:
            break;
    }
    console.log(c_sizeVivienda);

    var c_cantPersonas;
    switch (usuario.cantPersonas) {
        case "1 a 2 personas":
            c_cantPersonas = 2;
            break;
        case "3 a 4 personas":
            c_cantPersonas = 4;
            break;
        case "Más de 4 personas":
            c_cantPersonas = 6;
            break;
        default:
            break;
    }
    console.log(c_cantPersonas);

    var c_electros;
    switch (usuario.electros) {
        case "Uso limitado":
            c_electros = 1;
            break;
        case "Uso moderado":
            c_electros = 1.1;
            break;
        case "Uso frecuente":
            c_electros = 1.3;
            break;
        default:
            break;
    }
    console.log(c_electros);

    var c_recicla;
    switch (usuario.recicla) {
        case "No reciclo":
            c_recicla = 1;
            break;
        case "Reciclo algunos materiales":
            c_recicla = 100;
            break;
        case "Reciclo la mayoría":
            c_recicla = 50;
            break;
        default:
            break;
    }
    console.log(c_recicla);

    var c_dispositivos;
    switch (usuario.dispositivos) {
        case "Ninguno":
            c_dispositivos = 1;
            break;
        case "1 a 5 dispositivos":
            c_dispositivos = 81;
            break;
        case "6 a 10 dispositivos":
            c_dispositivos = 162;
            break;
        case "Más de 10 dispositivos":
            c_dispositivos = 243;
            break;
        default:
            break;
    }
    console.log(c_dispositivos);

    var c_renovables;
    switch (usuario.renovables) {
        case "Si, cubro completo":
            c_renovables = 1.1;
            break;
        case "Si, cubro parcial":
            c_renovables = 0.5;
            break;
        case "No, en futuro":
            c_renovables = 1.1;
            break;
        case "No, no planeo":
            c_renovables = 1.1;
            break;
        default:
            break;
    }
    console.log(c_renovables);

    var c_agua;
    switch (usuario.agua) {
        case "Menos de 50":
            c_agua = 5.47;
            break;
        case "51 a 100":
            c_agua = 10.95;
            break;
        case "101 a 150":
            c_agua = 16.42;
            break;
        case "Más de 150":
            c_agua = 22;
            break;
        default:
            break;
    }
    console.log(c_agua);

    var c_locales;
    switch (usuario.locales) {
        case "Siempre locales/temporada":
            c_locales = 200;
            break;
        case "A menudo locales/temporada":
            c_locales = 500;
            break;
        case "Regularmente importados":
            c_locales = 700;
            break;
        case "Principalmente importados":
            c_locales = 1500;
            break;
        default:
            break;
    }
    console.log(c_locales);

    //CALCULAMOS CO2 DE TRANSPORTE
    co2Transporte = parseInt(
        (parseInt(c_cantKilometros) / parseInt(c_eficiencia)) *
        parseInt(c_tipoVehiculo) +
        parseInt(c_transporteP) +
        parseInt(c_vuelos) -
        parseInt(c_bicicamina) +
        parseInt(c_compVehiculo),
    );
    const verco2transporte = (document.getElementById(
        "co2TransporteFinal",
    ).innerHTML = co2Transporte);
    if (co2Transporte < 0) {
        co2Transporte = 0;
    }
    usuario.co2Transporte = co2Transporte;
    console.log(co2Transporte);
    //CALCULAMOS CO2 DE HOGAR
    co2Hogar =
        parseInt(
            (parseInt(
                (parseInt(c_electrica * c_renovables) +
                    c_gasNatural +
                    c_gasEnvasado +
                    c_renovable) *
                c_sizeVivienda *
                c_electros,
            ) +
                c_dispositivos) /
            c_cantPersonas,
        ) - c_recicla;
    if (co2Hogar < 0) {
        co2Hogar = 0;
    }
    usuario.co2Hogar = co2Hogar;
    const verco2hogar = (document.getElementById("co2HogarFinal").innerHTML =
        co2Hogar);
    console.log(co2Hogar);
    //CALCULAMOS CO2 DE ESTILO DE VIDA
    co2Vida = parseInt(c_agua + c_locales);
    usuario.co2Vida = co2Vida;
    console.log(co2Vida);
    const verco2Vida = (document.getElementById("co2VidaFinal").innerHTML =
        co2Vida);
    //CALCULAMOS RESULTADO FINAL
    co2Resultado = co2Hogar + co2Transporte + co2Vida;
    usuario.resultado = co2Resultado;
    const verco2total = (document.getElementById("co2Total").innerHTML =
        co2Resultado + " Kg/co2 Anual");
    const categoriaResultado = document.getElementById("categoriaResult");
    const descripcionCate = document.getElementById("descripcionCate");

    const textoTransporte = document.getElementById("consejoTransporte");
    const textoHogar = document.getElementById("consejoHogar");
    const textoVida = document.getElementById("consejoVida");
    if (co2Resultado <= 2000) {
        usuario.categoria = categorias_u[0];
        categoriaResultado.innerHTML = categorias_u[0];
        descripcionCate.innerHTML = descripcion[0];
        const altolink = (document.getElementById("resultadoAudio").src =
            "sounds/alto.mp3");
        const altolinkaudio = document.getElementById("resultadoAudio").play();
        textoTransporte.innerHTML =
            "Continuar utilizando medios de transporte de bajo impacto como bicicletas, caminar, o vehículos eléctricos. Considera compartir estos hábitos con amigos o familiares para inspirar cambios positivos en su entorno.";
        textoHogar.innerHTML =
            "Si ya utilizas energía renovable y reciclas la mayoría de los materiales, mantén estas prácticas y explora opciones adicionales como la instalación de sistemas de recolección de agua de lluvia.";
        textoVida.innerHTML =
            "Sigue priorizando productos locales y de temporada. Considera reducir aún más tu consumo de carne o participar en actividades comunitarias de reforestación.";
        const linkVerde = (document.getElementById("btnLinks").href =
            "https://ambiente.neuquen.gov.ar/guardianes-verdes/");
    } else if (co2Resultado > 2000 && co2Resultado <= 4000) {
        usuario.categoria = categorias_u[1];
        categoriaResultado.innerHTML = categorias_u[1];
        descripcionCate.innerHTML = descripcion[1];
        const mediolink = (document.getElementById("resultadoAudio").src =
            "sounds/medio.mp3");
        const mediolinkaudio = document.getElementById("resultadoAudio").play();
        textoTransporte.innerHTML =
            "Si utilizas un coche híbrido o transporte público, podrías reducir el uso del coche en favor de medios más sostenibles como la bicicleta o caminar. Evalúa la posibilidad de unirte a un sistema de carpooling.";
        textoHogar.innerHTML =
            "Considera mejorar la eficiencia energética de tu hogar con electrodomésticos de bajo consumo y busca incrementar el uso de energías renovables. Intenta reciclar más materiales si aún no lo haces completamente.";
        textoVida.innerHTML =
            "Intenta reducir tu consumo de productos importados y opta más por opciones locales. Reducir ligeramente el consumo de agua y participar en iniciativas de reforestación también podría ser beneficioso.";
        const linkAmarillo = (document.getElementById("btnLinks").href =
            "https://ambiente.neuquen.gov.ar/guardianes-amarillos/");
    } else {
        usuario.categoria = categorias_u[2];
        categoriaResultado.innerHTML = categorias_u[2];
        descripcionCate.innerHTML = descripcion[2];
        const bajolink = (document.getElementById("resultadoAudio").src =
            "sounds/bajo.mp3");
        const bajolinkaudio = document.getElementById("resultadoAudio").play();
        textoTransporte.innerHTML =
            "Si dependes mucho del coche de gasolina o diésel, podrías cambiar a un vehículo más eficiente o comenzar a usar transporte público. Reducir la cantidad de vuelos también puede tener un gran impacto.";
        textoHogar.innerHTML =
            "Enfócate en mejorar la eficiencia energética de tu hogar, cambiando a fuentes de energía más limpias y reciclando. Apaga los electrodomésticos y dispositivos electrónicos cuando no los utilices, y ajusta el termostato para usar menos calefacción y aire acondicionado.";
        textoVida.innerHTML =
            "Considera disminuir el consumo de carne, preferir productos locales y de temporada. Planifica tus comidas, almacena los alimentos correctamente y realiza compostaje de los restos orgánicos. Optar por prendas de calidad que duren más, y comprar menos ropa es un buen plan! Considera la ropa de segunda mano.¡Cada pequeño cambio puede sumar significativamente!";
        const linkRojo = (document.getElementById("btnLinks").href =
            "https://ambiente.neuquen.gov.ar/guardianes-rojos/");
    }
    console.log(usuario);
}

function mostrarResultados() {
    //GUARDAR MAIL Y FECHA DE OPERACION
    const mailguardar = document.getElementById("usuarioMail").value;
    if (mailguardar.includes("@")) {
        usuario.mail = mailguardar;
    }
    console.log(usuario.mail);

    let fechaActual = new Date();
    let fechaFormateada = `${fechaActual.getFullYear()}${fechaActual.getMonth() + 1}${fechaActual.getDate()}`;
    usuario.fecha = fechaFormateada;
    console.log(usuario.fecha);

    calcularHuella();
    const preguntas = (document.getElementById("listaPreguntas").style.display =
        "none");
    const resultscreen = (document.getElementById(
        "pantallaResultados",
    ).style.display = "flex");
    const fondoresultados = (document.body.style.backgroundImage =
        "url(images/resultado.jpg)");

    //////////////GUARDAR BASE DE DATOS USUARIO EN ESTE PUNTO///////////////

    //HUELLAS.create(usuario);
}

//TECLAS DE CONTROL AVANCE Y RETROCESO

function avanzar() {
    //AUMENTA LA POSICION DE PANTALLAS
    pantallaActiva += 1;
    switch (pantallaActiva) {
        case 0:
            contadorPreguntas = 0;
            comenzar();
            break;
        case 1:
            contadorPreguntas = 1;
            mostrarPreguntas();
            break;
        case 2:
            contadorPreguntas = 2;
            var audio = document.getElementById("saludo");
            audio.pause();
            audio.currentTime = 0; // Opcional: Reinicia el audio al principio
            //GUARDO EL NOMBRE INGRESADO AL TOCAR AVANZAR
            const idname = document.getElementById("usuarioNombre").value;
            usuario.nombre = idname;
            console.log(usuario);
            mostrarEdad();
            break;
        case 3:
            contadorPreguntas = 3;
            //GUARDO LA EDAD AL TOCAR AVANZAR
            const idEdad = document.getElementById("usuarioEdad").value;
            usuario.edad = idEdad * 1;
            console.log(usuario);
            mostrarZona();
            break;
        case 4:
            const vozTransporte = document.getElementById("audioTransporte").play();
            contadorPreguntas = 4;
            mostrarVehiculo();
            break;
        case 5:
            audioTransporte.pause();
            audioTransporte.currentTime = 0;
            if (usuario.tipoVehiculo == "No tengo") {
                contadorPreguntas = 6;
                pantallaActiva += 1;
                mostrarTransporte();
                break;
            } else {
                contadorPreguntas = 5;
                mostrarKilometros();
                break;
            }

        case 6:
            contadorPreguntas = 6;
            mostrarTransporte();
            break;
        case 7:
            contadorPreguntas = 7;
            mostrarVuelos();
            break;
        case 8:
            contadorPreguntas = 8;
            mostrarBiciCamina();
            break;
        case 9:
            contadorPreguntas = 9;
            mostrarCarpooling();
            break;
        case 10:
            if (usuario.tipoVehiculo == "No tengo") {
                contadorPreguntas = 11;
                pantallaActiva += 1;
                mostrarEnergia();
                break;
            } else {
                contadorPreguntas = 10;
                mostrarEficiencia();
                break;
            }
        case 11:
            const vozHogar = document.getElementById("audioHogar").play();
            contadorPreguntas = 11;
            mostrarEnergia();
            break;
        case 12:
            audioHogar.pause();
            audioHogar.currentTime = 0;
            contadorPreguntas = 12;
            mostrarVivienda();
            break;
        case 13:
            contadorPreguntas = 13;
            mostrarPersonas();
            break;
        case 14:
            contadorPreguntas = 14;
            mostrarElectros();
            break;
        case 15:
            contadorPreguntas = 15;
            mostrarReciclar();
            break;
        case 16:
            contadorPreguntas = 16;
            mostrarDispositivos();
            break;
        case 17:
            contadorPreguntas = 17;
            mostrarRenovable();
            break;
        case 18:
            const vozVida = document.getElementById("audioVida").play();
            contadorPreguntas = 18;
            mostrarAgua();
            break;
        case 19:
            audioVida.pause();
            audioVida.currentTime = 0;
            contadorPreguntas = 19;
            mostrarLocales();
            break;
        case 20:
            mostrarFinal();
            break;
        default:
            comenzar();
            break;
    }
}

function retroceder() {
    //REDUCE LA POSICION DE PANTALLAS
    pantallaActiva -= 1;
    switch (pantallaActiva) {
        case 0:
            comenzar();
            contadorPreguntas = 0;

            break;
        case 1:
            mostrarPreguntas();
            contadorPreguntas = 1;
            break;
        case 2:
            contadorPreguntas = 2;
            mostrarEdad();
            break;
        case 3:
            contadorPreguntas = 3;
            mostrarZona();
            break;
        case 4:
            contadorPreguntas = 4;
            mostrarVehiculo();
            break;
        case 5:
            if (usuario.tipoVehiculo == "No tengo") {
                contadorPreguntas = 4;
                pantallaActiva -= 1;
                mostrarVehiculo();
                break;
            } else {
                contadorPreguntas = 5;
                mostrarKilometros();
                break;
            }

        case 6:
            contadorPreguntas = 6;
            mostrarTransporte();
            break;
        case 7:
            contadorPreguntas = 7;
            mostrarVuelos();
            break;
        case 8:
            contadorPreguntas = 8;
            mostrarBiciCamina();
            break;
        case 9:
            contadorPreguntas = 9;
            mostrarCarpooling();
            break;
        case 10:
            if (usuario.tipoVehiculo == "No tengo") {
                contadorPreguntas = 9;
                pantallaActiva -= 1;
                mostrarCarpooling();
                break;
            } else {
                contadorPreguntas = 10;
                mostrarEficiencia();
                break;
            }
        case 11:
            contadorPreguntas = 11;
            mostrarEnergia();
            break;
        case 12:
            contadorPreguntas = 12;
            mostrarVivienda();
            break;
        case 13:
            contadorPreguntas = 13;
            mostrarPersonas();
            break;
        case 14:
            contadorPreguntas = 14;
            mostrarElectros();
            break;
        case 15:
            contadorPreguntas = 15;
            mostrarReciclar();
            break;
        case 16:
            contadorPreguntas = 16;
            mostrarDispositivos();
            break;
        case 17:
            contadorPreguntas = 17;
            mostrarRenovable();
            break;
        case 18:
            contadorPreguntas = 18;
            mostrarAgua();
            break;
        case 19:
            contadorPreguntas = 19;
            avanceBtn.disabled = false;
            mostrarLocales();
            break;
        default:
            comenzar();
            break;
    }
}

// ANIMACION HUELLITA
var im = document.getElementById("imghuellita");
var im2 = document.getElementById("imghuellita2");

var images = ["images/imagen1.png", "images/imagen2.png", "images/imagen3.png"];
var index = 0;

function changeImage() {
    im.setAttribute("src", images[index]);
    im2.setAttribute("src", images[index]);
    index++;
    if (index >= images.length) {
        index = 0;
    }
}
// Cambia la imagen cada 0.5 segundos
setInterval(changeImage, 600);


idName = document.getElementById("usuarioNombre");
idName.addEventListener("input", () => {
    const texto = idName.value.trim();
    avanceBtn.disabled = texto === "";
});

idEdad = document.getElementById("usuarioEdad");
idEdad.addEventListener("input", () => {
    const texto = idEdad.value.trim();
    avanceBtn.disabled = texto === "";
});
avanceBtn = document.getElementById("avance");

//VERIFICA SI ESCRIBIERON CORRECTAMENTE EL FORMATO DE UNA DIRECCION MAIL Y ACTIVA EL BOTON CALCULAR
const inputElement = document.getElementById("usuarioMail");

inputElement.addEventListener("input", function (event) {
    const inputValue = event.target.value;
    if (inputValue.includes("@")) {
        const btn = (document.getElementById("btnCalcular").disabled = false);
    } else {
        const btn = (document.getElementById("btnCalcular").disabled = true);
    }
});


//SE EJECUTA PARA CARGA LA PAGINA PRINCIPAL
comenzar();