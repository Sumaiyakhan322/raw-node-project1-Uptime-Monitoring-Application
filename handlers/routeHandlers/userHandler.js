//  Project Name : User Handler
// Project Details : Router for users
// Author : Sumaiya Khan
//Date : 16/4/2024

//module scaffolding

const handler = {};

//sampleHandlers functions
handler.userHandler = (requestProperties, callback) => {
  const selectedMethod = ['get', 'post', 'put', 'delete'];
  if (selectedMethod.indexOf(requestProperties.method) > -1) {
      handler._user[requestProperties.method](requestProperties, callback);
  } else {
      callback(405);
  }
};


//module scaffolding for handle methods

handler._user = {};

handler._user.post = (requestProperties, callback) => {
    // Implement functionality for POST method
    
};

handler._user.put = (requestProperties, callback) => {
    // Implement functionality for PUT method
   
};

handler._user.get = (requestProperties, callback) => {
    // Implement functionality for GET method
    callback(200);
};

handler._user.delete = (requestProperties, callback) => {
    // Implement functionality for DELETE method
  
};
 

//export sampleHandler
module.exports = handler;
