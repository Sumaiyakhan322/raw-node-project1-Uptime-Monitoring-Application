//  Project Name : Environment variables
// Project Details : Environment variables
// Author : Sumaiya Khan
//Date :1/04/2024


//dependencies


//Module scaffolding
const environment={}

environment.staging={
    port:3000,
    envName:'staging'
}
environment.production={
    port:5000,
    envName:'production'
}

//determine the current env
const currentEnv=typeof(process.env.NODE_ENV)==='string' ? process.env.NODE_ENV : 'staging'


//export the corresponding env

const envToExport=typeof(environment[currentEnv]) ==='object' ? environment[currentEnv] : environment.staging


//export

module.exports=envToExport
