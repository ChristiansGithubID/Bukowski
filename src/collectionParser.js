const pm = require("postman-collection");
const fs = require("fs");
const Collection = require("postman-collection").Collection;
const codeGen = require("postman-code-generators");
const {
    createEmitAndSemanticDiagnosticsBuilderProgram, createTypeReferenceDirectiveResolutionCache,
} = require("typescript");
const { callbackify } = require("util");
const { get } = require("http");
const { Console } = require("console");
class collectionParser {
    environmentVariables;
    pmCollection;
    pmItems;
    itemsToSkip = new Array();
    collectionCollection = new Array();
    constructor(testEnironmentFile, testCollectionFile) {
        console.log("Constructor Called");
        this.itemsToSkip = new Array();
        console.log(this.itemsToSkip.toString());
        this.pmCollection = this.readCollectionFile(testCollectionFile);
        this.pmItems = this.pmCollection.items.toJSON();

        console.log(this.pmCollection.items.count());
        let _this = this;
        this.getItems(this.pmCollection);

        let items
    } //end of constructor

    getItemGroups() {
        let myCollection;
        let skipTheseGroups = new Array();
        let allCollection = new Array();
        console.log("collection items length:" + this.pmCollection.items.count());
        this.pmCollection.forEachItemGroup(function (groupElement) {
            console.log("groupElement.items.count():" + groupElement.items.count());
            myCollection = new Collection({
                info: {
                    name: groupElement.name,
                },
            });
            if (allCollection == undefined && pm.Collection.isCollection(myCollection)) {
                allCollection = new Array(myCollection)
            }
            else {
                allCollection.push(myCollection)
            }
            console.log("myCollection.name: " + myCollection.name)
            if (skipTheseGroups == undefined) { skipTheseGroups = new Array(groupElement.name) }
            else {
                skipTheseGroups.push(groupElement.name)
            }
            groupElement.forEachItem(function (subItem) {
                console.log("subItem.name: " + subItem.name);
                //myCollection.items(subItem);
            });
            /*console.log("skippeditems.count():"+ this.itemsToSkip.count());
            _this.itemsToSkip.forEach(element => {
               console.log(element);
               
            });*/
            skipTheseGroups.forEach(element => {
                console.log(element);
            });
            let pig = 'dog';
        });
    }

    getItems(COB) {
        let eventHOlder;
        let gjererres;
        if (Collection.isCollection(COB)) {
            COB.forEachItem(function (el) {
                //Get the name
                console.log(el.toJSON().name);
                //get the event
                console.log(el.toJSON().event);
                //get the request
                console.log(el.toJSON().request);
                gjererres = el.request;
                console.log("assigned "+ gjererres);
            });
        }
        //console.log(codeGen.getLanguageList());
        let req = this.getRequest(gjererres).toString();
        console.log(req);
        console.log("debugbreakpoint")
    }

    readCollectionFile(fileName) {
        return new pm.Collection(
            JSON.parse(fs.readFileSync(fileName).toString())
        );

    }

    parseEvent(pmEvent){
        //parse the event
    }

    getRequest(pmReq){
        let language = 'nodejs';
        let variant = 'request';
        let snippet = "Gobsmacked";//codeGen.getOptions(language).toJSON();
        let reqSnippet= "ptth"
        let rmethod = "";
        let rUrl="";
        let rTests = "";
        //console.log(
            if(pm.Request.isRequest(pmReq)){
                snippet = "isrequest";
                let blug = pmReq.toJSON();
                console.log('blug ');
                console.log(blug)
                
                
                console.log('blug.url');
                console.log(blug.url);
                console.log('blug.header');
                console.log(blug.header);
                //console.log(pmReq.auth.toJSON());
              //  console.log(pmReq.body.toJSON());
                let options = {
                    indentCount: 1,
                    indentType: 'Tab',
                    trimRequestBody: true,
                    followRedirect: true
                  };
                let callback = function(error, snippet){
                    if(error){
                        console.log("well crap");
                    }
                    else
                    {console.log(snippet);}
                }
                //codeGen.convert(language,variant,gjrerq,options, callback);
            }
            console.log('whatever at line 132')
        console.log(snippet);

        return reqSnippet;
    }
}



module.exports = collectionParser;
