var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_LEC_362_MT_2 = new ol.format.GeoJSON();
var features_LEC_362_MT_2 = format_LEC_362_MT_2.readFeatures(json_LEC_362_MT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LEC_362_MT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LEC_362_MT_2.addFeatures(features_LEC_362_MT_2);
var lyr_LEC_362_MT_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LEC_362_MT_2, 
                style: style_LEC_362_MT_2,
                interactive: true,
                title: '<img src="styles/legend/LEC_362_MT_2.png" /> LEC_362_MT'
            });
var format_LEC_361_MT_3 = new ol.format.GeoJSON();
var features_LEC_361_MT_3 = format_LEC_361_MT_3.readFeatures(json_LEC_361_MT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LEC_361_MT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LEC_361_MT_3.addFeatures(features_LEC_361_MT_3);
var lyr_LEC_361_MT_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LEC_361_MT_3, 
                style: style_LEC_361_MT_3,
                interactive: true,
                title: '<img src="styles/legend/LEC_361_MT_3.png" /> LEC_361_MT'
            });
var format_LEC_358_MT_4 = new ol.format.GeoJSON();
var features_LEC_358_MT_4 = format_LEC_358_MT_4.readFeatures(json_LEC_358_MT_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LEC_358_MT_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LEC_358_MT_4.addFeatures(features_LEC_358_MT_4);
var lyr_LEC_358_MT_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LEC_358_MT_4, 
                style: style_LEC_358_MT_4,
                interactive: true,
                title: '<img src="styles/legend/LEC_358_MT_4.png" /> LEC_358_MT'
            });
var format_LEC_357_MT_5 = new ol.format.GeoJSON();
var features_LEC_357_MT_5 = format_LEC_357_MT_5.readFeatures(json_LEC_357_MT_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LEC_357_MT_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LEC_357_MT_5.addFeatures(features_LEC_357_MT_5);
var lyr_LEC_357_MT_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LEC_357_MT_5, 
                style: style_LEC_357_MT_5,
                interactive: true,
                title: '<img src="styles/legend/LEC_357_MT_5.png" /> LEC_357_MT'
            });
var format_SRS_339_MT_6 = new ol.format.GeoJSON();
var features_SRS_339_MT_6 = format_SRS_339_MT_6.readFeatures(json_SRS_339_MT_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SRS_339_MT_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SRS_339_MT_6.addFeatures(features_SRS_339_MT_6);
var lyr_SRS_339_MT_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SRS_339_MT_6, 
                style: style_SRS_339_MT_6,
                interactive: true,
                title: '<img src="styles/legend/SRS_339_MT_6.png" /> SRS_339_MT'
            });
var format_SRS_338_MT_7 = new ol.format.GeoJSON();
var features_SRS_338_MT_7 = format_SRS_338_MT_7.readFeatures(json_SRS_338_MT_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SRS_338_MT_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SRS_338_MT_7.addFeatures(features_SRS_338_MT_7);
var lyr_SRS_338_MT_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SRS_338_MT_7, 
                style: style_SRS_338_MT_7,
                interactive: true,
                title: '<img src="styles/legend/SRS_338_MT_7.png" /> SRS_338_MT'
            });
var format_ERA_372_MT_8 = new ol.format.GeoJSON();
var features_ERA_372_MT_8 = format_ERA_372_MT_8.readFeatures(json_ERA_372_MT_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ERA_372_MT_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ERA_372_MT_8.addFeatures(features_ERA_372_MT_8);
var lyr_ERA_372_MT_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ERA_372_MT_8, 
                style: style_ERA_372_MT_8,
                interactive: true,
                title: '<img src="styles/legend/ERA_372_MT_8.png" /> ERA_372_MT'
            });
var format_ERA_371_MT_9 = new ol.format.GeoJSON();
var features_ERA_371_MT_9 = format_ERA_371_MT_9.readFeatures(json_ERA_371_MT_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ERA_371_MT_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ERA_371_MT_9.addFeatures(features_ERA_371_MT_9);
var lyr_ERA_371_MT_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ERA_371_MT_9, 
                style: style_ERA_371_MT_9,
                interactive: true,
                title: '<img src="styles/legend/ERA_371_MT_9.png" /> ERA_371_MT'
            });
var format_LFL_334_MT_10 = new ol.format.GeoJSON();
var features_LFL_334_MT_10 = format_LFL_334_MT_10.readFeatures(json_LFL_334_MT_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LFL_334_MT_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LFL_334_MT_10.addFeatures(features_LFL_334_MT_10);
var lyr_LFL_334_MT_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LFL_334_MT_10, 
                style: style_LFL_334_MT_10,
                interactive: true,
                title: '<img src="styles/legend/LFL_334_MT_10.png" /> LFL_334_MT'
            });
var format_NIS_331_MT_11 = new ol.format.GeoJSON();
var features_NIS_331_MT_11 = format_NIS_331_MT_11.readFeatures(json_NIS_331_MT_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NIS_331_MT_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NIS_331_MT_11.addFeatures(features_NIS_331_MT_11);
var lyr_NIS_331_MT_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NIS_331_MT_11, 
                style: style_NIS_331_MT_11,
                interactive: true,
                title: '<img src="styles/legend/NIS_331_MT_11.png" /> NIS_331_MT'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_LEC_362_MT_2.setVisible(true);lyr_LEC_361_MT_3.setVisible(true);lyr_LEC_358_MT_4.setVisible(true);lyr_LEC_357_MT_5.setVisible(true);lyr_SRS_339_MT_6.setVisible(true);lyr_SRS_338_MT_7.setVisible(true);lyr_ERA_372_MT_8.setVisible(true);lyr_ERA_371_MT_9.setVisible(true);lyr_LFL_334_MT_10.setVisible(true);lyr_NIS_331_MT_11.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleMaps_1,lyr_LEC_362_MT_2,lyr_LEC_361_MT_3,lyr_LEC_358_MT_4,lyr_LEC_357_MT_5,lyr_SRS_339_MT_6,lyr_SRS_338_MT_7,lyr_ERA_372_MT_8,lyr_ERA_371_MT_9,lyr_LFL_334_MT_10,lyr_NIS_331_MT_11];
lyr_LEC_362_MT_2.set('fieldAliases', {'ID_TRAMOMT': 'ID_TRAMOMT', 'CIRCUITO': 'CIRCUITO', 'DESCRIP_FASE_A': 'DESCRIP_FASE_A', 'DESCRIP_FASE_B': 'DESCRIP_FASE_B', 'DESCRIP_FASE_C': 'DESCRIP_FASE_C', 'DESCRIP_GUARDA': 'DESCRIP_GUARDA', 'CANTIDAD_FASES': 'CANTIDAD_FASES', });
lyr_LEC_361_MT_3.set('fieldAliases', {'ID_TRAMOMT': 'ID_TRAMOMT', 'CIRCUITO': 'CIRCUITO', 'DESCRIP_FASE_A': 'DESCRIP_FASE_A', 'DESCRIP_FASE_B': 'DESCRIP_FASE_B', 'DESCRIP_FASE_C': 'DESCRIP_FASE_C', 'DESCRIP_GUARDA': 'DESCRIP_GUARDA', 'CANTIDAD_FASES': 'CANTIDAD_FASES', });
lyr_LEC_358_MT_4.set('fieldAliases', {'ID_TRAMOMT': 'ID_TRAMOMT', 'CIRCUITO': 'CIRCUITO', 'DESCRIP_FASE_A': 'DESCRIP_FASE_A', 'DESCRIP_FASE_B': 'DESCRIP_FASE_B', 'DESCRIP_FASE_C': 'DESCRIP_FASE_C', 'DESCRIP_GUARDA': 'DESCRIP_GUARDA', 'CANTIDAD_FASES': 'CANTIDAD_FASES', });
lyr_LEC_357_MT_5.set('fieldAliases', {'ID_TRAMOMT': 'ID_TRAMOMT', 'CIRCUITO': 'CIRCUITO', 'DESCRIP_FASE_A': 'DESCRIP_FASE_A', 'DESCRIP_FASE_B': 'DESCRIP_FASE_B', 'DESCRIP_FASE_C': 'DESCRIP_FASE_C', 'DESCRIP_GUARDA': 'DESCRIP_GUARDA', 'CANTIDAD_FASES': 'CANTIDAD_FASES', });
lyr_SRS_339_MT_6.set('fieldAliases', {'ID_TRAMOMT': 'ID_TRAMOMT', 'CIRCUITO': 'CIRCUITO', 'DESCRIP_FASE_A': 'DESCRIP_FASE_A', 'DESCRIP_FASE_B': 'DESCRIP_FASE_B', 'DESCRIP_FASE_C': 'DESCRIP_FASE_C', 'DESCRIP_GUARDA': 'DESCRIP_GUARDA', 'CANTIDAD_FASES': 'CANTIDAD_FASES', });
lyr_SRS_338_MT_7.set('fieldAliases', {'ID_TRAMOMT': 'ID_TRAMOMT', 'CIRCUITO': 'CIRCUITO', 'DESCRIP_FASE_A': 'DESCRIP_FASE_A', 'DESCRIP_FASE_B': 'DESCRIP_FASE_B', 'DESCRIP_FASE_C': 'DESCRIP_FASE_C', 'DESCRIP_GUARDA': 'DESCRIP_GUARDA', 'CANTIDAD_FASES': 'CANTIDAD_FASES', });
lyr_ERA_372_MT_8.set('fieldAliases', {'ID_TRAMOMT': 'ID_TRAMOMT', 'CIRCUITO': 'CIRCUITO', 'DESCRIP_FASE_A': 'DESCRIP_FASE_A', 'DESCRIP_FASE_B': 'DESCRIP_FASE_B', 'DESCRIP_FASE_C': 'DESCRIP_FASE_C', 'DESCRIP_GUARDA': 'DESCRIP_GUARDA', 'CANTIDAD_FASES': 'CANTIDAD_FASES', });
lyr_ERA_371_MT_9.set('fieldAliases', {'ID_TRAMOMT': 'ID_TRAMOMT', 'CIRCUITO': 'CIRCUITO', 'DESCRIP_FASE_A': 'DESCRIP_FASE_A', 'DESCRIP_FASE_B': 'DESCRIP_FASE_B', 'DESCRIP_FASE_C': 'DESCRIP_FASE_C', 'DESCRIP_GUARDA': 'DESCRIP_GUARDA', 'CANTIDAD_FASES': 'CANTIDAD_FASES', });
lyr_LFL_334_MT_10.set('fieldAliases', {'ID_TRAMOMT': 'ID_TRAMOMT', 'CIRCUITO': 'CIRCUITO', 'DESCRIP_FASE_A': 'DESCRIP_FASE_A', 'DESCRIP_FASE_B': 'DESCRIP_FASE_B', 'DESCRIP_FASE_C': 'DESCRIP_FASE_C', 'DESCRIP_GUARDA': 'DESCRIP_GUARDA', 'CANTIDAD_FASES': 'CANTIDAD_FASES', });
lyr_NIS_331_MT_11.set('fieldAliases', {'ID_TRAMOMT': 'ID_TRAMOMT', 'CIRCUITO': 'CIRCUITO', 'DESCRIP_FASE_A': 'DESCRIP_FASE_A', 'DESCRIP_FASE_B': 'DESCRIP_FASE_B', 'DESCRIP_FASE_C': 'DESCRIP_FASE_C', 'DESCRIP_GUARDA': 'DESCRIP_GUARDA', 'CANTIDAD_FASES': 'CANTIDAD_FASES', });
lyr_LEC_362_MT_2.set('fieldImages', {'ID_TRAMOMT': 'Range', 'CIRCUITO': 'TextEdit', 'DESCRIP_FASE_A': 'TextEdit', 'DESCRIP_FASE_B': 'TextEdit', 'DESCRIP_FASE_C': 'TextEdit', 'DESCRIP_GUARDA': 'TextEdit', 'CANTIDAD_FASES': 'Range', });
lyr_LEC_361_MT_3.set('fieldImages', {'ID_TRAMOMT': 'Range', 'CIRCUITO': 'TextEdit', 'DESCRIP_FASE_A': 'TextEdit', 'DESCRIP_FASE_B': 'TextEdit', 'DESCRIP_FASE_C': 'TextEdit', 'DESCRIP_GUARDA': 'TextEdit', 'CANTIDAD_FASES': 'Range', });
lyr_LEC_358_MT_4.set('fieldImages', {'ID_TRAMOMT': 'Range', 'CIRCUITO': 'TextEdit', 'DESCRIP_FASE_A': 'TextEdit', 'DESCRIP_FASE_B': 'TextEdit', 'DESCRIP_FASE_C': 'TextEdit', 'DESCRIP_GUARDA': 'TextEdit', 'CANTIDAD_FASES': 'Range', });
lyr_LEC_357_MT_5.set('fieldImages', {'ID_TRAMOMT': 'Range', 'CIRCUITO': 'TextEdit', 'DESCRIP_FASE_A': 'TextEdit', 'DESCRIP_FASE_B': 'TextEdit', 'DESCRIP_FASE_C': 'TextEdit', 'DESCRIP_GUARDA': 'TextEdit', 'CANTIDAD_FASES': 'Range', });
lyr_SRS_339_MT_6.set('fieldImages', {'ID_TRAMOMT': 'Range', 'CIRCUITO': 'TextEdit', 'DESCRIP_FASE_A': 'TextEdit', 'DESCRIP_FASE_B': 'TextEdit', 'DESCRIP_FASE_C': 'TextEdit', 'DESCRIP_GUARDA': 'TextEdit', 'CANTIDAD_FASES': 'Range', });
lyr_SRS_338_MT_7.set('fieldImages', {'ID_TRAMOMT': 'Range', 'CIRCUITO': 'TextEdit', 'DESCRIP_FASE_A': 'TextEdit', 'DESCRIP_FASE_B': 'TextEdit', 'DESCRIP_FASE_C': 'TextEdit', 'DESCRIP_GUARDA': 'TextEdit', 'CANTIDAD_FASES': 'Range', });
lyr_ERA_372_MT_8.set('fieldImages', {'ID_TRAMOMT': 'Range', 'CIRCUITO': 'TextEdit', 'DESCRIP_FASE_A': 'TextEdit', 'DESCRIP_FASE_B': 'TextEdit', 'DESCRIP_FASE_C': 'TextEdit', 'DESCRIP_GUARDA': 'TextEdit', 'CANTIDAD_FASES': 'Range', });
lyr_ERA_371_MT_9.set('fieldImages', {'ID_TRAMOMT': 'Range', 'CIRCUITO': 'TextEdit', 'DESCRIP_FASE_A': 'TextEdit', 'DESCRIP_FASE_B': 'TextEdit', 'DESCRIP_FASE_C': 'TextEdit', 'DESCRIP_GUARDA': 'TextEdit', 'CANTIDAD_FASES': 'Range', });
lyr_LFL_334_MT_10.set('fieldImages', {'ID_TRAMOMT': 'Range', 'CIRCUITO': 'TextEdit', 'DESCRIP_FASE_A': 'TextEdit', 'DESCRIP_FASE_B': 'TextEdit', 'DESCRIP_FASE_C': 'TextEdit', 'DESCRIP_GUARDA': 'TextEdit', 'CANTIDAD_FASES': 'Range', });
lyr_NIS_331_MT_11.set('fieldImages', {'ID_TRAMOMT': 'Range', 'CIRCUITO': 'TextEdit', 'DESCRIP_FASE_A': 'TextEdit', 'DESCRIP_FASE_B': 'TextEdit', 'DESCRIP_FASE_C': 'TextEdit', 'DESCRIP_GUARDA': 'TextEdit', 'CANTIDAD_FASES': 'Range', });
lyr_LEC_362_MT_2.set('fieldLabels', {'ID_TRAMOMT': 'header label', 'CIRCUITO': 'inline label', 'DESCRIP_FASE_A': 'inline label', 'DESCRIP_FASE_B': 'inline label', 'DESCRIP_FASE_C': 'inline label', 'DESCRIP_GUARDA': 'inline label', 'CANTIDAD_FASES': 'inline label', });
lyr_LEC_361_MT_3.set('fieldLabels', {'ID_TRAMOMT': 'header label', 'CIRCUITO': 'inline label', 'DESCRIP_FASE_A': 'inline label', 'DESCRIP_FASE_B': 'inline label', 'DESCRIP_FASE_C': 'inline label', 'DESCRIP_GUARDA': 'inline label', 'CANTIDAD_FASES': 'inline label', });
lyr_LEC_358_MT_4.set('fieldLabels', {'ID_TRAMOMT': 'header label', 'CIRCUITO': 'inline label', 'DESCRIP_FASE_A': 'inline label', 'DESCRIP_FASE_B': 'inline label', 'DESCRIP_FASE_C': 'inline label', 'DESCRIP_GUARDA': 'inline label', 'CANTIDAD_FASES': 'inline label', });
lyr_LEC_357_MT_5.set('fieldLabels', {'ID_TRAMOMT': 'header label', 'CIRCUITO': 'inline label', 'DESCRIP_FASE_A': 'inline label', 'DESCRIP_FASE_B': 'inline label', 'DESCRIP_FASE_C': 'inline label', 'DESCRIP_GUARDA': 'inline label', 'CANTIDAD_FASES': 'inline label', });
lyr_SRS_339_MT_6.set('fieldLabels', {'ID_TRAMOMT': 'header label', 'CIRCUITO': 'inline label', 'DESCRIP_FASE_A': 'inline label', 'DESCRIP_FASE_B': 'inline label', 'DESCRIP_FASE_C': 'inline label', 'DESCRIP_GUARDA': 'inline label', 'CANTIDAD_FASES': 'inline label', });
lyr_SRS_338_MT_7.set('fieldLabels', {'ID_TRAMOMT': 'header label', 'CIRCUITO': 'inline label', 'DESCRIP_FASE_A': 'inline label', 'DESCRIP_FASE_B': 'inline label', 'DESCRIP_FASE_C': 'inline label', 'DESCRIP_GUARDA': 'inline label', 'CANTIDAD_FASES': 'inline label', });
lyr_ERA_372_MT_8.set('fieldLabels', {'ID_TRAMOMT': 'header label', 'CIRCUITO': 'inline label', 'DESCRIP_FASE_A': 'inline label', 'DESCRIP_FASE_B': 'inline label', 'DESCRIP_FASE_C': 'inline label', 'DESCRIP_GUARDA': 'inline label', 'CANTIDAD_FASES': 'inline label', });
lyr_ERA_371_MT_9.set('fieldLabels', {'ID_TRAMOMT': 'header label', 'CIRCUITO': 'inline label', 'DESCRIP_FASE_A': 'inline label', 'DESCRIP_FASE_B': 'inline label', 'DESCRIP_FASE_C': 'inline label', 'DESCRIP_GUARDA': 'inline label', 'CANTIDAD_FASES': 'inline label', });
lyr_LFL_334_MT_10.set('fieldLabels', {'ID_TRAMOMT': 'header label', 'CIRCUITO': 'inline label', 'DESCRIP_FASE_A': 'inline label', 'DESCRIP_FASE_B': 'inline label', 'DESCRIP_FASE_C': 'inline label', 'DESCRIP_GUARDA': 'inline label', 'CANTIDAD_FASES': 'inline label', });
lyr_NIS_331_MT_11.set('fieldLabels', {'ID_TRAMOMT': 'header label', 'CIRCUITO': 'inline label', 'DESCRIP_FASE_A': 'inline label', 'DESCRIP_FASE_B': 'inline label', 'DESCRIP_FASE_C': 'inline label', 'DESCRIP_GUARDA': 'inline label', 'CANTIDAD_FASES': 'inline label', });
lyr_NIS_331_MT_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});