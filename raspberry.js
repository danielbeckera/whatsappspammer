campo = document.getElementsByClassName("input")[1]; // Grabs the input field

function dispatch(target, eventType, char) {
   var evt = document.createEvent("TextEvent");
   evt.initTextEvent (eventType, true, true, window, char, 0, "en-US");
   target.focus();
   target.dispatchEvent(evt);
}

function bomDia() {
    var horario = new Date();

    if (horario.getHours() === 5 && horario.getMinutes() === 45) {
        dispatch(campo, "textInput", "bom dia");
    }

    document.getElementsByClassName("icon btn-icon icon-send")[0].click();
}

setInterval(bomDia, 40000);