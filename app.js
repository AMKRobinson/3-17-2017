'use strict';

var storehours = ['6am','7am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  randCust: function() {
    console.log (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
    return Math.floor (Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  cookieSales: function() {
    var sales = [];
    for (var i = 0; i < storehours.length; i++) {
      var salesPerhour = this.randCust() * this.avgCookie;
      sales.push(salesPerhour);
      console.log('Console log of i:' + i);
    }
    return sales;
  }
};

var seaTacAirport = {
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  randCust: function() {
    console.log (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
    return Math.floor (Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  cookieSales: function() {
    var sales = [];
    for (var i = 0; i < storehours.length; i++) {
      var salesPerhour = this.randCust() * this.avgCookie;
      sales.push(salesPerhour);
      console.log('Console log of i:' + i);
    }
    return sales;
  }
};

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  randCust: function() {
    console.log (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
    return Math.floor (Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  cookieSales: function() {
    var sales = [];
    for (var i = 0; i < storehours.length; i++) {
      var salesPerhour = this.randCust() * this.avgCookie;
      sales.push(salesPerhour);
      console.log('Console log of i:' + i);
    }
    return sales;
  }
};

var capitolHill = {
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  randCust: function() {
    console.log (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
    return Math.floor (Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  cookieSales: function() {
    var sales = [];
    for (var i = 0; i < storehours.length; i++) {
      var salesPerhour = this.randCust() * this.avgCookie;
      sales.push(salesPerhour);
      console.log('Console log of i:' + i);
    }
    return sales;
  }
};

var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  randCust: function() {
    console.log (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
    return Math.floor (Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  cookieSales: function() {
    var sales = [];
    for (var i = 0; i < storehours.length; i++) {
      var salesPerhour = this.randCust() * this.avgCookie;
      sales.push(salesPerhour);
      console.log('Console log of i:' + i);
    }
    return sales;
  }
};
