'use strict';

var storehours = ['6am','7am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','total'];

var body = document.getElementsByTagName('tagName');

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  salesArray:[],
  randCust: function() {
    return Math.floor (Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  }
  cookieSales: function() {
    var total = 0;
    for (var i = 0; i < storehours.length - 1; i++) {
      var salesPerhour = Math.floor(this.randCust() * this.avgCookie);
      this.salesArray.push(salesPerhour);
      total += salesPerhour;
    }
    this.salesArray.push(total);
  }
  createListItems: function(){
    var newHeading = document.createElement('h2');
    body.appendChild(newHeading);
    newHeading.innerText = this.name;
    var newUL = document.createElement('ul');
    for (var i = 0; i < storehours.length; i++) {
      var newLI = document.createElement('li');
      newEl.innerText = storeHours[i] + ': ' + this.salesArray[i] + ' cookies';
      newUL.appendCHild(newLI);
    }
    body.appendCHild(newUL);
  },
};

firstAndPike.cookieSales()

// var seaTacAirport = {
//   minCust: 3,
//   maxCust: 24,
//   avgCookie: 1.2,
//   randCust: function() {
//     console.log (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
//     return Math.floor (Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },
//   cookieSales: function() {
//     var sales = [];
//     for (var i = 0; i < storehours.length; i++) {
//       var salesPerhour = this.randCust() * this.avgCookie;
//       sales.push(salesPerhour);
//       console.log('Console log of i:' + i);
//     }
//     return sales;
//   }
// };
//
// var seattleCenter = {
//   minCust: 11,
//   maxCust: 38,
//   avgCookie: 3.7,
//   randCust: function() {
//     console.log (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
//     return Math.floor (Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },
//   cookieSales: function() {
//     var sales = [];
//     for (var i = 0; i < storehours.length; i++) {
//       var salesPerhour = this.randCust() * this.avgCookie;
//       sales.push(salesPerhour);
//       console.log('Console log of i:' + i);
//     }
//     return sales;
//   }
// };
//
// var capitolHill = {
//   minCust: 20,
//   maxCust: 38,
//   avgCookie: 2.3,
//   randCust: function() {
//     console.log (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
//     return Math.floor (Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },
//   cookieSales: function() {
//     var sales = [];
//     for (var i = 0; i < storehours.length; i++) {
//       var salesPerhour = this.randCust() * this.avgCookie;
//       sales.push(salesPerhour);
//       console.log('Console log of i:' + i);
//     }
//     return sales;
//   }
// };
//
// var alki = {
//   minCust: 2,
//   maxCust: 16,
//   avgCookie: 4.6,
//   randCust: function() {
//     console.log (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
//     return Math.floor (Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },
//   cookieSales: function() {
//     var sales = [];
//     for (var i = 0; i < storehours.length; i++) {
//       var salesPerhour = this.randCust() * this.avgCookie;
//       sales.push(salesPerhour);
//       console.log('Console log of i:' + i);
//     }
//     return sales;
//   }
// };
