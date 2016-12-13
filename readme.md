# Simple Web App

This project come to show how very basic web app, that bring a list of comments,
 will look like in different modern client stack. for example :  
  
  _task manger_ :~~**none**~~, ~~**gulp**~~, **webpack**, ~~**jspm**~~ etc  
  _framwork_ : **angular 1**, ~~**angular 2**~~, ~~**react**~~ etc  
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
[mongo DB](https://www.mongodb.com/download-center?jmp=docs&_ga=1.55067691.1845113226.1478469911#community)**

Before dive in and run one of the web stack, install server dependency 
```
 npm install
```

And startup `mongod server` and  `REST server` by typing    
```cmd
   run-server
```

then move to one of the web-client-stack to continue: 
* [webpack-angular 1](/webpack-angular-1) 

##### preview
![preview](/asset/preview.jpg)

###### challenge details
Frontend:

Create a web page that contains a comment feed with the ability to insert new comments and filter the existing comments. 
Use the attached design as a guideline for your web page.
To create the page, use one of the currently popular web application frameworks (such as AngularJS, Backbone.js, React, etc.)
The web page should include a form with 2 fields - email and message text fields - and a submit button.
The submit button should add a new item to the feed below the form.
The item that will appear in the feed should contain a gravatar photo (https://en.gravatar.com/) that matches the inserted email, the email and the message.
The web page should also include a filter area which allows the user to filter the items.
Use flexbox to construct the page layout
 

Backend: 

Implement a backend service that stores/retrieves the comments.
The service should be implemented in either Node.JS, Java or Scala.
Use either MongoDB or Redis as persistence layer. 
