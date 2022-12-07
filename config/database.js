const mongoose = require ('mongoose');

const MONGODB_URL = "somestring"

exports.connect = () => {
    mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("DB CONNECTED with a Success"))
    .catch((error) => {
        console.log("DB Connection Failed");
        console.log(error);
        process.exit(1)  // read this process docs and exit code why 1
    })
}