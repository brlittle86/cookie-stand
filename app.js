'use strict';

//global variables
var customers;

var pike = {
    minCus: 23,
    maxCus: 65,
    avgSale: 6.3,
    locName: '1st and Pike',
    dailyTotals: [],

    cusPerHour: function() {
        var min = Math.ceil(this.minCus);
        var max = Math.floor(this.maxCus)
        var result = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(result);
        return result;
    },

    salesHourly: function() {
        var totals = [];
        for (i = 0; i < 13; i++) {
            customers = this.cusPerHour();
            perHour = customers * this.avgSale;
            totals.push(Math.floor(perHour));
            console.log(Math.floor(perHour) + ' cookies sold at ' + (i + 8) + ':00.')
        }
        this.dailyTotals = totals;
        return totals;
    },

    dailyTotal: function() {
        return this.dailyTotals.reduce(function(a,b) {
            return a + b;
        }, 0);
    }
}

var seaTac = {
    minCus: 3,
    maxCus: 24,
    avgSale: 1.2,
    locName: 'SeaTac Airport'
}

var seaCent = {
    minCus: 11,
    maxCus: 38,
    avgSale: 3.7,
    locName: 'Seattle Center'
}

var capHill = {
    minCus: 20,
    maxCus: 38,
    avgSale: 2.3,
    locName: 'Capitol Hill'
}

var alki = {
    minCus: 2,
    maxCus: 16,
    avgSale: 4.6,
    locName: 'Alki'
}