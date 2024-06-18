
// Crear una función para actualizar el enlace según el año seleccionado
//function actualizarEnlace(anio) {
//    // Aquí puedes agregar la lógica para generar el enlace según el año seleccionado
//    var agno = anio;
//  
//   // Actualizar el enlace en el panel
//    panel.clear();
//    panel.add(ui.Label('Enlace:'));
//    panel.add(ui.Link(enlace, 'Enlace'));
//}
var  lista_SHACS = require('users/corfobbppciren2023/Areas_Regadas:-1.lista_SHACS.js');

var nombre_SHAC = lista_SHACS.nombre_SHAC; //Editar

Map.setCenter(-70.3, -32.9, 7);
//print(nombre_SHAC)

//print("Indice", indice);
//print("SHAC", lista_SHACS.nombre_SHAC[indice]);
//print("Tipo de SHAC", lista_SHACS.tipo_SHAC[indice]);


// Crear la interfaz de usuario
var panel = ui.Panel({
    layout: ui.Panel.Layout.flow('vertical'),
    style: {width: '300px'}
});



var input1 = ui.Select({
    items: ['2019_2020','2020_2021','2022_2023'],
    placeholder: 'Temporada',
    style: {width: '100%'}
});

var input2 = ui.Select({
    items: nombre_SHAC,
    placeholder: 'SHAC',
    style: {width: '100%'}
});

var panel2 = ui.Panel({
    style: {width: '300px'}
});

var button = ui.Button({
    label: 'Descargar',
    style: {width: '100%'},
    onClick: function() {
        // Obtener los valores de los inputs
        var temporada = input1.getValue();
        var SHAC = input2.getValue();
        
        // Construir la URL de descarga
        var superficie_regada = ee.FeatureCollection('users/corfobbppciren2023/'+temporada+'_SHAC_'+SHAC);
        var geometria_SHAC = ee.FeatureCollection('projects/ee-corfobbppciren2023/assets/SHACS/'+SHAC)
        Map.addLayer(geometria_SHAC);
        Map.addLayer(superficie_regada);

        var url=superficie_regada.getDownloadURL({name: temporada+'_SHAC_'+SHAC});
        
        panel2.clear();
        panel2.add(ui.Label('Descargar Superficie Efectivamente Regada'));
        panel2.add(ui.Label({value: 'Link',
              targetUrl:url}));
    }
});

// Añadir los elementos a la interfaz de usuario
panel.add(input1);
panel.add(input2);
panel.add(button);
panel2.add(ui.Label('Esperando selección'));

// Mostrar la interfaz de usuario en el mapa
var stackedPanel = ui.Panel([panel, panel2], ui.Panel.Layout.flow('vertical'));
Map.add(stackedPanel);
  
