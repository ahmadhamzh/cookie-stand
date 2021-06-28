"use strict"

const time = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:pm']
console.log(time);
// let Seattle = {
//     MinCust: 23,
//     MaxCust: 65,
//     AvgCookie: 6.3,
//     CustPerHour: [],
//     CookiePerHour: [],
//     GetCust: function () {
//         this.CustPerHour = NumOfCust(this.MinCust, this.MaxCust, this.AvgCookie)[0]
//     },
//     GetCookie: function () {
//         this.CookiePerHour = NumOfCust(this.MinCust, this.MaxCust, this.AvgCookie)[1]
//     },


// };
// console.log(Seattle)
// Seattle.GetCust()
// Seattle.GetCookie()
// =========================================
// =================================
function Branch(name, mincust, maxcust, AvgCookie) {
    this.name = name;
    this.mincust = mincust;
    this.maxcust = maxcust;
    this.AvgCookie = AvgCookie;
    this.calc = NumOfCust(this.mincust, this.maxcust, this.AvgCookie);
    this.CustPerHour = this.calc[0];
    this.CookiePerHour = this.calc[1];
    this.sumCookies = this.calc[2];

}


let Seattle = new Branch('Seattle', 23, 65, 6.3);
console.log(Seattle);
let Tokyo = new Branch('Tokyo', 3, 24, 1.2);
console.log(Tokyo);
let Dubai = new Branch('Dubai', 11, 38, 3.7);
console.log(Dubai);
let Paris = new Branch('Paris', 20, 38, 2.3);
console.log(Paris);
let Lima = new Branch('Lima', 2, 16, 4.6);
console.log(Lima);


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

// NumOfCust();
let totals = [];
function totalCookiesPerHour() {

    for (let i = 0; i < time.length; i++) {
        let sumCookies = Seattle.CookiePerHour[i] + Tokyo.CookiePerHour[i] + Dubai.CookiePerHour[i] + Paris.CookiePerHour[i] + Lima.CookiePerHour[i]
        totals.push(sumCookies);

    }
    return totals

}
totalCookiesPerHour();

// Branch.prototype.getcust = function () {
//     this.CustPerHour.push(NumOfCust(this.mincust, this.maxcust, this.AvgCookie)[0])
//     console.log(this.CustPerHour);
// };
// Branch.prototype.getcookie = function () {
//     this.CookiePerHour.push(NumOfCust(this.mincust, this.maxcust, this.AvgCookie)[1])
//     console.log(this.CookiePerHour);
// };



// Seattle.getcust();
// Seattle.getcookie();
// Tokyo.getcust();
// Tokyo.getcookie();
// Dubai.getcust();
// Dubai.getcookie();
// Paris.getcust();
// Paris.getcookie();
// Lima.getcust();
// Lima.getcookie();

console.log(Seattle)

let parents = document.getElementById('BranchesSales');
let Table = document.createElement('table');
parents.appendChild(Table);
let headRaw = document.createElement('tr');
Table.appendChild(headRaw);

let headData = document.createElement('th');
headRaw.appendChild(headData);

headData.textContent = 'shop name';

for (let i = 0; i < time.length; i++) {


    let headData = document.createElement('th');
    headRaw.appendChild(headData);
    headData.textContent = time[i]
}






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



}
function totalRaw (){

    let headRaw = document.createElement('tr');
    Table.appendChild(headRaw);
    let headData = document.createElement('td');
    headRaw.appendChild(headData);
    headData.textContent = 'Totals'
    
    for (let i = 0; i < totals.length; i++) {
        
        
        let headData = document.createElement('td');
        headRaw.appendChild(headData);
        headData.textContent = totals[i]
    }
    
}





Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();

totalRaw();


// let parents = document.getElementById('BranchesSales');

// let branch1 = document.createElement('h1');
// parents.appendChild(branch1);
// branch1.textContent = 'Seattle branch';
// let SeattleUl = document.createElement('ul');
// parents.appendChild(SeattleUl);
// SeattleUl.textContent = 'mount of sold';





// let Tokyo = {
//     MinCust : 3,
//     MaxCust : 24,
//     AvgCookie : 1.2,
//     CustPerHour : [],
//     CookiePerHour : [],
//     GetCust : function(){
//         this.CustPerHour = NumOfCust(this.MinCust,this.MaxCust,this.AvgCookie)[0]
//     },
//     GetCookie : function(){
//         this.CookiePerHour = NumOfCust(this.MinCust,this.MaxCust,this.AvgCookie)[1]
//     },

// }
// console.log(Tokyo)
// console.log(Tokyo.GetCust())
// console.log(Tokyo.GetCookie())


// let Dubai = {
//     MinCust : 11,
//     MaxCust : 38,
//             AvgCookie : 3.7,
//             CustPerHour : [],
//             CookiePerHour : [],
//             GetCust : function(){
//                 this.CustPerHour = NumOfCust(this.MinCust,this.MaxCust,this.AvgCookie)[0]
//             },
//             GetCookie : function(){
//                 this.CookiePerHour = NumOfCust(this.MinCust,this.MaxCust,this.AvgCookie)[1]
//             },

//         }
//         console.log(Dubai)
//         console.log(Dubai.GetCust())
//         console.log(Dubai.GetCookie())



//         let Paris = {
//             MinCust : 20,
//             MaxCust : 38,
//             AvgCookie : 2.3,
//             CustPerHour : [],
//             CookiePerHour : [],
//             GetCust : function(){
//                 this.CustPerHour = NumOfCust(this.MinCust,this.MaxCust,this.AvgCookie)[0]
//             },
//             GetCookie : function(){
//                 this.CookiePerHour = NumOfCust(this.MinCust,this.MaxCust,this.AvgCookie)[1]
//             },         
//         }
//         console.log(Paris)
//         console.log(Paris.GetCust())
//         console.log(Paris.GetCookie())


//         let Lima = {
//             MinCust : 2,
//             MaxCust : 16,
//             AvgCookie : 4.6,
//             CustPerHour : [],
//             CookiePerHour : [],
//             GetCust : function(){
//                 this.CustPerHour = NumOfCust(this.MinCust,this.MaxCust,this.AvgCookie)[0]
//             },
//             GetCookie : function(){
//                 this.CookiePerHour = NumOfCust(this.MinCust,this.MaxCust,this.AvgCookie)[1]
//             }, 

//         }
//         console.log(Lima)
//         console.log(Lima.GetCust())
//         console.log(Lima.GetCookie())


// =========================================
// =========================================
// ========================================







// let parents = document.getElementById('BranchesSales');

// let branch1 = document.createElement('h1');
// parents.appendChild(branch1);
// branch1.textContent = 'Seattle branch';
// let SeattleUl = document.createElement('ul');
// parents.appendChild(SeattleUl);
// SeattleUl.textContent = 'mount of sold';




// let SeattleList = document.createElement('li')
// SeattleUl.appendChild(SeattleList);


// for (let i = 0; i < time.length; i++) {
//     let SeattleLi = document.createElement('li');
//     SeattleUl.appendChild(SeattleLi);

//     SeattleLi.textContent = time[i] + ' ' + Seattle.CookiePerHour[i] + ' cookies';
// }

// function sum(MyArray) {
//     let sum = 0

//     for (let i = 0; i < MyArray.length; i++) {
//         sum += MyArray[i]
//     }
//     return sum
// }
// console.log(sum(Seattle.CookiePerHour))
// let SeattleLi = document.createElement('li');
// SeattleUl.appendChild(SeattleLi);
// SeattleLi.textContent = 'Total : ' + sum(Seattle.CookiePerHour) + ' coockies';



// ================================================================
// ==================================================
// =======================================================



//     let branch2 = document.createElement('h1');
// parents.appendChild(branch2);
// branch2.textContent = 'Tokyo branch';
// let TokyoUl = document.createElement('ul');
// parents.appendChild(TokyoUl);
// TokyoUl.textContent = 'mount of sold';

//     let TokyoList = document.createElement('li') 
//     TokyoUl.appendChild(TokyoList);


//     for (let i = 0; i < 14; i++) {
//         let TokyoLi = document.createElement('li');
//         TokyoUl.appendChild(TokyoLi);

//         if ((i+6) <= 12) {

//             TokyoLi.textContent =  (i+6)+ ':00 am ' +Tokyo.CookiePerHour[i]+ ' cookies'; 
//         } else{

//             TokyoLi.textContent =  (i-6)+ ':00 pm ' +Tokyo.CookiePerHour[i]+ ' cookies'; 
//         }
//     }


// let TokyoLi = document.createElement('li');
// TokyoUl.appendChild(TokyoLi);
// TokyoLi.textContent = 'Total : ' +sum(Tokyo.CookiePerHour)+' coockies';












//     let branch3 = document.createElement('h1');
// parents.appendChild(branch3);
// branch3.textContent = 'Dubai branch';
// let DubaiUl = document.createElement('ul');
// parents.appendChild(DubaiUl);
// DubaiUl.textContent = 'mount of sold';




//     let DubaiList = document.createElement('li') 
//     DubaiUl.appendChild(DubaiList);


//     for (let i = 0; i < 14; i++) {
//         let DubaiLi = document.createElement('li');
//         DubaiUl.appendChild(DubaiLi);

//         if ((i+6) <= 12) {

//             DubaiLi.textContent =  (i+6)+ ':00 am ' +Dubai.CookiePerHour[i]+ ' cookies'; 
//         } else{

//             DubaiLi.textContent =  (i-6)+ ':00 pm ' +Dubai.CookiePerHour[i]+ ' cookies'; 
//         }
//     }
//        let DubaiLi = document.createElement('li');
//        DubaiUl.appendChild(DubaiLi);
//        DubaiLi.textContent = 'Total : ' +sum(Dubai.CookiePerHour)+' coockies';










//     let branch4 = document.createElement('h1');
//     parents.appendChild(branch4);
//     branch4.textContent = 'Paris branch';
//     let ParisUl = document.createElement('ul');
//     parents.appendChild(ParisUl);
//     ParisUl.textContent = 'mount of sold';




//         let ParisList = document.createElement('li') 
//         ParisUl.appendChild(ParisList);


//         for (let i = 0; i < 14; i++) {
//             let ParisLi = document.createElement('li');
//             ParisUl.appendChild(ParisLi);

//             if ((i+6) <= 12) {

//                 ParisLi.textContent =  (i+6)+ ':00 am ' +Paris.CookiePerHour[i]+ ' cookies'; 
//             } else{

//                 ParisLi.textContent =  (i-6)+ ':00 pm ' +Paris.CookiePerHour[i]+ ' cookies'; 
//             }
//         }

//         let ParisLi = document.createElement('li');
//        ParisUl.appendChild(ParisLi);
//        ParisLi.textContent = 'Total : ' +sum(Paris.CookiePerHour)+' coockies';










//         let branch5 = document.createElement('h1');
//         parents.appendChild(branch5);
//         branch5.textContent = 'Lima branch';
//         let LimaUl = document.createElement('ul');
//         parents.appendChild(LimaUl);
//         LimaUl.textContent = 'mount of sold';


//             let LimaList = document.createElement('li') 
//             LimaUl.appendChild(LimaList);


//             for (let i = 0; i < 14; i++) {
//                 let LimaLi = document.createElement('li');
//                 LimaUl.appendChild(LimaLi);

//                 if ((i+6) <= 12) {

//                     LimaLi.textContent =  (i+6)+ ':00 am ' +Lima.CookiePerHour[i]+ ' cookies';

//                 } else{

//                     LimaLi.textContent =  (i-6)+ ':00 pm ' +Lima.CookiePerHour[i]+ ' cookies'; 
//                 }
//             }

//             let LimaLi = document.createElement('li');
//             LimaUl.appendChild(LimaLi);
//             LimaLi.textContent = 'Total : ' +sum(Lima.CookiePerHour)+' coockies';








