'use strict';

var Plotly = require('./core');

Plotly = require('./register_traces_in_order')(Plotly, [
    'scattermapbox',
    'choroplethmapbox',
    'densitymapbox'
]);

module.exports = require('./register_extra')(Plotly);
