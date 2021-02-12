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

            case 'bar': register(require('../src/traces/bar')); break;
            case 'barpolar': register(require('../src/traces/barpolar')); break;
            case 'box': register(require('../src/traces/box')); break;
            case 'candlestick': register(require('../src/traces/candlestick')); break;
            case 'carpet': register(require('../src/traces/carpet')); break;
            case 'choropleth': register(require('../src/traces/choropleth')); break;
            case 'choroplethmapbox': register(require('../src/traces/choroplethmapbox')); break;
            case 'cone': register(require('../src/traces/cone')); break;
            case 'contour': register(require('../src/traces/contour')); break;
            case 'contourcarpet': register(require('../src/traces/contourcarpet')); break;
            case 'densitymapbox': register(require('../src/traces/densitymapbox')); break;
            case 'funnel': register(require('../src/traces/funnel')); break;
            case 'funnelarea': register(require('../src/traces/funnelarea')); break;
            case 'heatmap': register(require('../src/traces/heatmap')); break;
            case 'heatmapgl': register(require('../src/traces/heatmapgl')); break;
            case 'histogram': register(require('../src/traces/histogram')); break;
            case 'histogram2d': register(require('../src/traces/histogram2d')); break;
            case 'histogram2dcontour': register(require('../src/traces/histogram2dcontour')); break;
            case 'image': register(require('../src/traces/image')); break;
            case 'indicator': register(require('../src/traces/indicator')); break;
            case 'isosurface': register(require('../src/traces/isosurface')); break;
            case 'mesh3d': register(require('../src/traces/mesh3d')); break;
            case 'ohlc': register(require('../src/traces/ohlc')); break;
            case 'parcats': register(require('../src/traces/parcats')); break;
            case 'parcoords': register(require('../src/traces/parcoords')); break;
            case 'pie': register(require('../src/traces/pie')); break;
            case 'pointcloud': register(require('../src/traces/pointcloud')); break;
            case 'sankey': register(require('../src/traces/sankey')); break;
            case 'scatter3d': register(require('../src/traces/scatter3d')); break;
            case 'scattercarpet': register(require('../src/traces/scattercarpet')); break;
            case 'scattergeo': register(require('../src/traces/scattergeo')); break;
            case 'scattergl': register(require('../src/traces/scattergl')); break;
            case 'scattermapbox': register(require('../src/traces/scattermapbox')); break;
            case 'scatterpolar': register(require('../src/traces/scatterpolar')); break;
            case 'scatterpolargl': register(require('../src/traces/scatterpolargl')); break;
            case 'scatterternary': register(require('../src/traces/scatterternary')); break;
            case 'splom': register(require('../src/traces/splom')); break;
            case 'streamtube': register(require('../src/traces/streamtube')); break;
            case 'sunburst': register(require('../src/traces/sunburst')); break;
            case 'surface': register(require('../src/traces/surface')); break;
            case 'table': register(require('../src/traces/table')); break;
            case 'treemap': register(require('../src/traces/treemap')); break;
            case 'violin': register(require('../src/traces/violin')); break;
            case 'volume': register(require('../src/traces/volume')); break;
            case 'waterfall': register(require('../src/traces/waterfall')); break;
            default: throw 'Error: unrecognized trace type:"' + trace + '"';
        }
    }

    return Plotly;
};
