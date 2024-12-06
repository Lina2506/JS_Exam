document.getElementById('text_input').innerText = 'Name/Value Pair';
document.getElementById('text_target').innerText = 'Name/Value Pair List';



const form = document.getElementById('textBox');
const listForEl = document.getElementsByClassName('listForEl')[0];





form.onsubmit = function (ev) {
    ev.preventDefault();

    const nameValue = form.inputPair.value;
    const pairSplit = `${nameValue}`;
    let split = pairSplit.split('=');
    let nameOfPair = split[0];
    let valueOfPair = split[1];
    if (valueOfPair === undefined) {
        return '';
    }

    const listEl = document.createElement("li");
    listEl.classList.add(nameValue);
    listEl.innerText =nameOfPair +'='+valueOfPair;
    listForEl.appendChild(listEl);



    elements.push({listEl});
    form.reset();

    const buttonDeleteList = document.getElementById('buttonDelete');
    buttonDeleteList.onclick = function () {
        listEl.remove();
    };
}

let elements = [];
console.log(elements);
