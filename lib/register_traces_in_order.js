'use strict';

var traceRegisterOrder = {
    scatter: 0
};
var n = 1;
var push = function(name) {
    traceRegisterOrder[name] = n++;
};

push('bar');
push('box');
push('heatmap');
push('histogram');
push('histogram2d');
push('histogram2dcontour');
push('contour');
push('scatterternary');
push('violin');
push('funnel');
push('waterfall');
push('image');

push('pie');
push('sunburst');
push('treemap');
push('funnelarea');

push('scatter3d');
push('surface');
push('isosurface');
push('volume');
push('mesh3d');
push('cone');
push('streamtube');

push('scattergeo');
push('choropleth');

push('scattergl');
push('splom');

push('pointcloud');
push('heatmapgl');

push('parcoords');

push('parcats');

push('scattermapbox');
push('choroplethmapbox');
push('densitymapbox');

push('sankey');
push('indicator');

push('table');

push('carpet');
push('scattercarpet');
push('contourcarpet');

push('ohlc');
push('candlestick');

push('scatterpolar');
push('scatterpolargl');
push('barpolar');

// console.log(traceRegisterOrder)

module.exports = function registerTracesInOrder(Plotly, traceNames) {
    var register = Plotly.register;

    traceNames.sort(function(a, b) {
        return traceRegisterOrder[a] - traceRegisterOrder[b];
    });

    for(var i = 0; i < traceNames.length; i++) {
        var trace = traceNames[i];
        switch(trace) {
            case 'scatter': break; // do nothing | It is always added by default

            case 'bar': register(require('./bar')); break;
            case 'barpolar': register(require('./barpolar')); break;
            case 'box': register(require('./box')); break;
            case 'candlestick': register(require('./candlestick')); break;
            case 'carpet': register(require('./carpet')); break;
            case 'choropleth': register(require('./choropleth')); break;
            case 'choroplethmapbox': register(require('./choroplethmapbox')); break;
            case 'cone': register(require('./cone')); break;
            case 'contour': register(require('./contour')); break;
            case 'contourcarpet': register(require('./contourcarpet')); break;
            case 'densitymapbox': register(require('./densitymapbox')); break;
            case 'funnel': register(require('./funnel')); break;
            case 'funnelarea': register(require('./funnelarea')); break;
            case 'heatmap': register(require('./heatmap')); break;
            case 'heatmapgl': register(require('./heatmapgl')); break;
            case 'histogram': register(require('./histogram')); break;
            case 'histogram2d': register(require('./histogram2d')); break;
            case 'histogram2dcontour': register(require('./histogram2dcontour')); break;
            case 'image': register(require('./image')); break;
            case 'indicator': register(require('./indicator')); break;
            case 'isosurface': register(require('./isosurface')); break;
            case 'mesh3d': register(require('./mesh3d')); break;
            case 'ohlc': register(require('./ohlc')); break;
            case 'parcats': register(require('./parcats')); break;
            case 'parcoords': register(require('./parcoords')); break;
            case 'pie': register(require('./pie')); break;
            case 'pointcloud': register(require('./pointcloud')); break;
            case 'sankey': register(require('./sankey')); break;
            case 'scatter3d': register(require('./scatter3d')); break;
            case 'scattercarpet': register(require('./scattercarpet')); break;
            case 'scattergeo': register(require('./scattergeo')); break;
            case 'scattergl': register(require('./scattergl')); break;
            case 'scattermapbox': register(require('./scattermapbox')); break;
            case 'scatterpolar': register(require('./scatterpolar')); break;
            case 'scatterpolargl': register(require('./scatterpolargl')); break;
            case 'scatterternary': register(require('./scatterternary')); break;
            case 'splom': register(require('./splom')); break;
            case 'streamtube': register(require('./streamtube')); break;
            case 'sunburst': register(require('./sunburst')); break;
            case 'surface': register(require('./surface')); break;
            case 'table': register(require('./table')); break;
            case 'treemap': register(require('./treemap')); break;
            case 'violin': register(require('./violin')); break;
            case 'volume': register(require('./volume')); break;
            case 'waterfall': register(require('./waterfall')); break;
            default: throw 'Error: unrecognized trace type:"' + trace + '"';
        }
    }

    return Plotly;
};
