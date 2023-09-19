//import { collectionParser } from "./lib/collectionParser.js";
const collectionParser = require('./src/collectionParser');
console.log('This Is Bukowski');
const cp = new collectionParser('./collections/DEV.postman_environment.json', './collections/OLT.postman_collection.json');
    
    

