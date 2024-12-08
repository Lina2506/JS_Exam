document.getElementById('text_input').innerText = 'Name/Value Pair';
document.getElementById('text_target').innerText = 'Name/Value Pair List';



const form = document.getElementById('textBox');
const listForEl = document.getElementsByClassName('listForEl')[0];
const buttonDeleteList = document.getElementById('buttonDelete');
const buttonSortName = document.getElementById('buttonSortName');


let elementsArr  = [];
console.log(elementsArr);


form.onsubmit = function (ev) {
    ev.preventDefault();

    const nameValue = this.inputPair.value;
    const nameValueStr  = `${nameValue}`;
    const pairSplit = nameValueStr.split('=', 2);
    let nameOfPair = pairSplit[0];
    let valueOfPair = pairSplit[1];
    if (valueOfPair === undefined) {
        return '';
    }


    const listEl = document.createElement("li");
    listEl.classList.add(nameValue);
    listEl.innerText = nameOfPair +'='+ valueOfPair;

    listForEl.appendChild(listEl);


    elementsArr.push({listEl});
    form.reset();

};

buttonDeleteList.onclick = function () {
    listForEl.remove();
};
