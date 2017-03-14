'use strict';

var storeHours = ['6am','7am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','total'];

var body = document.getElementsByTagName('body')[0];

function store(name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.salesArray = [];
  this.randCust = function() {
    return Math.floor (Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };
  this.cookieSales = function() {
    var total = 0;
    for (var i = 0; i < storeHours.length - 1; i++) {
      var salesPerhour = Math.floor(this.randCust() * this.avgCookie);
      this.salesArray.push(salesPerhour);
      total += salesPerhour;
    }
    this.salesArray.push(total);
  };
  this.createListItems = function(){
    this.cookieSales();
    var newHeading = document.createElement('h2');
    body.appendChild(newHeading);
    newHeading.innerText = this.name;
    var newUL = document.createElement('ul');
    for (var i = 0; i < storeHours.length; i++) {
      var newLI = document.createElement('li');
      newLI.innerText = storeHours[i] + ': ' + this.salesArray[i] + ' cookies';
      newUL.appendChild(newLI);
    }
    body.appendChild(newUL);
  };
};

var firsAndPike = new store('1st and Pike', 23, 65, 6.3);
var sTac = new store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new store('Seattle Center', 11, 38, 3.7);
var capHill = new store('Capitol Hill', 20, 38, 2.3);
var alKi = new store('Alki', 2, 16, 4.6);
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
