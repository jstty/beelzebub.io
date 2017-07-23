var Hyper = require('hyper.io');

// load config and routes
var hyper = new Hyper( {
    // port: process.env.PORT || 8000,
    appName: "beelzebub.io"
} );

// Start web server
hyper.load([
    'frontend'
])
.then(function(){
    hyper.start();
});
