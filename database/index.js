const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/twitter')
    .then(()=> console.log('connexion db is ok !'))
    .catch(err => console.log(err));

