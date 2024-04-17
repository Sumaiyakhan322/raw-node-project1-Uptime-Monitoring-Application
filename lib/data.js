//  Project Name : All data store  read write
// Project Details : All data read write
// Author : Sumaiya Khan
//Date :1/04/2024

//dependencies

const fs = require("fs");
const path = require("path");

//module scaffolding

const lib = {};

//base directory of the data folder
lib.basedir = path.join(__dirname, "/../.data/");

//write data form file
lib.create = function (dir, file, data, callback) {
  fs.open(
    lib.basedir + dir + "/" + file + ".json",
    "wx",
    (err, fileDescriptor) => {
      if (!err && fileDescriptor) {
        //covert the data to stringify
        const stringData = JSON.stringify(data);

        //write data to file and close it
        fs.writeFile(fileDescriptor, stringData, (error) => {
          if (!error) {
            fs.close(fileDescriptor, (err2) => {
              if (!err2) {
                callback(false);
              } else {
                callback("Closing the file");
              }
            });
          } else {
            callback("There is some error");
          }
        });
      } else {
        callback('Error ....The file name already exit');
      }
    }
  );
};


//read data from the file
lib.read=(dir,file,callback)=>{
  fs.readFile (lib.basedir + dir + "/" + file + ".json",'utf-8',(err,data)=>{
   callback(err,data)
  })

}


//update data from the file
lib.update=(dir,file,data,callback)=>{
  fs.open(lib.basedir + dir + "/" + file + ".json",
  "r+",(err,fileDescriptor)=>{

    if(!err && fileDescriptor){
      //convert to data to sting
      const stringData=JSON.stringify(data)

      //file empty 
      fs.truncate(fileDescriptor,()=>{
        if(!err){

          fs.writeFile(fileDescriptor,stringData,(err2)=>{

            if(!err2){
              fs.close(fileDescriptor,(err3)=>{

                if(!err3){
                  callback(false)
                }
                else{
                  callback('Error')
                }

              })
            }
            else{
              callback('errror found')
            }

          })

        }
        else{
             callback('Not truncating the file');
        }
      })

    }
    else{
      console.log('File may not exit');
    }

  })
}


module.exports=lib
