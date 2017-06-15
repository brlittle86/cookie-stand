'use strict';

//global variables
var storeHours = ['Location','6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', 'Total'];
var storesObjects = [];

//Constructor for the Store objects
function Store(locName, storeId, minCus, maxCus, avgSale) {
  this.locName = locName;
  this.storeId = storeId;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.avgSale = avgSale;

  var dailyTotals = [];
  this.dailyTotals = dailyTotals;
}

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

//method renders store objects into the table
Store.prototype.render = function() {
  this.salesHourly();

  var tableEl = document.getElementById('sales-table');

  for(var i = 0; i < 1; i++){
    var rowData = this.locName;

    var rowEl = document.createElement('tr');
    rowEl.textContent = rowData;

    tableEl.appendChild(rowEl);
    for(var j = 0; j < this.dailyTotals.length; j++){
      var content = this.dailyTotals[j];

      var dataEl = document.createElement('td');
      dataEl.textContent = content;
      rowEl.appendChild(dataEl);
    }
    dataEl = document.createElement('td');
    dataEl.textContent = this.dailyTotal();
    rowEl.appendChild(dataEl);
  }
  tableEl.appendChild(rowEl);
};

//Add event listener for forms submission
var formEl = document.getElementById('sales-form');

formEl.addEventListener('submit', function(event){

  //these lines prevent the submit button from refreshing the page and bubbling outwards to impact other elements of the page
  event.preventDefault();
  event.stopPropagation();

  //creates a new instance of the Store object using the constructor and the values within the forms on the page
  var newStore = new Store(event.target.locName.value, event.target.storeId.value, event.target.minCus.value, event.target.maxCus.value, event.target.avgSale.value);

  //renders the new Store data onto the table on the page
  newStore.render();

  //adds the new store to the storesObjects array
  storesObjects.push(newStore);

  //invokes the footer function in order to re-calculate the daily totals to include the new store's sales
  footer();
}, false);

//Create Store objects for each store
var pike = new Store('1st and Pike', 'first-pike', 23, 65, 6.3);
pike.render();
var seaTac = new Store('SeaTac Airport', 'airport', 3, 24, 1.2);
seaTac.render();
var seaCent = new Store('Seattle Center', 'center', 11, 38, 3.7);
seaCent.render();
var capHill = new Store('Capitol Hill', 'hill', 20, 38, 2.3);
capHill.render();
var alki = new Store('Alki', 'alki', 2, 16, 4.6);
alki.render();
storesObjects.push(pike, seaTac, seaCent, capHill, alki);
console.log('storesObjects', storesObjects);

//List cookie sales on webpage as a table
//var tableEl = document.getElementById('sales-table');

//generate headers for the table
var header = function() {
  for (var i = 0; i < storeHours.length; i++) {
    var hours = storeHours[i];
    var headEl = document.getElementById('times');
    var data = document.createElement('th');

    data.textContent = hours;
    headEl.appendChild(data);
  }
};

//calls the header on page load
header();

//function to remove any existing footer row, in order to clear it up for adding a new store to the page
var removeExistingFooter = function() {
  var footTotal = document.getElementById('totalsRow');
  if (footTotal !== null) {
    footTotal.parentElement.removeChild(footTotal);
  }
};

//footer function generates the hourly totals for each hour across all of the Store objects in storesObjects then renders them onto the page as part of a table footer in html
var footer = function() {
  removeExistingFooter();

  var tableEl = document.getElementById('totals');
  var footTotal = document.createElement('tr');

  footTotal.setAttribute('id', 'totalsRow');
  footTotal.textContent = 'Totals';
  tableEl.appendChild(footTotal);

  var hourlyTotals = [];
  console.log('storesObjects is ' + storesObjects);

  for (var j = 0; j < 15; j++) {
    var sum = 0;
    var dataEl = document.createElement('td');

    for (var i = 0; i < storesObjects.length; i++) {
      sum += storesObjects[i].dailyTotals[j];
    }

    hourlyTotals.push(sum);
    console.log(hourlyTotals);

    dataEl.textContent = hourlyTotals[j];
    footTotal.appendChild(dataEl);
  }

  //totals the entire row into a new cell at the end for a grand total for the day
  dataEl = document.createElement('td');
  dataEl.textContent = hourlyTotals.reduce(function(a,b) {
    return a + b;
  }, 0);

  footTotal.appendChild(dataEl);
  tableEl.appendChild(footTotal);
};

//calls the footer function the first time on page load
footer();
