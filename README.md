## LOCAL DEPLOYMENT

### Install docker and docker-compose using official guide

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

### Install and collect static files with webpack in another tab
#### Run this commands in the directory `/client` 
```
npm install
npm run dev
```
Happy coding! :smile:
