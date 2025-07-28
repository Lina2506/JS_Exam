document.getElementById('text_input').innerText = 'Name/Value Pair';
document.getElementById('text_target').innerText = 'Name/Value Pair List';



const form = document.getElementById('textBox');
const listForEl = document.querySelector('.listForEl');

let elementsArr  = JSON.parse(localStorage.getItem('elementsArr'))||[];
renderList();

form.onsubmit = function (ev) {
    ev.preventDefault();

    const nameValue = this.inputPair.value.trim();
    const pairSplit = nameValue.split('=', 2);

    if(pairSplit.length < 2) return;

    let nameOfPair = pairSplit[0].trim();
    let valueOfPair = pairSplit[1].trim();

    const regex=/^[a-zA-Z0-9_]+$/;

    if (!nameOfPair || !valueOfPair || !regex.test(nameOfPair) || !regex.test(valueOfPair))  {
        alert("contain only alpha-numeric characters");
        return;
    }

    elementsArr.push({ name: nameOfPair, value:valueOfPair });
    localStorage.setItem('elementsArr', JSON.stringify(elementsArr));

    renderList();
    form.reset();
};

function renderList() {
    listForEl.innerHTML = '';
    elementsArr.forEach((pair, index) => {
        const li = document.createElement('li');
        li.className = 'listElements';
        li.innerText=`${pair.name}=${pair.value}`;
        li.dataset.index = index.toString();

        li.onclick = function () {
            li.classList.toggle('selected');
        }

        listForEl.appendChild(li);
    });
}
const buttonSortName = document.getElementById('buttonSortName');
buttonSortName.onclick=function (){
    elementsArr.sort((a,b) => a.name.localeCompare(b.name));
    localStorage.setItem('elementsArr', JSON.stringify(elementsArr));
    renderList();
}

const buttonSortValue = document.getElementById('buttonSortValue');
buttonSortValue.onclick=function (){
    elementsArr.sort((a,b) => a.value.localeCompare(b.value));
    localStorage.setItem('elementsArr', JSON.stringify(elementsArr));
    renderList();
};

const buttonDeleteList = document.getElementById('buttonDelete');

buttonDeleteList.onclick = function () {
    const selectedList = document.querySelectorAll('.listElements.selected');
    const selectedIndexes=Array.from(selectedList).map(li=>+li.dataset.index);


    elementsArr= elementsArr.filter((_,index)=>!selectedIndexes.includes(index));
    localStorage.setItem('elementsArr', JSON.stringify(elementsArr));
    renderList();
};
