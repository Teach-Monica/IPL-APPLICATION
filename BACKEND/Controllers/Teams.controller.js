// TEAMS CONTROLLER
// COLLECTION OF ALL THE METHODS FOR TEAMS API
// METHODS: get, POST, PUT, DELETE
//BASE URL: 'https://www.domain.com/${controllerPath}/${subRouterPath}'
// FUNCTIONALITIES: CREATE TEAM, UPDATE TEAM, DELETE TEAM, GET ALL TEAMS, GET TEAM BY ID


// CREATING SUB ROUTER / EXPRESS ROUTER,
// WHICH REGISTERS ALL THE FUNCTIONALITIES
const router = require("express").Router();
const TeamsModel = require("../Model/Teams.model");
const { response } = require("../app");

//METHOD: GET
//INPUT: REQUEST
//OUTPUT: RESPONSE
//PATH = '/test'

router.get("/test", (req, res, next)=>{
    return res.status(200).json({
        message:"Test requested successfully",
    });
});

//METHOD: GET
//INPUT: REQUEST
//OUTPUT: RESPONSE
//PATH = '/'
router.get("/", (req, res, next)=>{
    TeamsModel.find().then((response)=>{
        if(response.length > 0){
            return res.status(200).json({
                message: "Teams fetched successfully!",
                response,
            });
        }
        else{
            return res.status(400).json({
                message: "Alas!! No Teams found",
                response,
            });
        }
    }).catch((error)=> {
        return res.status(400).json({
            error:error,
        })
    });
});

//METHOD: GET
//INPUT: REQUEST URL_PARAMS{id}
//OUTPUT: RESPONSE
//PATH = '/'
router.get("/:id", (req, res, next)=>{
    const { id } = req.params;
    TeamsModel.findById(id).then((response)=>{
        //the response will be in the object formate not in the array, so we cannot check with the length
        if(response._id){
            return res.status(200).json({
                message: "Team fetched successfully!",
                response,
            });
        }
        else{
            return res.status(400).json({
                message: "Alas!! No Team found",
                response: {},
            });
        }
    }).catch((error)=> {
        return res.status(400).json({
            error:error,
        })
    });
});


//METHOD: POST
//INPUT: REQUEST
//OUTPUT: RESPONSE
//PATH = '/createTeam'

router.post("/createTeam", (req, res, next)=>{
    const { 
        teamName='',
        teamShortName='', 
        colorCode='', 
        totalPlayers=0, 
        totalSubstitutes=0, 
        totalHelpers=0, 
        state='', 
        teamOwner='', 
        teamCaptain='', 
        teamCoach='', 
        teamCups=0 
    } = req.body;
    const Team = new TeamsModel({
        teamName,
        teamShortName,
        colorCode,
        totalPlayers,
        totalSubstitutes,
        totalHelpers,
        state,
        teamOwner,
        teamCoach,
        teamCaptain,
        teamCups,
    });
    
    Team.save()
    .then((response)=> {
        if(response._id) {
            return res.status(200).json({
                message:"Teams created successfully",
                data:response,
            });
        }
    })
    .catch((error)=>
    res.status(400).json({
        error:error,
    }))
});

module.exports = router;