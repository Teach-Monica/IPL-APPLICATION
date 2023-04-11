//MONGOOSE IS AN NPM PACKAGE
//IT'S A ORM - OBJECT RELATIONSHIP MANAGER
//what it will do?
// 1. Helps us to understand the data schema and iunderstanding what TEAM data will look like
// 2. Provide us necessary functions that help us to store / retrieve

const mongoose = require("mongoose");

//SCHEMA = Blue print of how your data is going to look like

const TeamSchema = mongoose.Schema({
    teamName:{
        type:String,
        required: true,
    },
    teamShortName:{
        type:String,
        required: false,
    },
    colorCode:{
        type:String,
        required:true,
    },
    totalPlayer:{
        type:Number,
        default:0,
    },
    totalSunbstitutes:{
        type:Number,
        default:0,
    },
    totalHelpers:{
        type:Number,
        default:0,
    },
    state:{
        type:String,
        required:true,
    },
    teamOwner:{
        type:String,
        required:true,
    },
    teamCaptain:{
        type:String,
        required:false,
    },
    teamCoach:{
        type:String,
        required:true,
    },
    teamCups:{
        type:Number,
        default:0,
    },
});

//'Teams' is the collection name that we are giving(automatically creates a collection in {lowercase})
module.exports = mongoose.model('Teams', TeamSchema);
