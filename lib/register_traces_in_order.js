'use strict';

var unRequire = require('disrequire').quick;

module.exports = function registerTracesInOrder(Plotly, traceNames) {
    Plotly.register([
        require('../src/traces/bar'),
        require('../src/traces/box'),
        require('../src/traces/heatmap'),
        require('../src/traces/histogram'),
        require('../src/traces/histogram2d'),
        require('../src/traces/histogram2dcontour'),
        require('../src/traces/contour'),
        require('../src/traces/scatterternary'),
        require('../src/traces/violin'),
        require('../src/traces/funnel'),
        require('../src/traces/waterfall'),
        require('../src/traces/image'),

        require('../src/traces/pie'),
        require('../src/traces/sunburst'),
        require('../src/traces/treemap'),
        require('../src/traces/funnelarea'),

        require('../src/traces/scatter3d'),
        require('../src/traces/surface'),
        require('../src/traces/isosurface'),
        require('../src/traces/volume'),
        require('../src/traces/mesh3d'),
        require('../src/traces/cone'),
        require('../src/traces/streamtube'),

        require('../src/traces/scattergeo'),
        require('../src/traces/choropleth'),

        require('../src/traces/scattergl'),
        require('../src/traces/splom'),

        require('../src/traces/pointcloud'),
        require('../src/traces/heatmapgl'),

        require('../src/traces/parcoords'),

        require('../src/traces/parcats'),

        require('../src/traces/scattermapbox'),
        require('../src/traces/choroplethmapbox'),
        require('../src/traces/densitymapbox'),

        require('../src/traces/sankey'),
        require('../src/traces/indicator'),

        require('../src/traces/table'),

        require('../src/traces/carpet'),
        require('../src/traces/scattercarpet'),
        require('../src/traces/contourcarpet'),

        require('../src/traces/ohlc'),
        require('../src/traces/candlestick'),

        require('../src/traces/scatterpolar'),
        require('../src/traces/scatterpolargl'),
        require('../src/traces/barpolar')
    ]);


    function has(str) {
        return traceNames.indexOf(str) !== -1;
    }

    // do nothing for scatter for now as it should be added to all bundles
    if(!has('bar')) unRequire('../src/traces/bar');
    if(!has('barpolar')) unRequire('../src/traces/barpolar');
    if(!has('box')) unRequire('../src/traces/box');
    if(!has('candlestick')) unRequire('../src/traces/candlestick');
    if(!has('carpet')) unRequire('../src/traces/carpet');
    if(!has('choropleth')) unRequire('../src/traces/choropleth');
    if(!has('choroplethmapbox')) unRequire('../src/traces/choroplethmapbox');
    if(!has('cone')) unRequire('../src/traces/cone');
    if(!has('contour')) unRequire('../src/traces/contour');
    if(!has('contourcarpet')) unRequire('../src/traces/contourcarpet');
    if(!has('densitymapbox')) unRequire('../src/traces/densitymapbox');
    if(!has('funnel')) unRequire('../src/traces/funnel');
    if(!has('funnelarea')) unRequire('../src/traces/funnelarea');
    if(!has('heatmap')) unRequire('../src/traces/heatmap');
    if(!has('heatmapgl')) unRequire('../src/traces/heatmapgl');
    if(!has('histogram')) unRequire('../src/traces/histogram');
    if(!has('histogram2d')) unRequire('../src/traces/histogram2d');
    if(!has('histogram2dcontour')) unRequire('../src/traces/histogram2dcontour');
    if(!has('image')) unRequire('../src/traces/image');
    if(!has('indicator')) unRequire('../src/traces/indicator');
    if(!has('isosurface')) unRequire('../src/traces/isosurface');
    if(!has('mesh3d')) unRequire('../src/traces/mesh3d');
    if(!has('ohlc')) unRequire('../src/traces/ohlc');
    if(!has('parcats')) unRequire('../src/traces/parcats');
    if(!has('parcoords')) unRequire('../src/traces/parcoords');
    if(!has('pie')) unRequire('../src/traces/pie');
    if(!has('pointcloud')) unRequire('../src/traces/pointcloud');
    if(!has('sankey')) unRequire('../src/traces/sankey');
    if(!has('scatter3d')) unRequire('../src/traces/scatter3d');
    if(!has('scattercarpet')) unRequire('../src/traces/scattercarpet');
    if(!has('scattergeo')) unRequire('../src/traces/scattergeo');
    if(!has('scattergl')) unRequire('../src/traces/scattergl');
    if(!has('scattermapbox')) unRequire('../src/traces/scattermapbox');
    if(!has('scatterpolar')) unRequire('../src/traces/scatterpolar');
    if(!has('scatterpolargl')) unRequire('../src/traces/scatterpolargl');
    if(!has('scatterternary')) unRequire('../src/traces/scatterternary');
    if(!has('splom')) unRequire('../src/traces/splom');
    if(!has('streamtube')) unRequire('../src/traces/streamtube');
    if(!has('sunburst')) unRequire('../src/traces/sunburst');
    if(!has('surface')) unRequire('../src/traces/surface');
    if(!has('table')) unRequire('../src/traces/table');
    if(!has('treemap')) unRequire('../src/traces/treemap');
    if(!has('violin')) unRequire('../src/traces/violin');
    if(!has('volume')) unRequire('../src/traces/volume');
    if(!has('waterfall')) unRequire('../src/traces/waterfall');

    return Plotly;
};
