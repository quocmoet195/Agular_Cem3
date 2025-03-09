"use strict";
function readJson() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'car.json', false);
    xhr.send();
    if (xhr.status !== 200) {
        alert('Ошибка ' + xhr.status + ':' + xhr.statusText);
    }
    else {
        alert(xhr.responseText);
    }
}
readJson();
