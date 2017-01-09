'use strict';

//global variables
var customers;

var pike = {
    minCus: 23,
    maxCus: 65,
    avgSale: 6.3,
    locName: '1st and Pike',

    cusPerHour: function() {
        var min = Math.ceil(this.minCus);
        var max = Math.floor(this.maxCus)
        var result = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(result);
        return result;
    },

    salesHourly: function() {
        for (i = 0; i < 13; i++) {
            customers = this.cusPerHour();
            perHour = customers * this.avgSale;
            console.log(Math.floor(perHour) + ' cookies sold at ' + (i + 8) + ':00.')
        }
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