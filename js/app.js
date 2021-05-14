
 'use strict';

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// function getRandomIntInclusive(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// const seattleShop = {
//   locationName: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   aveCust: 6.3,
//   custHour: [],
//   cookiesHour: [],
//   TOTAL: 0,
//   CalcilatecustHour: function () {
//     for (let index = 0; index < hours.length; index++) {
//       seattleShop.custHour[index] = (getRandomIntInclusive(this.minCust, this.maxCust))
//       // Tom Me to remember another way to assign a value
//       //seattleShop.custHour.push(getRandomIntInclusive(seattleShop.minCust,seattleShop.maxCust))
//     }
//   },
//   calculatecookiesHour: function () {
//     for (let index = 0; index < hours.length; index++) {
//       seattleShop.cookiesHour[index] = (Math.floor(this.custHour[index] * this.aveCust))
//       this.TOTAL += this.cookiesHour[index]
//     }
//   },
//   renderfunction: function () {
//     let theFirst = document.getElementById('first')
//     console.log(theFirst)
//     let Name = document.createElement('h2')
//     theFirst.appendChild(Name)
//     Name.textContent = this.locationName
//     let name2 = document.createElement('nav')
//     theFirst.appendChild(name2)
//     let name3 = document.createElement('ul')
//     name2.appendChild(name3)
//     for (let index = 0; index < hours.length; index++) {
//       let name4 = document.createElement('li')
//       name3.appendChild(name4)
//       name4.textContent = `${hours[index]}: ${this.cookiesHour[index]} cookies`
//     }
//     let toTall = document.createElement('li')
//     name3.appendChild(toTall)
//     toTall.textContent = `Tootal ${this.TOTAL} cookies`
//   }
// }
// seattleShop.CalcilatecustHour();
// seattleShop.calculatecookiesHour();
// seattleShop.renderfunction();
// console.log(seattleShop.custHour);
// console.log(seattleShop.cookiesHour);
// console.log(seattleShop.TOTAL);


// //+++++++++++++++++2222222222222222+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const Tokyo = {
//   locationName: 'Tokyo',
//   min: 3,
//   max: 24,
//   ave: 1.2,
//   randomCustomer: [],
//   amountOfcookies: [],
//   toTal: 0,
//   randomCustomerFunction: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.randomCustomer[i] = getRandomIntInclusive(this.min, this.max)
//     }
//   },
//   amountOfcookiesFunctoin: function () {
//     for (let i = 0; i < hours.length; i++) {

//       this.amountOfcookies[i] =(Math.floor(this.randomCustomer[i] * this.ave))
//       this.toTal += this.amountOfcookies[i]
//     }
//   },

// renderFunction: function () {
//   let firstOne = document.getElementById('first')
//   console.log(firstOne)
//   let nameOne= document.createElement('h2')
//   firstOne.appendChild(nameOne)
//   nameOne.textContent=this.locationName
//   let nameTwo=document.createElement('nav')
//   firstOne.appendChild(nameTwo)
//   let nameThree=document.createElement('ul')
//   nameTwo.appendChild(nameThree)
// for (let i = 0; i < hours.length; i++) {
//   let nameForth=document.createElement('li')
//   nameThree.appendChild(nameForth)
// nameForth.textContent=`${hours[i]} : ${this.amountOfcookies[i]} Coojies`
// }
// let finaltotal = document.createElement('li')
// nameThree.appendChild(finaltotal)
// finaltotal.textContent = ` Total : ${this.toTal} Cookies}`  
// }
// }
// Tokyo.randomCustomerFunction()
// Tokyo.amountOfcookiesFunctoin()
// Tokyo.renderFunction()
// console.log(Tokyo.randomCustomer)
// console.log(Tokyo.amountOfcookies)
// console.log(Tokyo.toTal +' ' + 'Total')


// //++++++++++++++++++++++333333333333333333++++++++++++++++++++++++++++++++++++++++++++++++

// const Dubai = {
//   locationName: 'Dubai',
//   min: 11,
//   max: 38,
//   ave: 3.7,
//   randomCustomer: [],
//   amountOfcookies: [],
//   toTal: 0,
//   randomCustomerFunction: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.randomCustomer[i] = getRandomIntInclusive(this.min, this.max)
//     }
//   },
//   amountOfcookiesFunctoin: function () {
//     for (let i = 0; i < hours.length; i++) {

//       this.amountOfcookies[i] =(Math.floor(this.randomCustomer[i] * this.ave))
//       this.toTal += this.amountOfcookies[i]
//     }
//   },

// renderFunction: function () {
//   let firstOne = document.getElementById('first')
//   console.log(firstOne)
//   let nameOne= document.createElement('h2')
//   firstOne.appendChild(nameOne)
//   nameOne.textContent=this.locationName
//   let nameTwo=document.createElement('nav')
//   firstOne.appendChild(nameTwo)
//   let nameThree=document.createElement('ul')
//   nameTwo.appendChild(nameThree)
// for (let i = 0; i < hours.length; i++) {
//   let nameForth=document.createElement('li')
//   nameThree.appendChild(nameForth)
// nameForth.textContent=`${hours[i]} : ${this.amountOfcookies[i]} Coojies`
// }
// let finaltotal = document.createElement('li')
// nameThree.appendChild(finaltotal)
// finaltotal.textContent = ` Total : ${this.toTal} Cookies}`  
// }
// }
// Dubai.randomCustomerFunction()
// Dubai.amountOfcookiesFunctoin()
// Dubai.renderFunction()
// console.log(Dubai.randomCustomer)
// console.log(Dubai.amountOfcookies)
// console.log(Dubai.toTal +' ' + 'Total')


// //++++++++++++4444444444444444444444++++++++++++++++++++++++++++++



// const Paris = {
//   locationName: 'Paris',
//   min: 11,
//   max: 38,
//   ave: 3.7,
//   randomCustomer: [],
//   amountOfcookies: [],
//   toTal: 0,
//   randomCustomerFunction: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.randomCustomer[i] = getRandomIntInclusive(this.min, this.max)
//     }
//   },
//   amountOfcookiesFunctoin: function () {
//     for (let i = 0; i < hours.length; i++) {

//       this.amountOfcookies[i] =(Math.floor(this.randomCustomer[i] * this.ave))
//       this.toTal += this.amountOfcookies[i]
//     }
//   },

// renderFunction: function () {
//   let firstOne = document.getElementById('first')
//   console.log(firstOne)
//   let nameOne= document.createElement('h2')
//   firstOne.appendChild(nameOne)
//   nameOne.textContent=this.locationName
//   let nameTwo=document.createElement('nav')
//   firstOne.appendChild(nameTwo)
//   let nameThree=document.createElement('ul')
//   nameTwo.appendChild(nameThree)
// for (let i = 0; i < hours.length; i++) {
//   let nameForth=document.createElement('li')
//   nameThree.appendChild(nameForth)
// nameForth.textContent=`${hours[i]} : ${this.amountOfcookies[i]} Coojies`
// }
// let finaltotal = document.createElement('li')
// nameThree.appendChild(finaltotal)
// finaltotal.textContent = ` Total : ${this.toTal} Cookies}`  
// }
// }
// Paris.randomCustomerFunction()
// Paris.amountOfcookiesFunctoin()
// Paris.renderFunction()
// console.log(Paris.randomCustomer)
// console.log(Paris.amountOfcookies)
// console.log(Paris.toTal +' ' + 'Total')


// //+++++++++++++55555555555555555555++++++++++++++++++++++++++++++=



// const Lima = {
//   locationName: 'Lima',
//   min: 11,
//   max: 38,
//   ave: 3.7,
//   randomCustomer: [],
//   amountOfcookies: [],
//   toTal: 0,
//   randomCustomerFunction: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.randomCustomer[i] = getRandomIntInclusive(this.min, this.max)
//     }
//   },
//   amountOfcookiesFunctoin: function () {
//     for (let i = 0; i < hours.length; i++) {

//       this.amountOfcookies[i] =(Math.floor(this.randomCustomer[i] * this.ave))
//       this.toTal += this.amountOfcookies[i]
//     }
//   },

// renderFunction: function () {
//   let firstOne = document.getElementById('first')
//   console.log(firstOne)
//   let nameOne= document.createElement('h2')
//   firstOne.appendChild(nameOne)
//   nameOne.textContent=this.locationName
//   let nameTwo=document.createElement('nav')
//   firstOne.appendChild(nameTwo)
//   let nameThree=document.createElement('ul')
//   nameTwo.appendChild(nameThree)
// for (let i = 0; i < hours.length; i++) {
//   let nameForth=document.createElement('li')
//   nameThree.appendChild(nameForth)
// nameForth.textContent=`${hours[i]} : ${this.amountOfcookies[i]} Coojies`
// }
// let finaltotal = document.createElement('li')
// nameThree.appendChild(finaltotal)
// finaltotal.textContent = ` Total : ${this.toTal} Cookies}`  
// }
// }
// Lima.randomCustomerFunction()
// Lima.amountOfcookiesFunctoin()
// Lima.renderFunction()
// console.log(Lima.randomCustomer)
// console.log(Lima.amountOfcookies)
// console.log(Lima.toTal +' ' + 'Total')




// Constructor++++++++++++++++++++++lab077777777777777++=============================================








const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);

}
  let Shop=[];
function shop(locationName, minCust, maxCust, aveCust) {
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveCust = aveCust;
  this.custHour = [];
  this.cookiesHour = [];
  this.total = 0;
  
  Shop.push(this);
}
shop.prototype.getcustHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.custHour.push(getRandomIntInclusive( this.maxCust, this.minCust))
  }
}

shop.prototype.getcookiesHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.cookiesHour.push(Math.floor((this.custHour[i] * this.aveCust)))
    this.total +=this.cookiesHour[i]
    
  }

  
}
let first = document.getElementById('first')


  console.log(first);
  let table = document.createElement('table')
  first.appendChild(table)

function getheeder () {
let heeder= document.createElement('tr')
table.appendChild(heeder)
let th1 = document.createElement('th')
heeder.appendChild(th1)
th1.textContent= 'Name'

for (let i = 0; i < hours.length; i++) {
  let th2 =document.createElement('th')
  heeder.appendChild(th2)
th2.textContent=hours[i]
}
let lastrow = document.createElement('th')
heeder.appendChild(lastrow)
lastrow.textContent='Daily location Total'
}


shop.prototype.creatTable = function () {

  let datarow = document.createElement('tr')
  table.appendChild(datarow)
  let namedata=document.createElement('td')
datarow.appendChild(namedata)
namedata.textContent=this.locationName

for (let i = 0; i < hours.length; i++) {
  let td3 =document.createElement('td')
  datarow.appendChild(td3)
  td3.textContent=this.cookiesHour[i]
  
}


let dataTotal=document.createElement('td')
datarow.appendChild(dataTotal)
dataTotal.textContent= this.total

}

getheeder();

let Seattle = new shop('Seattle', 23, 65, 6.3)
console.log(Seattle)
Seattle.getcustHour();
Seattle.getcookiesHour();
Seattle.creatTable()
let Tokyo = new shop('Tokyo', 3, 24, 1.2)
console.log(Tokyo)
Tokyo.getcustHour();
Tokyo.getcookiesHour();
Tokyo.creatTable()
let Dubai = new shop('Dubai', 11, 38, 3.7)
console.log(Dubai)
Dubai.getcustHour();
Dubai.getcookiesHour();
Dubai.creatTable()
let Paris = new shop('Paris', 20, 38, 2.3)
console.log(Paris)
Paris.getcustHour();
Paris.getcookiesHour();
Paris.creatTable();
let Lima = new shop('Lima', 2, 16, 4.6)
console.log(Lima)
Lima.getcustHour();
Lima.getcookiesHour();
Lima.creatTable()


function gitFooter () {

let tableFooter = document.createElement('tr')
table.appendChild(tableFooter)



let footerth=document.createElement('th')
tableFooter.appendChild(footerth)
footerth.textContent= ('Total')

for (let i = 0; i < hours.length; i++) {
  let totaleachhour=0
 

for (let j = 0; j < Shop.length; j++) {
  
  
  totaleachhour+=Shop[j].cookiesHour[i]
  
}

let footerth3=document.createElement('td')
  tableFooter.appendChild(footerth3)
  footerth3.textContent=totaleachhour
}

}

gitFooter();



//////Lab07777777777777777777777777finshed///////////////////////


//+++++++++++++++++++++++++++++++++++lab099999999999999999999999999999999+++++++++++++++++++++++++++++++++++++++++++===========================

let cookiesForm=document.getElementById('cookies')
cookiesForm.addEventListener('submit', cliker);

function cliker(event){

  event.preventDefault();
  let name=event.target.nameField.value
  console.log(name)
  let max=event.target.MaxCookiesperHour.value
  console.log(max)
  let min=event.target.MinmumCustomerPerHour.value
  console.log(min)
  let averg=event.target.AveregCoojiesPerHours.value
  console.log(averg)

  let addNewshop = new shop(name, max , min ,averg) 
  addNewshop.getcustHour();
  addNewshop.getcookiesHour();
  addNewshop.creatTable()


 
  deleterow();
  gitFooter();
  




  // addNewshop.gitFooter()
}




    function deleterow() {
      let table3 = document.querySelector('table');
      let rowCount = table3.rows.length;
  
      table3.deleteRow(rowCount -2);
  }
  
  // $('#cookies').trigger("reset");
 
    // document.getElementById("cookies").reset();
    // document.querySelector("cookies").reset();
    
    // document.querySelector('#cookies').value = '';




// function getInputTableFooter () {
//   let tabelInput= document.createElement('tr')
//   table.appendChild(tabelInput)
//   let th2 = document.createElement('th')
//   heeder.appendChild(th2)
//   th2.textContent= 'Name'