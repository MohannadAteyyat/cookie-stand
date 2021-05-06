'use strict';




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
    this.custHour.push(getRandomIntInclusive(this.minCust, this.maxCust))
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

