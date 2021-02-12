'use strict';

var Plotly = require('./core');

Plotly = require('./register_traces_in_order')(Plotly, [
    'scattergeo',
    'choropleth'
]);

module.exports = require('./register_extra')(Plotly);
