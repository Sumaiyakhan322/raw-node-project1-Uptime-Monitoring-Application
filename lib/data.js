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
lib.basedir = path.join(__dirname, "./../.data/");

//write data to file
lib.create = function (dir, file, data, callback) {
  fs.open(
    lib.basedir + dir + "/" + file + "/json",
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
        callback("The file may be already exit");
      }
    }
  );
};
