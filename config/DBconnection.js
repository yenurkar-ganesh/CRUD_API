const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://admin:admin@ganeshcluster.espa23u.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true, //THIS options in the mongoose.connect method. These options are recommended to use with the latest versions of Mongoose
      }
    );
    console.log(`DataBase Connected 🍔
    \n HOST :: ${connect.connection.host} 
    \n NAME :: ${connect.connection.name}`);
  } catch (err) {
    console.log("ERR ::  Could not connect to DB 😵‍💫");
    process.exit(1);
  }
};

module.exports = connectDB;
