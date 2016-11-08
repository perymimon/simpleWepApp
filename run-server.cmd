echo off

echo wake up  mongod server
start /B npm run database
echo waiting for mongod to startup
timeout /t 8
echo startup REST server
start /B npm run rest-server