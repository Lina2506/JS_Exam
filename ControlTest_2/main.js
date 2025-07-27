document.getElementById('text_input').innerText = 'Name/Value Pair';
document.getElementById('text_target').innerText = 'Name/Value Pair List';



const form = document.getElementById('textBox');
const listForEl = document.getElementsByClassName('listForEl')[0];
const buttonDeleteList = document.getElementById('buttonDelete');


let elementsArr  = [];

console.log(elementsArr);


form.onsubmit = function (ev) {
    ev.preventDefault();

    const nameValue = this.inputPair.value;
    const nameValueStr  = `${nameValue}`;
    const pairSplit = nameValueStr.trim().split('=', 2);
    let nameOfPair = pairSplit[0];
    let valueOfPair = pairSplit[1];
        if (valueOfPair === undefined) {
            return '';
        }

    let obj = {nameOfPair, valueOfPair};

    const listEl = document.createElement("li");
    listEl.innerText = obj.nameOfPair +'='+ obj.valueOfPair;

    listForEl.appendChild(listEl);
    listEl.classList.add('listElements');

    elementsArr.push(listEl);
    form.reset();

};
const buttonSortName = document.getElementById('buttonSortName');
let ulList = document.getElementsByClassName('listElements');
for (const ulListElement of ulList) {
    console.log(ulList);
}
console.log(ulList)
buttonSortName.onclick = function (ev) {
    ev.preventDefault();
    ulList.sort((a, b) => {
        if (a.nameOfPair > b.nameOfPair) {
            return 1;
        }
        if (a.nameOfPair < b.nameOfPair) {
            return -1;
        }
        if (a.nameOfPair === b.nameOfPair) {
            return 0;
        }
    });
};

const buttonSortValue = document.getElementById('buttonSortValue');
buttonSortValue.onclick=function (){
    ulList.sort((a,b) => {
        if (a.valueOfPair>b.valueOfPair){
            return 1;
        }
        if (a.valueOfPair<b.valueOfPair){
            return -1;
        }
        if (a.valueOfPair===b.valueOfPair){
            return 0;
        }
    });
};


buttonDeleteList.onclick = function () {
    listForEl.remove();
};
