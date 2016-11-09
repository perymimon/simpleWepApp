# Simple Web App

This project come to show how very basic web app, that show list of comments,
 will look like in different modern client stack. for example :  
  
  _task manger_ :**none, gulp, webpack, jspm** etc
  _framwork_ : **angular 1, angular 2, react** etc
  _javascript_: **ec5, ec2015**  
  
 css is fix and supply by `Scss` 
  
  
The simple web app contain:
  * list of comments `[{email,massage,avatar},..]`
  * form for add new comment ( `two fields: email, massage` )
  * filter comments local and remote by search in  `email`,`massage` text

Behavior:
  * It should filter local comments as user press and send requst from server for new list  
  * When new comment sent to the server and ok return the new message should appear instantly in the comments list
   
Server is same one for all projects:  
**Simple node-express that use mongo for storage**

**For REST server can work, computer must have:
[node 6.9](https://nodejs.org/dist/v6.9.1/node-v6.9.1-x64.msi) and
[mongo](https://www.mongodb.com/download-center?jmp=docs&_ga=1.55067691.1845113226.1478469911#community)**

Before dive in and run one of the web stack, install server dependency 
```
 npm install
```

and startup `mongod server` and  `REST server` by typing    
```cmd
   run-server
```

then go into one of the folder that contain web-client-stack (etc : webpack-angular-1) and run
```
run
```
then move to one of the web-client-stack to continue: 
* [webpack-angular 1](/webpack-angular-1) 

##### preview
![preview](/asset/preview.jpg)