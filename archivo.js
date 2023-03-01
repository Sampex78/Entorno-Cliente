function iniciar() {
    document.getElementsByName('btonA')[0].addEventListener('click', anadir);
    document.getElementsByName('btonE')[0].addEventListener('click', eliminar);
}


function anadir() {

    var padre = document.getElementsByTagName('p')[0];

    if (padre.innerHTML != "Cada mochuelo ... en su olivo") {
        if (padre.innerHTML == 'Cada mochuelo ...') {
            padre.innerHTML += " en su olivo";
        }
    }

}

function eliminar() {
    var hijo = document.getElementById('A');
    hijo.parentNode.removeChild(hijo);
}

document.addEventListener('DOMContentLoaded', iniciar);
