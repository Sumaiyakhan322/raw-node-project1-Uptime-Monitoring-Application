//  Project Name : Uptime Monitoring Application
// Project Details : A restful API for up/down of users links
// Author : Sumaiya Khan
//Date :31/02/2024


//Dependencies
const http=require('http');

const {handleReqRes}=require('./helpers/handleReqRes')


//App object -Module scaffolding
const app={}


//Config
app.config={
    port:3000
}

//Start a server 

app.createServer=()=>{
    const server=http.createServer(app.handleReqRes)
    server.listen(app.config.port, ()=>{
        console.log(`Server is running on port ${app.config.port}`);
    })
}

//handle req and response
app.handleReqRes=handleReqRes

// start the server 
app.createServer()



