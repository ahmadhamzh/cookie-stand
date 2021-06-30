"use strict"

const time = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:pm']
// console.log(time);
let theArrayShop = [];


function Branch(name, mincust, maxcust, AvgCookie) {
    this.name = name;
    this.mincust = mincust;
    this.maxcust = maxcust;
    this.AvgCookie = AvgCookie;
    this.calc = NumOfCust(this.mincust, this.maxcust, this.AvgCookie);
    this.CustPerHour = this.calc[0];
    this.CookiePerHour = this.calc[1];
    this.sumCookies = this.calc[2];
    theArrayShop.push(this);


}
// console.log(theArrayShop);
// console.log(shopName);

let Seattle = new Branch('Seattle', 23, 65, 6.3);
// console.log(Seattle);
let Tokyo = new Branch('Tokyo', 3, 24, 1.2);
// console.log(Tokyo);
let Dubai = new Branch('Dubai', 11, 38, 3.7);
// console.log(Dubai);
let Paris = new Branch('Paris', 20, 38, 2.3);
// console.log(Paris);
let Lima = new Branch('Lima', 2, 16, 4.6);
// console.log(Lima);






function NumOfCust(min, max, avg) {
    let cust = []
    let cookies = []
    let sumCookies = 0
    for (let i = 0; i < time.length; i++) {

        cust.push(Math.floor(Math.random() * (max - min + 1) + min));
        // console.log(cust);
    }
    for (let i = 0; i < time.length; i++) {

        cookies.push(Math.floor(cust[i] * avg));
        sumCookies += cookies[i]

    }

    // console.log(cookies)


    return [cust, cookies, sumCookies]
}



let parents = document.getElementById('BranchesSales');
let Table = document.createElement('table');
parents.appendChild(Table);
// console.log(Table);
let headRaw = document.createElement('tr');
Table.appendChild(headRaw);

let headData = document.createElement('th');
headRaw.appendChild(headData);

headData.textContent = 'shop name';
function creatTh() {

    for (let i = 0; i < time.length; i++) {


        let headData = document.createElement('th');
        headRaw.appendChild(headData);
        headData.textContent = time[i]
    }
    let headData = document.createElement('th');
    headRaw.appendChild(headData);
    headData.textContent = 'Total'

}
creatTh();






Branch.prototype.render = function () {
    // this.getcust();
    // this.getcookie();

    let headRaw = document.createElement('tr');
    Table.appendChild(headRaw);

    let headData = document.createElement('td');
    headRaw.appendChild(headData);
    headData.textContent = this.name;

    for (let i = 0; i < this.CookiePerHour.length; i++) {


        let headData = document.createElement('td');
        headRaw.appendChild(headData);
        headData.textContent = this.CookiePerHour[i]
    }

    let headTotal = document.createElement('td');
    headRaw.appendChild(headTotal);
    headTotal.textContent = this.sumCookies;
    // console.log(headTotal);
}

function totalRaw() {

    let headRaw = document.createElement('tr');
    Table.appendChild(headRaw);
    let headData = document.createElement('td');
    headRaw.appendChild(headData);
    headData.textContent = 'Totals'
    let allBranchesCookiesPerDay = 0

    for (let i = 0; i < time.length; i++) {
        let branchesCoockiesPerHour = 0
        for (let j = 0; j < theArrayShop.length; j++) {
            branchesCoockiesPerHour += theArrayShop[j].CookiePerHour[i]

        }
        // console.log(branchesCoockiesPerHour);
        let headData = document.createElement('td');
        headRaw.appendChild(headData);
        headData.textContent = branchesCoockiesPerHour
        allBranchesCookiesPerDay += branchesCoockiesPerHour
        // console.log(allBranchesCookiesPerDay);
    }
    let allBranchesCookiesPerDayData = document.createElement('td');
    headRaw.appendChild(allBranchesCookiesPerDayData);
    allBranchesCookiesPerDayData.textContent = allBranchesCookiesPerDay
}

const newShop = document.getElementById('newShopForm');
newShop.addEventListener('submit', addShop)

for (let i = 0; i < theArrayShop.length; i++) {

    theArrayShop[i].render()

};
totalRaw();

function addShop(events) {

    events.preventDefault();
    const newNameShop = events.target.shopName.value
    console.log(newNameShop);
    let newmincust = events.target.minCust.value
    newmincust = parseInt(newmincust);
    console.log(newmincust);
    let newmaxcust = events.target.maxCust.value
    newmaxcust = parseInt(newmaxcust);
    console.log(newmaxcust);
    let newavgCookies = events.target.avgCookies.value
    newavgCookies = parseFloat(newavgCookies);
    console.log(newavgCookies);
    console.log(theArrayShop[0].name);

    for (let i = 0; i < theArrayShop.length; i++) {


        if (newNameShop == theArrayShop[i].name) {

            alert('you already have this shop')

            return
        }
    }



    const newShop = new Branch(newNameShop, newmincust, newmaxcust, newavgCookies)
    console.log(newShop);

    Table.deleteRow(Table.rows.length - 1)
    newShop.render();


    totalRaw();
}


