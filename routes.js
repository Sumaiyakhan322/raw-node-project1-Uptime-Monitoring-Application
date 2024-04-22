//  Project Name : All routing
// Project Details : All routing
// Author : Sumaiya Khan
//Date :31/02/2024


//dependencies
const {sampleHandler}=require('./handlers/routeHandlers/sampleHandler')
const { userHandler } = require('./handlers/routeHandlers/userHandler')

const routes={

    sample : sampleHandler,
    user:userHandler

}


module.exports=routes