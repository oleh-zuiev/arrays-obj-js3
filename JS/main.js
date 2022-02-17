// =========task1===========
// ==========1.1============
function returnUserInfo(name, id) {
    return `${name} ID#${id}`; 
}
console.log(returnUserInfo('Helen', '8677'));
// ==========1.2================
let userList = [{ name: 'Igor', salary: 900, },
                { name: 'Oleg', salary: 1800 },
                { name: 'John', salary: 1400 },
                { name: 'Mary', salary: 2100 },]
function getAverageAmount(arr) {
    let totalSalary = 0;
    for (let i = 0; i < arr.length; i += 1){
        totalSalary += arr[i].salary;  
    }
    let averageAmount = totalSalary / arr.length;
    return averageAmount;
}
console.log(getAverageAmount(userList));
// =============Task2===============
const salariesList = document.querySelector('.js-salaries-list');
let salariesArray = [];
function generateList(list) {
    for (const item of list) {
        salariesArray.push(`<li class="test-li _center">${item.name}:${item.salary}</li>`);
    }
}
generateList(userList);
let salariesStr = salariesArray.join('');
salariesList.innerHTML = `<ul>${salariesStr}</ul>`;
// =============Task3===============
let eText;
const tooltipItem = document.createElement('span');
tooltipItem.classList.add('tooltip');
const allLiElementsRef = document.querySelectorAll('.test-li');
for (const liElement of allLiElementsRef) {
    liElement.addEventListener('mouseover', function (e) {
        eText = e.target.textContent;
        tooltipItem.innerHTML = `${eText}`;
        liElement.append(tooltipItem);
        addTooltip();
    });
    liElement.addEventListener('mouseout', function () {
        liElement.removeChild(tooltipItem);
        removeTooltip();
    })
}
function addTooltip() {    
    console.log('here');
}
function removeTooltip() {
    console.log('away');
}