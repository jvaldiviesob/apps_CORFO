
var assetID = 'users/corfobbppciren2023/SM2019Valparaiso_100';

// Load the asset
var asset = ee.Image(assetID);

// Define the region of interest
var region = asset.geometry();

// Define the export parameters
var exportParams = {
    image: asset,
    description: 'nombre_del_archivo',
    folder: 'nombre_de_la_carpeta',
    scale: 30,
    region: region
};

// Start the export
Export.image.toDrive(exportParams).start();
