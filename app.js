'use strict';
var erray = [];
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
//Add event listener for forms submission
var formEl = document.getElementById('sales-form');

formEl.addEventListener('submit', function(event){
  event.preventDefault();
  event.stopPropagation();
  erray.push(new Store(event.target.locName.value, event.target.storeId.value, event.target.minCus.value, event.target.maxCus.value, event.target.avgSale.value));
 //event.target.storeId.value;
}, false);
//Create Store objects for each store

// var storeObjects = [Store('1st and Pike', 'first-pike', 23, 65, 6.3), Store('SeaTac Airport', 'airport', 3, 24, 1.2), Store('Seattle Center', 'center', 11, 38, 3.7), Store('Capitol Hill', 'hill', 20, 38, 2.3)];

var pike = new Store('1st and Pike', 'first-pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 'airport', 3, 24, 1.2);
var seaCent = new Store('Seattle Center', 'center', 11, 38, 3.7);
var capHill = new Store('Capitol Hill', 'hill', 20, 38, 2.3);
var alki = new Store('Alki', 'alki', 2, 16, 4.6);
erray.push(pike, seaTac, seaCent, capHill, alki);
console.log('erray', erray);
//generate the random daily values for each store and put them into a nested array
var totals = [pike.salesHourly(), seaTac.salesHourly(), seaCent.salesHourly(), capHill.salesHourly(), alki.salesHourly()];
console.log(totals);

//variable containing store names for table
var storeNames = [pike.locName, seaTac.locName, seaCent.locName, capHill.locName, alki.locName];

//List cookie sales on webpage as a table
var tableEl = document.getElementById('sales-table');

//add blank tile to the upperleft corner of the table
var nameEl = document.createElement('th');
tableEl.appendChild(nameEl);

//generate headers for the table
for (var i = 0; i < 15; i++) {
  var times = document.createElement('th');
  times.textContent = (i + 6) + ':00';
  tableEl.appendChild(times);
}
var cumulativeTotals = document.createElement('th');
cumulativeTotals.textContent = 'Daily Totals';
tableEl.appendChild(cumulativeTotals);

//prints the hourly values and totals to a table in HTML
for(var i = 0; i < totals.length; i++) {
  var rowData = totals[i];

  var rowEl = document.createElement('tr');
  rowEl.textContent = storeNames[i];
  tableEl.appendChild(rowEl);

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
  tableEl.appendChild(rowEl);
}

//prints footers with hourly totals and grand totals
for (var i = 0; i < 1; i++) {
  var rowEl = document.createElement('tr');
  rowEl.textContent = 'Totals';
  var hourlyTotals = [];
  for (var j = 0; j < totals[i].length; j++) {
    var dataEl = document.createElement('td');
    hourlyTotals.push(totals[0][j] + totals[1][j] + totals[2][j] + totals[3][j] + totals[4][j]);
    dataEl.textContent = hourlyTotals[j];
    rowEl.appendChild(dataEl);
  }
  var dataEl = document.createElement('td');
  dataEl.textContent = hourlyTotals.reduce(function(a,b) {
    return a + b;
  }, 0);
  rowEl.appendChild(dataEl);
  tableEl.appendChild(rowEl);
}
