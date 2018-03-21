FROM python:3.5

RUN mkdir /source

WORKDIR /source

ADD . /source/

RUN pip install -r requirements.txt

COPY ./server/entrypoint.sh /source/server/entrypoint.sh

RUN chmod +x /source/server/entrypoint.sh

WORKDIR /source/server/

RUN ./entrypoint.sh
