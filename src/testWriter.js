const fs = require('fs');


class testWriter{

testFileName;
fileHeaders;
prescripts;
postscripts;
chaiTests;


constructor(){
 this.chaiTests = new Array();
    

}

getFileHeaders(){
    let headers = 'import { test, Page, Locator, request } from @playwright/test\';' + '\n' + 
    'import {expect, assert } from \'chai\';' + '\n';
    console.log()

}

composeTest(postmanTest){
    
}

composeBeforeAll(nodeSnippet){

   

/*var request = require('request');
var options = {  
   'method': 'POST',
   'url': 'https://staging.savvy-batch.sorensoncloud.com/file',
   'headers': {
      'Pre-Signed-Url': '{{downloadURL}}',
      'Callback-Url': 'https://callback/xxxx',
      'File-Name': 'newsarticle-savvy.wav',
      'Cust-Id': 'test-user',
      'Asrs': 'microsoft',
      'Transcript-Format': 'json',
      'Input-Language': 'en-US',
      'Transcript-Pre-Signed-Url': '{{uploadUrl}}',
      'Content-Type': 'application/json'
   }
};
    request(options, function (error, response) {
   if (error) throw new Error(error);
   console.log(response.body); });*/


}

}
module.exports=testWriter;