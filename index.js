//  Project Name : Uptime Monitoring Application
// Project Details : A restful API for up/down of users links
// Author : Sumaiya Khan
//Date :31/02/2024


//Dependencies
const http=require('http');
const {handleReqRes}=require('./helpers/handleReqRes');
const environment=require('./helpers/environments');
const data=require('./lib/data')


//App object -Module scaffolding
const app={}


//testing file system for create
// data.create('test1','newFile',{'name':'Bd','lg':'Bangla'},(err)=>{
//     console.log(`Error was`,err);

// })



//testing file system for read
// data.read('test1','newFile',(err,data)=>{
//     console.log(data);

// })


//testing file for update
// data.update('test1','newFile',{'name':'Bd','lg':'Bangla','hiii':'hlw'},(err)=>{
//     console.log(`Error was`,err);

// })


//testing file for update
// data.update('test1','newFile',{'name':'Bd','lg':'Bangla','hiii':'hlw'},(err)=>{
//     console.log(`Error was`,err);

// })



//Config
app.config={
    port:3000
}

//Start a server 

app.createServer=()=>{
    const server=http.createServer(app.handleReqRes)
    server.listen(environment.port, ()=>{
        console.log(`Server is running on port ${environment.port}`);
    })
}

//handle req and response
app.handleReqRes=handleReqRes

// start the server 
app.createServer()



