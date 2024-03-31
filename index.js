//  Project Name : Uptime Monitoring Application
// Project Details : A restful API for up/down of users links
// Author : Sumaiya Khan
//Date :31/02/2024


//Dependencies
const http=require('http');
const url=require('url')


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
app.handleReqRes=(req,res)=>{
    //Request handle
    //get the url and parse it
     const parseUrl=url.parse(req.url,true);
 
    //get the pathname (/about)
    const path=parseUrl.pathname;

    //remove the 1st and last / from the path name 
    const trimmedPath=path.replace(/^\/|\/$/g, '')
    // console.log(trimmedPath);
    
    //get the method 
    const method=req.method.toLowerCase();
    



    // response handle
    res.end('Hello worrrrrrld')

}

// start the server 
app.createServer()



