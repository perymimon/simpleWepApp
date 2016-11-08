this project come to show how very basic web app that show list of comments
 will look like in different modern stack, for example :
  
  _task manger_ :none, gulp, webpack, jspm etc
  _framwork_ : angular 1, angular 2, react, etc
  _javascript_: ec5, ec2015
  
 css is fix and supply by Scss 
  
  
the web app contain:
  * list of comments `[{email,massage},..]`
  * form for add new comment
  * local filter of the comments by search in `email,massage`
  * refresh list by server with filter text 
  * send new comment to server and show it instantly in the list
   
server is same one for all projects
`simple node-express that use mongo for storage`

for the webs app to work computer must have:
[mongo](https://www.mongodb.com/download-center?jmp=docs&_ga=1.55067691.1845113226.1478469911#community)
[node 6.9](https://nodejs.org/dist/v6.9.1/node-v6.9.1-x64.msi)
    
to startup `mongod server` `REST server` `webpack server`    
```cmd
   run-webpack-angular-1
```

1: https://www.mongodb.com/download-center?jmp=docs&_ga=1.55067691.1845113226.1478469911#community