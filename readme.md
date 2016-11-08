# Simple Web App

this project come to show how very basic web app, that show list of comments,
 will look like in different modern client stack. for example :  
  
  _task manger_ :**none, gulp, webpack, jspm** etc
  _framwork_ : **angular 1, angular 2, react** etc
  _javascript_: **ec5, ec2015**  
  
 css is fix and supply by `Scss` 
  
  
the simple web app contain:
  * list of comments `[{email,massage,avatar},..]`
  * form for add new comment ( `two fields: email, massage` )
  * filter comments local and remote by search in  `email`,`massage` text

behavior:
  * it should filter local comments as user press and send requst from server for new list  
  * when new comment sent to the server and ok return the new message should appear instantly in the comments list
   
server is same one for all projects:  
**simple node-express that use mongo for storage**

**for REST server can work, computer must have:
[node 6.9](https://nodejs.org/dist/v6.9.1/node-v6.9.1-x64.msi) and
[mongo](https://www.mongodb.com/download-center?jmp=docs&_ga=1.55067691.1845113226.1478469911#community)**

before dive in and run one of the web stack, install server dependency 
```
 npm install
```

and startup `mongod server` `REST server`    
```cmd
   run-server
```
##### preview
![preview](/asset/preview.jpg)