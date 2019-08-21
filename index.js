#!/usr/local/bin/node
var program = require('commander')
var gtoken = require('./gcp_auth')

program
  .option('-g, --google <file>', 'Get identity token using credential file')
  .option('-a, --audience <uri>', 'Audience URI')

program.parse(process.argv)

if(program.google) {
  if(!program.audience) {
    throw new Error('No audience present')
  }
  gtoken(program.audience, program.google, (idToken)=>{
    console.log(`${idToken.id_token}`);
  });
  
}