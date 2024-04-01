//  Project Name : Handle Req and Res
// Project Details : Handle Req and Res
// Author : Sumaiya Khan
//Date :31/02/2024

//dependencies
const url = require("url");
const { StringDecoder } = require("string_decoder");
const routes=require('../routes')
const {notFoundHandler}=require('../handlers/routeHandlers/notFoundHandler')
//module scaffolding

const handlers = {};

handlers.handleReqRes = (req, res) => {
  //Request handle
  //get the url and parse it
  const parseUrl = url.parse(req.url, true);

  //get the pathname (/about)
  const path = parseUrl.pathname;

  //remove the 1st and last / from the path name
  const trimmedPath = path.replace(/^\/|\/$/g, "");
  // console.log(trimmedPath);

  //get the method
  const method = req.method.toLowerCase();

  //get the query
  const queryStringObj = parseUrl.query;
  // console.log(queryStringObj);

  //headers
  const headersObj = req.headers;
  

  //get the body for post
  const decoder = new StringDecoder("utf-8");
  let strings = "";

  const requestProperties={
    parseUrl, path,trimmedPath,method, queryStringObj,headersObj
  }

  //find if the pathname exits on routes or not
  const chosenHandler=routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler
  


  req.on("data", (buffer) => {
    strings += decoder.write(buffer);
  });
  req.on("end", (buffer) => {
    strings += decoder.end();
    
    chosenHandler(requestProperties,(statusCode,payLoad)=>{
      statusCode=typeof(statusCode)==='number' ? statusCode : 500 ;
      payLoad=typeof(payLoad)==='object' ? payLoad  :{}
      const payLoadString=JSON.stringify(payLoad) ;
      res.writeHead(statusCode);
      res.end(payLoadString);
      })
    // response handle
    res.end("Hello worrrrrrld");
  });
};

//export the module
module.exports = handlers;
