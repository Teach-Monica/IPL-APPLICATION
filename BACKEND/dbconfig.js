const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://monica:${process.env.DATABASE_PASSWORD}@cluster0.rnkrmgc.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`);



