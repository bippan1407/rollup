"use strict";

var o = require("lodash");

console.log("This is student"), console.log("lodash function ", o.add(10, 30)), 
[ 1, 2, 3 ].map((function(o) {
    return console.log("from map ", o);
}));
