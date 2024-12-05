var estado = false;

function cambiarEstado(boton) {
    boton.disable = true;
    if (!estado) {
        boton.value = "X";
    } else {
        boton.value = "O";
    }
    estado = !estado;
    verificar();
}

function verificar() {
    var botones = document.querySelectorAll("input[type='button']");
    const estilo = document.createElement("style");

    if (botones[0].value == botones[1].value && botones[1].value == botones[2].value && botones[0].value != "") {
        estilo.textContent = `
            tr:nth-child(1)::after {
                content: "";
                position: absolute;
                top: 50%;
                left: 0;
                right: 0;
                height: 25px;
                background-color: yellow;
                z-index: 1;
                pointer-events: none;
            }
        `;
        alert("Gana " + botones[0].value);
    }
    if (botones[3].value == botones[4].value && botones[4].value == botones[5].value && botones[3].value != "") {
        estilo.textContent = `
            tr:nth-child(2)::after {
                content: "";
                position: absolute;
                top: 50%;
                left: 0;
                right: 0;
                height: 25px;
                background-color: yellow;
                z-index: 1;
                pointer-events: none;
            }
        `;
        alert("Gana " + botones[3].value);
    }
    if (botones[6].value == botones[7].value && botones[7].value == botones[8].value && botones[6].value != "") {
        estilo.textContent = `
            tr:nth-child(3)::after {
                content: "";
                position: absolute;
                top: 50%;
                left: 0;
                right: 0;
                height: 25px;
                background-color: yellow;
                z-index: 1;
                pointer-events: none;
            }
        `;
        alert("Gana " + botones[6].value);
    }
    if (botones[0].value == botones[3].value && botones[3].value == botones[6].value && botones[0].value != "") {
        estilo.textContent = `
            td:nth-child(1)::after {
                content: "";
                position: absolute;
                top: -1px;
                bottom: -1px;
                left: 50%;
                width: 25px;
                background-color: yellow;
                z-index: 1;
                pointer-events: none;
            }
        `;
        alert("Gana " + botones[0].value);
    }
    if (botones[1].value == botones[4].value && botones[4].value == botones[7].value && botones[1].value != "") {
        estilo.textContent = `
            td:nth-child(2)::after {
                content: "";
                position: absolute;
                top: -1px;
                bottom: -1px;
                left: 50%;
                width: 25px;
                background-color: yellow;
                z-index: 1;
                pointer-events: none;
            }
        `;
        alert("Gana " + botones[1].value);
    }
    if (botones[2].value == botones[5].value && botones[5].value == botones[8].value && botones[2].value != "") {
        estilo.textContent = `
            td:nth-child(3)::after {
                content: "";
                position: absolute;
                top: -1px;
                bottom: -1px;
                left: 50%;
                width: 25px;
                background-color: yellow;
                z-index: 1;
                pointer-events: none;
            }
        `;
        alert("Gana " + botones[2].value);
    }
    if (botones[0].value == botones[4].value && botones[4].value == botones[8].value && botones[0].value != "") {
        estilo.textContent = `
            table::after {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: calc(100% * 1.414);
                height: calc(100% * 1.414);
                border-top: 5px solid black;
                transform: rotate(45deg);
                transform-origin: top left;
                z-index: 1;
                pointer-events: none;
            }
        `;
        alert("Gana " + botones[0].value);
    }
    if (botones[2].value == botones[4].value && botones[4].value == botones[6].value && botones[2].value != "") {
        estilo.textContent = `
            table::after {
                content: "";
                position: absolute;
                top: 0;
                right: 0;
                width: calc(100% * 1.414);
                height: calc(100% * 1.414);
                border-top: 5px solid black;
                transform: rotate(-45deg);
                transform-origin: top right;
                z-index: 1;
                pointer-events: none;
            }
        `;
        alert("Gana " + botones[2].value);
    }
    document.head.appendChild(estilo);
}