const creatList = document.querySelector('.withJs');

const arr = [
  {1 : 'Math Remedial Class'},
  {2 : 'Science Lab Projects'},
  {3 : 'Participation in Music Group'}
]

function myFunction(item) {
  
  for(let key in item){
    const paragraph = document.createElement('p');
    paragraph.textContent = ` ${key} : ${item[key]}`;
    creatList.appendChild(paragraph);
    paragraph.className = 'item';

    const creatInput0 = document.createElement('input');
    creatInput0.type = 'checkbox';

    const cLable = document.createElement('label');
    cLable.textContent = 'Accept';
    creatList.appendChild(creatInput0);
    creatList.appendChild(cLable);
    creatInput0.className = 'item';
    
    const creatInput1 = document.createElement('input');
    creatInput1.type = 'checkbox';
    creatList.appendChild(creatInput1);
    creatInput1.className = 'item';
    const cLable1 = document.createElement('label');
    cLable1.textContent = 'delete';
    creatList.appendChild(creatInput0);
    creatList.appendChild(cLable1);

   const cLable2 = document.createElement('label');
    cLable2.textContent = 'comment :';
    creatList.appendChild(creatInput0);
    creatList.appendChild(cLable2);

    const creatInput = document.createElement('input');
    creatInput.type = 'text';
    creatList.appendChild(creatInput);
    creatInput.className = 'item';

    creatInput0.addEventListener('click', () => {
      creatInput1.checked = false;
      paragraph.innerHTML = paragraph.textContent;
  });

  creatInput1.addEventListener('click', () => {
    creatInput0.checked = false;
    paragraph.innerHTML = `<s>${paragraph.textContent}</s>`;
  });
  }}
  myFunction.className = 'con1';
arr.forEach(myFunction);