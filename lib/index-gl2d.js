'use strict';

var Plotly = require('./core');

Plotly = require('./register_traces_in_order')(Plotly, [
    'scattergl',
    'splom',
    'pointcloud',
    'heatmapgl',
    'parcoords'
]);

module.exports = require('./register_extra')(Plotly);
