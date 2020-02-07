const mongoose = require('mongoose');
const uri = 'mongodb+srv://szapat25:L1Ov8SAX1J82Kssq@topicostelematica-hinew.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true })
        .then(db => console.log('Data base is connected'))
        .catch(err => console.error(err));
module.exports = mongoose;