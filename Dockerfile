FROM python:3.5

RUN mkdir /source

WORKDIR /source

ADD . /source/

RUN pip install -r requirements.txt

RUN apt-get update