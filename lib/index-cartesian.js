'use strict';

var Plotly = require('./core');

Plotly = require('./register_traces_in_order')(Plotly, [
    'bar',
    'box',
    'heatmap',
    'histogram',
    'histogram2d',
    'histogram2dcontour',
    'image',
    'pie',
    'contour',
    'scatterternary',
    'violin'
]);

module.exports = require('./register_extra')(Plotly);
