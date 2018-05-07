var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var db = 'mongodb://localhost/example';
var connectToDb = function () {
    mongoose.connect(db, function (err) {
        if (err) {
            console.log(err);
            throw err;
        }

        console.log('Successfully connected to db');
        return "Successfully connected to db";

    });
    // var connection = mongoose.createConnection('mongodb://localhost/example');
}

var setUserModel = function () {
    // create a schema
    var userSchema = new Schema({
        name: String,
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true, select: false },
        contactNo: { type: Number, required: true, 
            set: v => Math.round(v) },
        lastLogin: { type: Date},
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now }
    });
    // var userSchema = new Schema({
    // 	name: String,
    // 	username: String,
    // 	password: String,
    // 	contactNo: String,
    // 	lastLogin: Date,
    // 	created_at: Date,
    // 	updated_at: Date
    // });

    userSchema.pre('save', function (next) {
        console.log("pre save");
        var currentDate = new Date();
        if (!this.lastLogin) {
            this.lastLogin = currentDate;
        }
        next();
    });
    mongoose.model("User", userSchema);
    User = mongoose.model('User', userSchema);
    return User;
}

var getUserModel = function () {
    return User;
}
module.exports = [connectToDb, setUserModel];