var wms_layers = [];


        var lyr_GoogleSatelit_0 = new ol.layer.Tile({
            'title': 'Google Satelit',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_Desa_Bonang_1 = new ol.format.GeoJSON();
var features_Desa_Bonang_1 = format_Desa_Bonang_1.readFeatures(json_Desa_Bonang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desa_Bonang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desa_Bonang_1.addFeatures(features_Desa_Bonang_1);
var lyr_Desa_Bonang_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Desa_Bonang_1, 
                style: style_Desa_Bonang_1,
                popuplayertitle: 'Desa_Bonang',
                interactive: true,
    title: 'Desa_Bonang<br />\
    <img src="styles/legend/Desa_Bonang_1_0.png" /> Betahwalang<br />\
    <img src="styles/legend/Desa_Bonang_1_1.png" /> Bonangrejo<br />\
    <img src="styles/legend/Desa_Bonang_1_2.png" /> Gebang<br />\
    <img src="styles/legend/Desa_Bonang_1_3.png" /> Gebangarum<br />\
    <img src="styles/legend/Desa_Bonang_1_4.png" /> Jali<br />\
    <img src="styles/legend/Desa_Bonang_1_5.png" /> Jatimulyo<br />\
    <img src="styles/legend/Desa_Bonang_1_6.png" /> Jatirogo<br />\
    <img src="styles/legend/Desa_Bonang_1_7.png" /> Karangrejo<br />\
    <img src="styles/legend/Desa_Bonang_1_8.png" /> Kembangan<br />\
    <img src="styles/legend/Desa_Bonang_1_9.png" /> Krajanbogo<br />\
    <img src="styles/legend/Desa_Bonang_1_10.png" /> Margolinduk<br />\
    <img src="styles/legend/Desa_Bonang_1_11.png" /> Morodemak<br />\
    <img src="styles/legend/Desa_Bonang_1_12.png" /> Poncoharjo<br />\
    <img src="styles/legend/Desa_Bonang_1_13.png" /> Purworejo<br />\
    <img src="styles/legend/Desa_Bonang_1_14.png" /> Serangan<br />\
    <img src="styles/legend/Desa_Bonang_1_15.png" /> Sukodono<br />\
    <img src="styles/legend/Desa_Bonang_1_16.png" /> Sumberejo<br />\
    <img src="styles/legend/Desa_Bonang_1_17.png" /> Tlogoboyo<br />\
    <img src="styles/legend/Desa_Bonang_1_18.png" /> Tridonorejo<br />\
    <img src="styles/legend/Desa_Bonang_1_19.png" /> Weding<br />\
    <img src="styles/legend/Desa_Bonang_1_20.png" /> Wonosari<br />\
    <img src="styles/legend/Desa_Bonang_1_21.png" /> <br />' });

lyr_GoogleSatelit_0.setVisible(true);lyr_Desa_Bonang_1.setVisible(true);
var layersList = [lyr_GoogleSatelit_0,lyr_Desa_Bonang_1];
lyr_Desa_Bonang_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Desa_Bonang_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Desa_Bonang_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'hidden field', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Desa_Bonang_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});