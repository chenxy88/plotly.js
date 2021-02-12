'use strict';

var Plotly = require('./core');

// traces
Plotly = require('./register_traces_in_order')(Plotly, [
    'bar',
    'box',
    'heatmap',
    'histogram',
    'histogram2d',
    'histogram2dcontour',
    'contour',
    'scatterternary',
    'violin',
    'funnel',
    'waterfall',
    'image',

    'pie',
    'sunburst',
    'treemap',
    'funnelarea',

    'scattergeo',
    'choropleth',

    'scattergl',
    'splom',

    'parcoords',
    'parcats',

    'scattermapbox',
    'choroplethmapbox',
    'densitymapbox',

    'sankey',
    'indicator',

    'table',

    'carpet',
    'scattercarpet',
    'contourcarpet',

    'ohlc',
    'candlestick',

    'scatterpolar',
    'scatterpolargl',
    'barpolar'
]);

module.exports = require('./register_extra')(Plotly);
