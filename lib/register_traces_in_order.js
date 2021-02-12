'use strict';
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
    if(!has('bar')) delete require.cache[require.resolve('../src/traces/bar')];
    if(!has('barpolar')) delete require.cache[require.resolve('../src/traces/barpolar')];
    if(!has('box')) delete require.cache[require.resolve('../src/traces/box')];
    if(!has('candlestick')) delete require.cache[require.resolve('../src/traces/candlestick')];
    if(!has('carpet')) delete require.cache[require.resolve('../src/traces/carpet')];
    if(!has('choropleth')) delete require.cache[require.resolve('../src/traces/choropleth')];
    if(!has('choroplethmapbox')) delete require.cache[require.resolve('../src/traces/choroplethmapbox')];
    if(!has('cone')) delete require.cache[require.resolve('../src/traces/cone')];
    if(!has('contour')) delete require.cache[require.resolve('../src/traces/contour')];
    if(!has('contourcarpet')) delete require.cache[require.resolve('../src/traces/contourcarpet')];
    if(!has('densitymapbox')) delete require.cache[require.resolve('../src/traces/densitymapbox')];
    if(!has('funnel')) delete require.cache[require.resolve('../src/traces/funnel')];
    if(!has('funnelarea')) delete require.cache[require.resolve('../src/traces/funnelarea')];
    if(!has('heatmap')) delete require.cache[require.resolve('../src/traces/heatmap')];
    if(!has('heatmapgl')) delete require.cache[require.resolve('../src/traces/heatmapgl')];
    if(!has('histogram')) delete require.cache[require.resolve('../src/traces/histogram')];
    if(!has('histogram2d')) delete require.cache[require.resolve('../src/traces/histogram2d')];
    if(!has('histogram2dcontour')) delete require.cache[require.resolve('../src/traces/histogram2dcontour')];
    if(!has('image')) delete require.cache[require.resolve('../src/traces/image')];
    if(!has('indicator')) delete require.cache[require.resolve('../src/traces/indicator')];
    if(!has('isosurface')) delete require.cache[require.resolve('../src/traces/isosurface')];
    if(!has('mesh3d')) delete require.cache[require.resolve('../src/traces/mesh3d')];
    if(!has('ohlc')) delete require.cache[require.resolve('../src/traces/ohlc')];
    if(!has('parcats')) delete require.cache[require.resolve('../src/traces/parcats')];
    if(!has('parcoords')) delete require.cache[require.resolve('../src/traces/parcoords')];
    if(!has('pie')) delete require.cache[require.resolve('../src/traces/pie')];
    if(!has('pointcloud')) delete require.cache[require.resolve('../src/traces/pointcloud')];
    if(!has('sankey')) delete require.cache[require.resolve('../src/traces/sankey')];
    if(!has('scatter3d')) delete require.cache[require.resolve('../src/traces/scatter3d')];
    if(!has('scattercarpet')) delete require.cache[require.resolve('../src/traces/scattercarpet')];
    if(!has('scattergeo')) delete require.cache[require.resolve('../src/traces/scattergeo')];
    if(!has('scattergl')) delete require.cache[require.resolve('../src/traces/scattergl')];
    if(!has('scattermapbox')) delete require.cache[require.resolve('../src/traces/scattermapbox')];
    if(!has('scatterpolar')) delete require.cache[require.resolve('../src/traces/scatterpolar')];
    if(!has('scatterpolargl')) delete require.cache[require.resolve('../src/traces/scatterpolargl')];
    if(!has('scatterternary')) delete require.cache[require.resolve('../src/traces/scatterternary')];
    if(!has('splom')) delete require.cache[require.resolve('../src/traces/splom')];
    if(!has('streamtube')) delete require.cache[require.resolve('../src/traces/streamtube')];
    if(!has('sunburst')) delete require.cache[require.resolve('../src/traces/sunburst')];
    if(!has('surface')) delete require.cache[require.resolve('../src/traces/surface')];
    if(!has('table')) delete require.cache[require.resolve('../src/traces/table')];
    if(!has('treemap')) delete require.cache[require.resolve('../src/traces/treemap')];
    if(!has('violin')) delete require.cache[require.resolve('../src/traces/violin')];
    if(!has('volume')) delete require.cache[require.resolve('../src/traces/volume')];
    if(!has('waterfall')) delete require.cache[require.resolve('../src/traces/waterfall')];

    return Plotly;
};
