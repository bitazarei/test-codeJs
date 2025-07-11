const input = document.querySelector('.myInput');
const p = document.querySelector('.myP');
const body = document.querySelector('body');
// input.addEventListener('keydown', (event) => {
//     p.innerHTML += `key : ${event.key} </br>`;
//     p.innerHTML += `event type : ${event.type}</br>`;

    // p.innerHTML += `targrt : ${event.target.nodeName}</br>`;
    // p.innerHTML += `event code : ${event.code}</br>`;
    // p.innerHTML += ` alt : ${event.altKey}</br>`;
    // p.innerHTML += ` ctrl : ${event.ctrlKey}</br>`;
    // p.innerHTML += ` shift : ${event.shiftKey}</br>`;
    // p.innerHTML += ` repeat : ${event.repeat}</br>`;


    input.addEventListener('keydown', (event) => {
    //p.innerHTML += `key : ${event.key.a} </br>`;
    let key = event.key;
      let ctrl = event.ctrlKey;
      p.innerHTML += key;
        if (key === 'a' & ctrl === true ) {
         document.body.style.backgroundColor = 'salmon';
        }
       })
        