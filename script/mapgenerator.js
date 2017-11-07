var page = require('webpage').create(),
    system = require('system'),
    name, lat, lng, zoom, width, height;

if (system.args.length != 7) {
    console.log('Usage: mapgenerator.js filename lat lng zoom image_width image_height');
    phantom.exit(1);
} else {
    
    name = system.args[1];
    lat = system.args[2];
    lng = system.args[3];
    zoom = system.args[4];
    width = system.args[5];
    height = system.args[6];

    page.viewportSize = { width: width, height: height };
    
    page.open('https://www.google.pt/maps/@' + lat + ',' + lng + ',' + zoom + 'z/data=!5m1!1e1', function() {

        window.setTimeout(function () {
           page.render(name + '.jpeg');
           phantom.exit();

        }, 1000); 
    });

}

