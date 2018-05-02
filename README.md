![build status](https://travis-ci.org/FUNNYDMAN/blog.svg?branch=master)
## LOCAL DEPLOYMENT

#### Install docker and docker-compose using official guide

1. https://docs.docker.com/compose/install/#upgrading
2. https://docs.docker.com/install/linux/docker-ce/ubuntu/

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

#### Install and collect static files with webpack in another tab
##### Run this commands in the directory `/client` 
```
npm install
npm run dev
```
Happy coding! :smile:
