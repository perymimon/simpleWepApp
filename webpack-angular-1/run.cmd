echo off
cd webpack-angular-1
echo wake up  mongod server
start /B npm run database
echo waiting for mongod to startup
timeout /t 8
echo startup REST server
start /B node server/server
echo open browser and waiting to webpack
start /max http://localhost:8080
echo startup webpack server
npm start

cd ..