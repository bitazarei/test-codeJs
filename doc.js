const cont = document.querySelector(".container");

cont.addEventListener('click', eventHandler);

function eventHandler(event) {
  let massage = `event type : ${event.type}</br>`;

    massage += `event target : ${event.target.nodeName}</br>`
    massage += `event coordinates in the viewport : ${event.clientX} , ${event.clientY}</br>`
    massage += `event offset X : ${event.offsetX}, event offset Y : ${event.offsetY}</br>`
    massage += `event page X : ${event.pageX} , event page Y : ${event.pageY}`
    massage += `event screen X,Y : ${event.screenX}, ${event.screenY} </br>`
    massage += `Do I push the Alt? ${event.altKey}</br>`;
    massage += `Ctrl ? ${event.ctrlKey}</br>`;
    massage += `shift ? ${event.shiftKey}`;

  cont.innerHTML = massage;
}