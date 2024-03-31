//  Project Name : Not  Found  Handler
// Project Details :404 Not Found Handler
// Author : Sumaiya Khan
//Date :31/02/2024

//module scaffolding

const handler={} ;

//handlers functions
handler.notFoundHandler=(requestProperties,callback)=>{
    console.log(requestProperties);
    callback(404, {
        message :'Not found the url'
    })

}

//export handler
module.exports=handler