//  Project Name : Sample Handler
// Project Details : Sample Handler functions
// Author : Sumaiya Khan
//Date :31/02/2024

//module scaffolding

const handler={} ;

//sampleHandlers functions
handler.sampleHandler=(requestProperties,callback)=>{
   callback(200,{
    message : 'This is the sample url '
   })

}

//export sampleHandler
module.exports=handler