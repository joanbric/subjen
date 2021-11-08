const mongoose = require("mongoose");

mongoose.connect(
    `mongodb+srv://master:${process.env.MONGO_PASS}@bus.tigys.mongodb.net/test?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log("DB Connected");
    }
);

module.exports = mongoose;
