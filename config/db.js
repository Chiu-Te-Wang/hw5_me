var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://<dbuser>:<dbpassword>@ds033069.mongolab.com:33069/hw5_test');

// Error handler
mongoose.connection.on('error', function(err){
  console.log(err);
});

// Connection established
mongoose.connection.once('open', function(){
  console.log('database connection established');
});

require('../models/vote');