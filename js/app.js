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
//   let table = document.createElement('table')
//   first.appendChild(table)

// function getheeder () {
// let heeder= document.createElement('tr')
// table.appendChild(heeder)
// let th1 = document.createElement('th')
// heeder.appendChild(th1)
// th1.textContent= 'Name'

// for (let i = 0; i < hours.length; i++) {
//   let th2 =document.createElement('th')
//   heeder.appendChild(th2)
// th2.textContent=hours[i]
// }
// let lastrow = document.createElement('th')
// heeder.appendChild(lastrow)
// lastrow.textContent='Daily location Total'
// }


// shop.prototype.creatTable = function () {

//   let datarow = document.createElement('tr')
//   table.appendChild(datarow)
//   let namedata=document.createElement('td')
// datarow.appendChild(namedata)
// namedata.textContent=this.locationName

// for (let i = 0; i < hours.length; i++) {
//   let td3 =document.createElement('td')
//   datarow.appendChild(td3)
//   td3.textContent=this.cookiesHour[i]
  
// }


// let dataTotal=document.createElement('td')
// datarow.appendChild(dataTotal)
// dataTotal.textContent= this.total

// }

// getheeder();

// let Seattle = new shop('Seattle', 23, 65, 6.3)
// console.log(Seattle)
// Seattle.getcustHour();
// Seattle.getcookiesHour();
// Seattle.creatTable()
// let Tokyo = new shop('Tokyo', 3, 24, 1.2)
// console.log(Tokyo)
// Tokyo.getcustHour();
// Tokyo.getcookiesHour();
// Tokyo.creatTable()
// let Dubai = new shop('Dubai', 11, 38, 3.7)
// console.log(Dubai)
// Dubai.getcustHour();
// Dubai.getcookiesHour();
// Dubai.creatTable()
// let Paris = new shop('Paris', 20, 38, 2.3)
// console.log(Paris)
// Paris.getcustHour();
// Paris.getcookiesHour();
// Paris.creatTable();
// let Lima = new shop('Lima', 2, 16, 4.6)
// console.log(Lima)
// Lima.getcustHour();
// Lima.getcookiesHour();
// Lima.creatTable()


// function gitFooter () {

// let tableFooter = document.createElement('tr')
// table.appendChild(tableFooter)



// let footerth=document.createElement('th')
// tableFooter.appendChild(footerth)
// footerth.textContent= ('Total')

// for (let i = 0; i < hours.length; i++) {
//   let totaleachhour=0
//   let sumOftotal=0

// for (let j = 0; j < Shop.length; j++) {
  
  
//   totaleachhour+=Shop[j].cookiesHour[i]
  
  
  
// }
// // sumOftotal += totaleachhour.hours[i];

// // console.log('ddddddddddddddd'+'  ' + sumOftotal)

// let footerth3=document.createElement('td')
//   tableFooter.appendChild(footerth3)
//   footerth3.textContent=totaleachhour
// }

// }

// gitFooter();



//////Lab07777777777777777777777777finshed///////////////////////















// 'use strict';

// //Global Variables

// //Global Variable - Store hours
// var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];
// //Global Variable - Store Locations Array
// var storeLocations = [];
// //Get Sales Data Table from sales.html
// var salmonTable = document.getElementById('salmonTable');
// //Get
// var salesInput = document.getElementById('salesInput');
// // var clearTable = document.getElementById('submit');

// //Store constructor
// function Store(name, minCustomers, maxCustomers, avgCookies) {
//   //Properties
//   this.name = name;
//   this.minCustomers = minCustomers;
//   this.maxCustomers = maxCustomers;
//   this.avgCookies = avgCookies;
//   //Arrays
//   this.averageCustomersPerHour = [];
//   this.averageCookiesPerHour = [];
//   this.totalCookiesPerDay = 0;
//   //Methods
//   this.numOfCustomersPerHour();
//   this.cookiesPerCustomer();
//   //Push the created instance to the storeLocations array
//   storeLocations.push(this);
// }

// Store.prototype.render = function() {
//   var trRowName = document.createElement('tr');
//   var tdStore = document.createElement('td');
//   tdStore.textContent = this.name;
//   trRowName.appendChild(tdStore);
//   for (var i = 0; i < this.averageCookiesPerHour.length; i++) {
//     var tdCell = document.createElement('td');
//     tdCell.textContent = this.averageCookiesPerHour[i];
//     trRowName.appendChild(tdCell);
//   };
//   var tdTotal = document.createElement('td');
//   tdTotal.textContent = this.totalCookiesPerDay;
//   trRowName.appendChild(tdTotal);
//   salmonTable.appendChild(trRowName);
// };
// Store.prototype.numOfCustomersPerHour = function() {
//   for (var i = 0; i < hours.length; i++) {
//     var singleHourCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
//     this.averageCustomersPerHour.push(singleHourCustomers);
//   }
// };
// Store.prototype.cookiesPerCustomer = function() {
//   for (var i = 0; i < hours.length; i++) {
//     var singleHourCookies = Math.ceil(this.averageCustomersPerHour[i] * this.avgCookies);
//     this.averageCookiesPerHour.push(singleHourCookies);
//     this.totalCookiesPerDay += singleHourCookies;
//   }
// };
// //Table creation functions
// function makeHeaderRow() { //eslint-disable-line
//   var tableRow = document.createElement('tr');
//   var thElement = document.createElement('th');
//   thElement.textContent = null;
//   salmonTable.appendChild(tableRow);
//   tableRow.appendChild(thElement);
//   for (var i = 0; i < hours.length; i++) {
//     thElement = document.createElement('th');
//     thElement.textContent = hours[i];
//     tableRow.appendChild(thElement);
//     // console.log(thElement);
//   }
//   thElement = document.createElement('th');
//   thElement.textContent = 'Location Total';
//   tableRow.appendChild(thElement);
//   console.log(salmonTable);
//   salmonTable.appendChild(tableRow);
// };
// function renderAllStores() {
//   for (var i = 0; i < storeLocations.length; i++) {
//     storeLocations[i].render();
//   }
// };
// function makeFooterRow() { //eslint-disable-line
//   var tableRow = document.createElement('tr');
//   tableRow.textContent = 'Totals';
//   salmonTable.appendChild(tableRow);
//   var bigStupidTotal = 0;
//   for (var i = 0; i < hours.length; i++) {
//     var hourlyTotal = 0;
//     for (var j = 0; j < storeLocations.length; j++) {
//       hourlyTotal = hourlyTotal + storeLocations[j].averageCookiesPerHour[i];
//       bigStupidTotal += storeLocations[j].averageCookiesPerHour[i];
//     }
//     var tdElement = document.createElement('td');
//     tdElement.textContent = hourlyTotal;
//     tableRow.appendChild(tdElement);
//   }
//   tdElement = document.createElement('td');
//   tdElement.textContent = bigStupidTotal;
//   tableRow.appendChild(tdElement);
// }

// //Store Object Declarations
// new Store('Alki', 2, 16, 4.6); //eslint-disable-line
// new Store('Seattle Center', 11, 38, 3.7); //eslint-disable-line
// new Store('SeaTac Airport', 3, 24, 1.2); //eslint-disable-line
// new Store('Capitol Hill', 20, 38, 2.3); //eslint-disable-line
// new Store('1st & Pike', 23, 65, 6.3); //eslint-disable-line


// //Store method to calculate input for our arrays.



// //Event Handler function
// function dataInput(event) {
//   event.preventDefault();
//   console.log('Submit button was clicked');
// //If statement to prevent empty text fields
//   if (!event.target.name.value || !event.target.minCustomers.value || !event.target.maxCustomers.value || !event.target.avgCookies.value) {
//     return alert('Fields cannot be empty!');
//   }

//   event.target.name = null;
//   event.target.minCustomers = null;
//   event.target.maxCustomers = null;
//   event.target.avgCookies = null;

//   var name = event.target.name.value;
//   var minCustomers = parseInt(event.target.minCustomers.value);
//   var maxCustomers = parseInt(event.target.maxCustomers.value);
//   var avgCookies = parseFloat(event.target.avgCookies.value);

//   salmonTable.textContent = null;
//   //Code to make the input fields blank after user submits

//   var storeExist = doesStoreExist(storeLocations, name);
//   var index;

//   function doesStoreExist(x,y) {
//     for (var i = 0; i < x.length; i++) {
//       if (x[i].name === y) {
//         index = i;
//         return true;
//       }
//     }
//     return false;
//   }

//   doesStoreExist(storeLocations, name);
//   console.log(doesStoreExist(storeLocations, name));

//   if (storeExist === true) {
//     console.log('did find name');
//     storeLocations[index].minCustomers = parseInt(minCustomers);
//     storeLocations[index].maxCustomers = parseInt(maxCustomers);
//     storeLocations[index].avgCookies = parseFloat(avgCookies);
//     storeLocations[index].averageCustomersPerHour = [];
//     storeLocations[index].averageCookiesPerHour = [];
//     storeLocations[index].totalCookiesPerDay = 0;
//     storeLocations[index].numOfCustomersPerHour();
//     storeLocations[index].cookiesPerCustomer();
//   }

//   if (storeExist === false) {
//     var newStore = new Store(name, minCustomers, maxCustomers, avgCookies);
//   }

//   //Re-creating our table with the new user inputs
//   makeHeaderRow();
//   renderAllStores();
//   makeFooterRow();
// }


// makeHeaderRow();
// renderAllStores();
// makeFooterRow();

// salesInput.addEventListener('submit', dataInput);







