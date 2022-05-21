var AWS = require("aws-sdk");
AWS.config.update({region: "us-east-1"});
var dynamodb = new AWS.DynamoDB({apiVersion: "2012-08-10"});

const express = require('express')
const routes = express.Router({mergeParams : true})

routes.get('/',(req, res) =>{
    res.status(200).json({message : "Lambda Working"})
})

routes.get('/getData',(req, res) =>{
    async function logSingleItem(){
        try {
            var params = {
                Key: {
                 "artist": {"S": "test name"}, 
                 "song": {"S": "test song"}
                }, 
                TableName: "basicSongsTable"
            };
            var result = await dynamodb.getItem(params).promise()
            res.status(200).json({ data : result})
        } catch (error) {
            res.status(403).json({ message : error.message})
        }
    }
    logSingleItem()
})
module.exports = routes