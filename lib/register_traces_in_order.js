'use strict';
module.exports = function registerTracesInOrder(Plotly, traceNames) {
    Plotly.register([
        require('./bar'),
        require('./box'),
        require('./heatmap'),
        require('./histogram'),
        require('./histogram2d'),
        require('./histogram2dcontour'),
        require('./contour'),
        require('./scatterternary'),
        require('./violin'),
        require('./funnel'),
        require('./waterfall'),
        require('./image'),

        require('./pie'),
        require('./sunburst'),
        require('./treemap'),
        require('./funnelarea'),

        require('./scatter3d'),
        require('./surface'),
        require('./isosurface'),
        require('./volume'),
        require('./mesh3d'),
        require('./cone'),
        require('./streamtube'),

        require('./scattergeo'),
        require('./choropleth'),

        require('./scattergl'),
        require('./splom'),

        require('./pointcloud'),
        require('./heatmapgl'),

        require('./parcoords'),

        require('./parcats'),

        require('./scattermapbox'),
        require('./choroplethmapbox'),
        require('./densitymapbox'),

        require('./sankey'),
        require('./indicator'),

        require('./table'),

        require('./carpet'),
        require('./scattercarpet'),
        require('./contourcarpet'),

        require('./ohlc'),
        require('./candlestick'),

        require('./scatterpolar'),
        require('./scatterpolargl'),
        require('./barpolar')
    ]);


    function has(str) {
        return traceNames.indexOf(str) !== -1;
    }

    // do nothing for scatter for now as it should be added to all bundles
    if(!has('bar')) delete require.cache[require.resolve('./bar')];
    if(!has('barpolar')) delete require.cache[require.resolve('./barpolar')];
    if(!has('box')) delete require.cache[require.resolve('./box')];
    if(!has('candlestick')) delete require.cache[require.resolve('./candlestick')];
    if(!has('carpet')) delete require.cache[require.resolve('./carpet')];
    if(!has('choropleth')) delete require.cache[require.resolve('./choropleth')];
    if(!has('choroplethmapbox')) delete require.cache[require.resolve('./choroplethmapbox')];
    if(!has('cone')) delete require.cache[require.resolve('./cone')];
    if(!has('contour')) delete require.cache[require.resolve('./contour')];
    if(!has('contourcarpet')) delete require.cache[require.resolve('./contourcarpet')];
    if(!has('densitymapbox')) delete require.cache[require.resolve('./densitymapbox')];
    if(!has('funnel')) delete require.cache[require.resolve('./funnel')];
    if(!has('funnelarea')) delete require.cache[require.resolve('./funnelarea')];
    if(!has('heatmap')) delete require.cache[require.resolve('./heatmap')];
    if(!has('heatmapgl')) delete require.cache[require.resolve('./heatmapgl')];
    if(!has('histogram')) delete require.cache[require.resolve('./histogram')];
    if(!has('histogram2d')) delete require.cache[require.resolve('./histogram2d')];
    if(!has('histogram2dcontour')) delete require.cache[require.resolve('./histogram2dcontour')];
    if(!has('image')) delete require.cache[require.resolve('./image')];
    if(!has('indicator')) delete require.cache[require.resolve('./indicator')];
    if(!has('isosurface')) delete require.cache[require.resolve('./isosurface')];
    if(!has('mesh3d')) delete require.cache[require.resolve('./mesh3d')];
    if(!has('ohlc')) delete require.cache[require.resolve('./ohlc')];
    if(!has('parcats')) delete require.cache[require.resolve('./parcats')];
    if(!has('parcoords')) delete require.cache[require.resolve('./parcoords')];
    if(!has('pie')) delete require.cache[require.resolve('./pie')];
    if(!has('pointcloud')) delete require.cache[require.resolve('./pointcloud')];
    if(!has('sankey')) delete require.cache[require.resolve('./sankey')];
    if(!has('scatter3d')) delete require.cache[require.resolve('./scatter3d')];
    if(!has('scattercarpet')) delete require.cache[require.resolve('./scattercarpet')];
    if(!has('scattergeo')) delete require.cache[require.resolve('./scattergeo')];
    if(!has('scattergl')) delete require.cache[require.resolve('./scattergl')];
    if(!has('scattermapbox')) delete require.cache[require.resolve('./scattermapbox')];
    if(!has('scatterpolar')) delete require.cache[require.resolve('./scatterpolar')];
    if(!has('scatterpolargl')) delete require.cache[require.resolve('./scatterpolargl')];
    if(!has('scatterternary')) delete require.cache[require.resolve('./scatterternary')];
    if(!has('splom')) delete require.cache[require.resolve('./splom')];
    if(!has('streamtube')) delete require.cache[require.resolve('./streamtube')];
    if(!has('sunburst')) delete require.cache[require.resolve('./sunburst')];
    if(!has('surface')) delete require.cache[require.resolve('./surface')];
    if(!has('table')) delete require.cache[require.resolve('./table')];
    if(!has('treemap')) delete require.cache[require.resolve('./treemap')];
    if(!has('violin')) delete require.cache[require.resolve('./violin')];
    if(!has('volume')) delete require.cache[require.resolve('./volume')];
    if(!has('waterfall')) delete require.cache[require.resolve('./waterfall')];

    return Plotly;
};
