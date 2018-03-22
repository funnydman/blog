FROM python:3.5

#TODO: make this file more readable

LABEL creator='FUNNYDMAN'


ENV SOURCE_PATH /source
RUN mkdir $SOURCE_PATH


WORKDIR $SOURCE_PATH

ADD . $SOURCE_PATH/

RUN pip install -r requirements.txt




WORKDIR $SOURCE_PATH
COPY ./server/entrypoint.sh $SOURCE_PATH/server/entrypoint.sh
RUN chmod +x $SOURCE_PATH/server/entrypoint.sh

WORKDIR $SOURCE_PATH/server/
RUN ./entrypoint.sh

WORKDIR $SOURCE_PATH