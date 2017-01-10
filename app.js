'use strict';

//Vendor location objects
var pike = {
    minCus: 23,
    maxCus: 65,
    avgSale: 6.3,
    locName: '1st and Pike',
    dailyTotals: [],

    //Generate random number of customers based on minimum and maximum numbers
    cusPerHour: function() {
        var min = Math.ceil(this.minCus);
        var max = Math.floor(this.maxCus)
        var result = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(result);
        return result;
    },

    //calculate number of cookies sold per hour, based on random number of customers and average number sold, then store the totals in an array property of the object
    salesHourly: function() {
        var totals = [];
        for (i = 0; i < 13; i++) {
            var customers = this.cusPerHour();
            var perHour = customers * this.avgSale;
            totals.push(Math.floor(perHour));
            console.log(Math.floor(perHour) + ' cookies sold at ' + (i + 8) + ':00.')
        }
        this.dailyTotals = totals;
        return totals;
    },

    //adds the hourly totals from the salesHourly method to give a daily total number of cookies sold
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
    locName: 'SeaTac Airport',
    dailyTotals: [],

    //Generate random number of customers based on minimum and maximum numbers
    cusPerHour: function() {
        var min = Math.ceil(this.minCus);
        var max = Math.floor(this.maxCus)
        var result = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(result);
        return result;
    },

    //calculate number of cookies sold per hour, based on random number of customers and average number sold, then store the totals in an array property of the object
    salesHourly: function() {
        var totals = [];
        for (i = 0; i < 13; i++) {
            var customers = this.cusPerHour();
            var perHour = customers * this.avgSale;
            totals.push(Math.floor(perHour));
            console.log(Math.floor(perHour) + ' cookies sold at ' + (i + 8) + ':00.')
        }
        this.dailyTotals = totals;
        return totals;
    },

    //adds the hourly totals from the salesHourly method to give a daily total number of cookies sold
    dailyTotal: function() {
        return this.dailyTotals.reduce(function(a,b) {
            return a + b;
        }, 0);
    }
}

var seaCent = {
    minCus: 11,
    maxCus: 38,
    avgSale: 3.7,
    locName: 'Seattle Center',
    dailyTotals: [],

    //Generate random number of customers based on minimum and maximum numbers
    cusPerHour: function() {
        var min = Math.ceil(this.minCus);
        var max = Math.floor(this.maxCus)
        var result = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(result);
        return result;
    },

    //calculate number of cookies sold per hour, based on random number of customers and average number sold, then store the totals in an array property of the object
    salesHourly: function() {
        var totals = [];
        for (i = 0; i < 13; i++) {
            var customers = this.cusPerHour();
            var perHour = customers * this.avgSale;
            totals.push(Math.floor(perHour));
            console.log(Math.floor(perHour) + ' cookies sold at ' + (i + 8) + ':00.')
        }
        this.dailyTotals = totals;
        return totals;
    },

    //adds the hourly totals from the salesHourly method to give a daily total number of cookies sold
    dailyTotal: function() {
        return this.dailyTotals.reduce(function(a,b) {
            return a + b;
        }, 0);
    }
}

var capHill = {
    minCus: 20,
    maxCus: 38,
    avgSale: 2.3,
    locName: 'Capitol Hill',
    dailyTotals: [],

    //Generate random number of customers based on minimum and maximum numbers
    cusPerHour: function() {
        var min = Math.ceil(this.minCus);
        var max = Math.floor(this.maxCus)
        var result = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(result);
        return result;
    },

    //calculate number of cookies sold per hour, based on random number of customers and average number sold, then store the totals in an array property of the object
    salesHourly: function() {
        var totals = [];
        for (i = 0; i < 13; i++) {
            var customers = this.cusPerHour();
            var perHour = customers * this.avgSale;
            totals.push(Math.floor(perHour));
            console.log(Math.floor(perHour) + ' cookies sold at ' + (i + 8) + ':00.')
        }
        this.dailyTotals = totals;
        return totals;
    },

    //adds the hourly totals from the salesHourly method to give a daily total number of cookies sold
    dailyTotal: function() {
        return this.dailyTotals.reduce(function(a,b) {
            return a + b;
        }, 0);
    }
}

var alki = {
    minCus: 2,
    maxCus: 16,
    avgSale: 4.6,
    locName: 'Alki',
    dailyTotals: [],

    //Generate random number of customers based on minimum and maximum numbers
    cusPerHour: function() {
        var min = Math.ceil(this.minCus);
        var max = Math.floor(this.maxCus)
        var result = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(result);
        return result;
    },

    //calculate number of cookies sold per hour, based on random number of customers and average number sold, then store the totals in an array property of the object
    salesHourly: function() {
        var totals = [];
        for (i = 0; i < 13; i++) {
            var customers = this.cusPerHour();
            var perHour = customers * this.avgSale;
            totals.push(Math.floor(perHour));
            console.log(Math.floor(perHour) + ' cookies sold at ' + (i + 8) + ':00.')
        }
        this.dailyTotals = totals;
        return totals;
    },

    //adds the hourly totals from the salesHourly method to give a daily total number of cookies sold
    dailyTotal: function() {
        return this.dailyTotals.reduce(function(a,b) {
            return a + b;
        }, 0);
    }
}