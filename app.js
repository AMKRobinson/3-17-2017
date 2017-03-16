'use strict';

var storeHours = ['','6am','7am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','total'];
var body = document.getElementsByTagName('body')[0];
var allStores = [];

var firsAndPike = new Cookiestore('1st and Pike', 23, 65, 6.3);
var sTac = new Cookiestore('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Cookiestore('Seattle Center', 11, 38, 3.7);
var capHill = new Cookiestore('Capitol Hill', 20, 38, 2.3);
var alKi = new Cookiestore('Alki', 2, 16, 4.6);

var form = document.getElementById('the-form');
function newStore(){
  event.preventDefault();
  var name = event.target.name.value;
  var minCust = event.target.minCust.value;
  var maxCust = event.target.maxCust.value;
  var avgCookie = event.target.avgCookie.value;
  console.log(event.target.elements['name'].value);
  console.log(event.target.elements['minCust'].value);
  console.log(event.target.elements['maxCust'].value);
  console.log(event.target.elements['avgCookie'].value);
  var newStore = new Cookiestore(name, minCust, maxCust, avgCookie);
  newStore.generateTableRow();
};
form.addEventListener('submit', newStore);

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
};

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

function tHead(){

  for( i = 0; i < storeHours.length; i++) {
    var newTh = document.createElement('th');
    newTh.innerText = storeHours[i];
  }
}
