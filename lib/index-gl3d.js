'use strict';

var Plotly = require('./core');

Plotly = require('./register_traces_in_order')(Plotly, [
    'scatter3d',
    'surface',
    'mesh3d',
    'isosurface',
    'volume',
    'cone',
    'streamtube'
]);

module.exports = require('./register_extra')(Plotly);
