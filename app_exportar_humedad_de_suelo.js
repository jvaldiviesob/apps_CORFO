
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


Map.setCenter(-70.3, -32.9, 8);

// Crear un panel para mostrar el enlace
var panel1 = ui.Panel(),
    panel2 = ui.Panel(),
    panel3 = ui.Panel(),
    panel4 = ui.Panel(),
    panel5 = ui.Panel();
    
panel1.style().set('width', '700px');
panel2.style().set('width', '700px');
panel3.style().set('width', '700px');
panel4.style().set('width', '700px');
panel5.style().set('width', '700px');

function actualizarEnlace(agno) {
    // Aquí puedes agregar la lógica para generar el enlace según el año seleccionado
    // Imágenes Humedad de Suelo según año
    
    var img1 = ee.Image('users/corfobbppciren2023/SM'+agno+'Valparaiso_1'),
        img2 = ee.Image('users/corfobbppciren2023/SM'+agno+'Valparaiso_2'),
        img3 = ee.Image('users/corfobbppciren2023/SM'+agno+'Valparaiso_3'),
        img4 = ee.Image('users/corfobbppciren2023/SM'+agno+'Valparaiso_4');

    var url1=img1.getDownloadURL({name: 'SM'+agno+'Valparaiso_1',scale: 1000,}),
        url2=img2.getDownloadURL({name: 'SM'+agno+'Valparaiso_2',scale: 1000,}),
        url3=img3.getDownloadURL({name: 'SM'+agno+'Valparaiso_3',scale: 1000,}),
        url4=img4.getDownloadURL({name: 'SM'+agno+'Valparaiso_4',scale: 1000,});
    // Actualizar el enlace en el panel
    panel2.clear();
    panel2.add(ui.Label('Humedad de Suelo. Año '+agno+':'));
    panel2.add(ui.Label({value: 'Parte 1/4',
              targetUrl:url1}));
    // Actualizar el enlace en el panel
    panel3.clear();
    panel3.add(ui.Label('Humedad de Suelo. Año '+agno+':'));
    panel3.add(ui.Label({value: 'Parte 2/4',
              targetUrl:url2}));
        // Actualizar el enlace en el panel
    panel4.clear();
    panel4.add(ui.Label('Humedad de Suelo. Año '+agno+':'));
    panel4.add(ui.Label({value: 'Parte 3/4',
              targetUrl:url3}));
        // Actualizar el enlace en el panel
    panel5.clear();
    panel5.add(ui.Label('Humedad de Suelo. Año '+agno+':'));
    panel5.add(ui.Label({value: 'Parte 4/4',
              targetUrl:url4}));
}

// Crear un selector de año
var selectorAgno = ui.Select({
    items: ['2015','2016','2017','2018','2019','2020',
    '2021','2022', '2023'], // Agrega aquí los años que desees
    onChange: function(agno) {
        actualizarEnlace(agno);
    }
});

// Create a button in the user interface
//var exportButton = ui.Button({
//    label: 'Download Image',
//    onClick: downloadImage
//});

// Add the button to the user interface
//ui.root.add(exportButton);

// Agregar el selector de año al panel
panel1.add(ui.Label('Selecciona un año:'));
panel1.add(selectorAgno);
panel2.add(ui.Label('Esperando la selección del año - Parte 1/4'))
panel3.add(ui.Label('Esperando la selección del año - Parte 2/4'))
panel4.add(ui.Label('Esperando la selección del año - Parte 3/4'))
panel5.add(ui.Label('Esperando la selección del año - Parte 4/4'))

// Agregar los paneles al mapa
var stackedPanel = ui.Panel([panel1, panel2, panel3, panel4, panel5], ui.Panel.Layout.flow('vertical'));
Map.add(stackedPanel);
