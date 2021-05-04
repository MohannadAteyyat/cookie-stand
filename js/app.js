'use strict';
//Constructor++++++++++++++++++++++++=============================================
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function shop(locationName, minCust, maxCust, aveCust) {
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveCust = aveCust;
  this.custHour = [];
  this.cookiesHour = [];
  this.total = 0;
}
shop.prototype.getcustHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.custHour.push(getRandomIntInclusive(this.minCust, this.maxCust))
  }
}

shop.prototype.getcookiesHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.cookiesHour.push(Math.floor((this.custHour[i] * this.aveCust)))
  }
}
let tabel = document.getElementById('first')
shop.prototype.creatTable = function () {

  console.log(tabel);
  let name = document.createElement('table')
  tabel.appendChild(name)
  // name.textContent= this.locationName
  let heedrow = document.createElement('tr')
  name.appendChild(heedrow)
  let th1 = document.createElement('th')
  heedrow.appendChild(th1)
  th1.textContent = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  let datarow = document.createElement('tr')
  tabel.appendChild(datarow)
let td1= document.createElement('td')
datarow.appendChild(td1)

td1.textContent=this.locationName



}



let Seattle = new shop('Seattle', 23, 65, 6.3)
console.log(Seattle)
Seattle.getcustHour();
Seattle.getcookiesHour();

let Tokyo = new shop('Tokyo', 3, 24, 1.2)
console.log(Tokyo)
Tokyo.getcustHour();
Tokyo.getcookiesHour();

let Dubai = new shop('Dubai', 11, 38, 3.7)
console.log(Dubai)
Dubai.getcustHour();
Dubai.getcookiesHour();

let Paris = new shop('Paris', 20, 38, 2.3)
console.log(Paris)
Paris.getcustHour();
Paris.getcookiesHour();
Paris.creatTable();
let Lima = new shop('Lima', 2, 16, 4.6)
console.log(Lima)
Lima.getcustHour();
Lima.getcookiesHour();
Lima.creatTable();






















// shop.prototype.getcustHour = function () {
// for (let i = 0; i < hours.length; i++) {
//   this.custHour.push(Math.floor(Math.random()*(this.maxCust- this.minCust +1)+ this.minCust))
// }
// }
// shop.prototype.getcookiesHour= function () {
//   for (let i = 0; i < this.custHour.length; i++) {
//     this.cookiesHour.push(Math.ceil(this.custHour[i] * this.aveCust))
//     this.total += this.cookiesHour[i]
//   }
// }
// let seattle = new shop('Seattle', 23, 65, 6.3, )
// console.log(seattle);
// seattle.getcustHour();
// seattle.getcookiesHour();
// let Tokoy = new shop ('Tokoya' , 13 , 3 , 1.2)
// console.log(Tokoy);
// Tokoy.getcustHour();
// Tokoy.getcookiesHour();







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