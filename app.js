'use strict';

//Constructor for the Store objects
function Store(locName, storeId, minCus, maxCus, avgSale) {
  this.locName = locName;
  this.storeId = storeId;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.avgSale = avgSale;

  var dailyTotals = [];
  this.dailyTotals = dailyTotals;
};

//Generate random number of customers based on minimum and maximum numbers
Store.prototype.cusPerHour = function() {
  var min = Math.ceil(this.minCus);
  var max = Math.floor(this.maxCus);
  var result = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(result);
  return result;
};

//calculate number of cookies sold per hour, based on random number of customers and average number sold, then store the totals in an array property of the object
Store.prototype.salesHourly = function() {
  var totals = [];
  for (var i = 0; i < 15; i++) {
    var customers = this.cusPerHour();
    var perHour = customers * this.avgSale;
    totals.push(Math.floor(perHour));
    console.log(Math.floor(perHour) + ' cookies sold at ' + (i + 6) + ':00.');
  }
  this.dailyTotals = totals;
  return totals;
};

//adds the hourly totals from the salesHourly method to give a daily total number of cookies sold
Store.prototype.dailyTotal = function() {
  return this.dailyTotals.reduce(function(a,b) {
    return a + b;
  }, 0);
};

//Create Store objects for each store
var pike = new Store('1st and Pike', 'first-pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 'airport', 3, 24, 1.2);
var seaCent = new Store('Seattle Center', 'center', 11, 38, 3.7);
var capHill = new Store('Capitol Hill', 'hill', 20, 38, 2.3);
var alki = new Store('Alki', 'alki', 2, 16, 4.6);

//generate the random daily values for each store and put them into a nested array
var totals = [pike.salesHourly(), seaTac.salesHourly(), seaCent.salesHourly(), capHill.salesHourly(), alki.salesHourly()];
console.log(totals);

//List cookie sales on webpage
var tableEl = document.getElementById('sales-table');

for(var i = 0; i < totals.length; i++) {
  var rowData = totals[i];

  var rowEl = document.createElement('tr');

  for(var j = 0; j < rowData.length; j++) {
    var content = rowData[j];

    var dataEl = document.createElement('td');
    dataEl.textContent = content;
    rowEl.appendChild(dataEl);
  }

  var dataEl = document.createElement('td');
  dataEl.textContent = totals[i].reduce(function(a,b) {
    return a + b;
  }, 0);
  rowEl.appendChild(dataEl);
  console.log(dataEl);
  tableEl.appendChild(rowEl);
}
