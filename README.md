# CS319-Project

### Group Members:
- Eylül Çağlar 21703949
- İsmet Alp Eren 21703786
- Kaan Ateşel 21703694
- Kerem Alemdar 21702133
- Muharrem Berk Yıldız 21802492

## Project Description:
Application will facilitate teachers' classroom management and reviewing procedure.
<br />
## Project-related features:
1. Students can create project groups.
2. Students can see already created groups and can join to groups.
3. Students can leave their group.
4. Students who have a group can upload documents as links related to their projects.
5. Students could review their group members. (dynamic, when the instructor want to activate, can activate).
6. Review between groups.
7. Teachers can create polls for all students.
8. Students can answer polls anonymously.
9. The teacher can make reviews in group's documents.

# Front end set up 
### Install npm dependencies
```
npm install
```
### Start application
```
npm start
```
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

