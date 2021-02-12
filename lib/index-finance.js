'use strict';

var Plotly = require('./core');

Plotly = require('./register_traces_in_order')(Plotly, [
    'bar',
    'histogram',
    'pie',
    'funnelarea',
    'ohlc',
    'candlestick',
    'funnel',
    'waterfall',
    'indicator'
]);

module.exports = require('./register_extra')(Plotly);
