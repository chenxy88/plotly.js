'use strict';

var Plotly = require('./core');

Plotly = require('./register_traces_in_order')(Plotly, [
    'bar',
    'pie'
]);

module.exports = require('./register_extra')(Plotly);
