const awsServerlessExpress = require('aws-serverless-express')
const app = require('./src/index')
const server = awsServerlessExpress.createServer(app)
exports.handler = (event, context) =>{
  return awsServerlessExpress.proxy(server, event, context)
} // due to this getting some time error internal server error but now working fine