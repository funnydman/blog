![build status](https://travis-ci.org/FUNNYDMAN/blog.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/FUNNYDMAN/blog/badge.svg?branch=master)](https://coveralls.io/github/FUNNYDMAN/blog?branch=master)
[![Requirements Status](https://requires.io/github/FUNNYDMAN/blog/requirements.svg?branch=master)](https://requires.io/github/FUNNYDMAN/blog/requirements/?branch=master)
## LOCAL DEPLOYMENT

#### Install docker and docker-compose using official guide

1. https://docs.docker.com/compose/install/#upgrading
2. https://docs.docker.com/install/linux/docker-ce/ubuntu/
#### Install and collect static files using webpack
##### Install nodejs
```
sudo apt-get update
sudo curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```
##### Run this commands in the directory `blog/client` 
```
npm install
npm run dev
```
Last command builds static files and automatically rebuild.

#### Run docker-compose in the root of the project

```
docker-compose up --build
```
#### Create superuser for django admin
1. Log into web docker container:
``` 
docker exec -it web bash
```
2. Go to /server directory. Create super user:
```
python manage.py createsuperuser
```


## LOCAL DEPLOYMENT WITHOUT DOCKER
### create and activate virtual environment
```bash
virtualenv --python=$(which python3) venv
source venv/bin/activate
```
Install packages from requirements.txt
```bash
pip install -r requirements.txt
```

### create database

Sign in as postgres user
```bash
sudo -su postgres psql
```
Create db and user
```
CREATE DATABASE adminblog;
CREATE USER adminblog WITH password 'adminblog';
GRANT ALL ON DATABASE adminblog TO adminblog;
```
Allow user to create db for running django tests

```
ALTER USER adminblog CREATEDB;
```
DON'T use this credentials in production!

### set up django
Go to server directory and run entrypoint script
```
bash entrypoint.sh
```
Happy coding!