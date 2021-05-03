# Spring boot applicaiton set up
### Install OpenJDK-11 on linux distrubution Debian
```
sudo apt-get install openjdk-11-jdk 
```
### Export JAVA_HOME variable for maven 
```
export JAVA_HOME=/usr/lib/jvm/openjdk-11-jdk
```
Then run program as spring boot applcaiton
```
mvn spring-boot:run
```
# Database set-up
### Add the deb file to your source list
```
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
```
### Import the repository signing key
```
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
```
### Update the system
```
sudo apt-get update
```
### Last step install the PostgreSQL
```
sudo apt-get -y install postgresql
```
## Start PostgreSQL and setup tables, indexs, schemas
#### Start postgresql  
```
/usr/lib/postgresql/11/bin/pg_ctl start
```
#### Login and create database
```
psql postgres
create database smartblock;
```
The database tables, indexes and schemas are provided in the project folder. Create the tables, indexes and schemas accordingly.
