'use strict';

var storeHours = ['','6am','7am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','total'];
var body = document.getElementsByTagName('body')[0];
var allStores = [];

var firsAndPike = new Cookiestore('1st and Pike', 23, 65, 6.3);
var sTac = new Cookiestore('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Cookiestore('Seattle Center', 11, 38, 3.7);
var capHill = new Cookiestore('Capitol Hill', 20, 38, 2.3);
var alKi = new Cookiestore('Alki', 2, 16, 4.6);

function Cookiestore(name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.total = 0;
  this.salesArray = [];
  this.randCust = function() {
    return Math.floor (Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };
  this.cookieSales = function() {
    for (var i = 0; i < storeHours.length - 1; i++) {
      var salesPerhour = Math.floor(this.randCust() * this.avgCookie);
      this.salesArray.push(salesPerhour);
      this.total += salesPerhour;
    }
  };
  this.generateTableRow = function(){
    this.cookieSales();
    var table = document.getElementsByTagName('table')[0];
    var tRow = document.createElement('tr');
    var tbody = document.getElementById('table-body');
    tbody.appendChild(tRow);
    var nameTD = document.createElement('td');
    nameTD.innerText = this.name;
    tRow.appendChild(nameTD);
    for (var i = 0; i < storeHours.length - 1; i++) {
      var newTD = document.createElement('td');
      newTD.innerText = this.salesArray[i];
      tRow.appendChild(newTD);
    }
  };
  allStores.push(this);
}

function createTable() {
  var table = document.createElement('table');
  body.appendChild(table);
  var tHead = document.createElement('thead');
  table.appendChild(tHead);
  var tRow = document.createElement('tr');
  tHead.appendChild(tRow);
  for (var i = 0; i < storeHours.length; i++){
    var th = document.createElement('th');
    th.innerText = storeHours[i];
    tRow.appendChild(th);
  }
  var tbody = document.createElement('tbody');
  table.appendChild(tbody);
  tbody.id = 'table-body';
};
createTable();

for (var i = 0; i < allStores.length; i++) {
  allStores[i].generateTableRow();
}
// firsAndPike.createListItems();
// sTac.createListItems();
// seattleCenter.createListItems();
// capHill.createListItems();
// alKi.createListItems();
// tHead();

function tHead(){

  for( i = 0; i < storeHours.length; i++) {
    var newTh = document.createElement('th');
    newTh.innerText = storeHours[i];
  }
}
// var sTacAir = {
//   minCust: 3,
//   maxCust: 24,
//   avgCookie: 1.2,
//   salesArray:[],
//   name: 'SeaTac Airport',
//   randCust: function() {
//     return Math.floor (Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieSales: function() {
//     var total = 0;
//     for (var i = 0; i < storeHours.length - 1; i++) {
//       var salesPerhour = Math.floor(this.randCust() * this.avgCookie);
//       this.salesArray.push(salesPerhour);
//       total += salesPerhour;
//     }
//     this.salesArray.push(total);
//   },
//   createListItems: function(){
//     this.cookieSales();
//     var newHeading = document.createElement('h2');
//     body.appendChild(newHeading);
//     newHeading.innerText = this.name;
//     var newUL = document.createElement('ul');
//     for (var i = 0; i < storeHours.length; i++) {
//       var newLI = document.createElement('li');
//       newLI.innerText = storeHours[i] + ': ' + this.salesArray[i] + ' cookies';
//       newUL.appendChild(newLI);
//     }
//     body.appendChild(newUL);
//   },
// };
//
// sTacAir.createListItems();
//
// var seaCenter = {
//   minCust: 11,
//   maxCust: 38,
//   avgCookie: 3.7,
//   salesArray:[],
//   name: 'Seattle Center',
//   randCust: function() {
//     return Math.floor (Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieSales: function() {
//     var total = 0;
//     for (var i = 0; i < storeHours.length - 1; i++) {
//       var salesPerhour = Math.floor(this.randCust() * this.avgCookie);
//       this.salesArray.push(salesPerhour);
//       total += salesPerhour;
//     }
//     this.salesArray.push(total);
//   },
//   createListItems: function(){
//     this.cookieSales();
//     var newHeading = document.createElement('h2');
//     body.appendChild(newHeading);
//     newHeading.innerText = this.name;
//     var newUL = document.createElement('ul');
//     for (var i = 0; i < storeHours.length; i++) {
//       var newLI = document.createElement('li');
//       newLI.innerText = storeHours[i] + ': ' + this.salesArray[i] + ' cookies';
//       newUL.appendChild(newLI);
//     }
//     body.appendChild(newUL);
//   },
// };
//
// seaCenter.createListItems();
//
// var cHill = {
//   minCust: 20,
//   maxCust: 38,
//   avgCookie: 2.3,
//   salesArray:[],
//   name: 'Capitol Hill',
//   randCust: function() {
//     return Math.floor (Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieSales: function() {
//     var total = 0;
//     for (var i = 0; i < storeHours.length - 1; i++) {
//       var salesPerhour = Math.floor(this.randCust() * this.avgCookie);
//       this.salesArray.push(salesPerhour);
//       total += salesPerhour;
//     }
//     this.salesArray.push(total);
//   },
//   createListItems: function(){
//     this.cookieSales();
//     var newHeading = document.createElement('h2');
//     body.appendChild(newHeading);
//     newHeading.innerText = this.name;
//     var newUL = document.createElement('ul');
//     for (var i = 0; i < storeHours.length; i++) {
//       var newLI = document.createElement('li');
//       newLI.innerText = storeHours[i] + ': ' + this.salesArray[i] + ' cookies';
//       newUL.appendChild(newLI);
//     }
//     body.appendChild(newUL);
//   },
// };
//
// cHill.createListItems();
//
// var alki = {
//   minCust: 2,
//   maxCust: 16,
//   avgCookie: 4.6,
//   salesArray:[],
//   name: 'Alki',
//   randCust: function() {
//     return Math.floor (Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieSales: function() {
//     var total = 0;
//     for (var i = 0; i < storeHours.length - 1; i++) {
//       var salesPerhour = Math.floor(this.randCust() * this.avgCookie);
//       this.salesArray.push(salesPerhour);
//       total += salesPerhour;
//     }
//     this.salesArray.push(total);
//   },
//   createListItems: function(){
//     this.cookieSales();
//     var newHeading = document.createElement('h2');
//     body.appendChild(newHeading);
//     newHeading.innerText = this.name;
//     var newUL = document.createElement('ul');
//     for (var i = 0; i < storeHours.length; i++) {
//       var newLI = document.createElement('li');
//       newLI.innerText = storeHours[i] + ': ' + this.salesArray[i] + ' cookies';
//       newUL.appendChild(newLI);
//     }
//     body.appendChild(newUL);
//   },
// };
//
// alki.createListItems();
