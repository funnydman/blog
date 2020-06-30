# fancy blog
> Simple and powerful blog written in django and react

<p align="center"><img src="https://preview.ibb.co/ercoFe/djangoreact.jpg" alt="djangoreact" border="0" width="100%"></p>

![build status](https://travis-ci.org/FUNNYDMAN/blog.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/FUNNYDMAN/blog/badge.svg?branch=master)](https://coveralls.io/github/FUNNYDMAN/blog?branch=master)
[![Requirements Status](https://requires.io/github/FUNNYDMAN/blog/requirements.svg?branch=master)](https://requires.io/github/FUNNYDMAN/blog/requirements/?branch=master)
## LOCAL DEPLOYMENT

Create and activate virtual environment

```bash
virtualenv --python=$(which python3) venv
source venv/bin/activate
```
Install packages with pipenv
```bash
pipenv install && pipenv shell
```

#### Create and configure database

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

#### Set up django
Go to server directory and run:
```
python manage.py migrate
python manage.py runserver
```

#### Build client part 
Go to client directory and run:
```
npm install && npm run start
```

Navigate to `http://localhost:3000`

Happy coding!
