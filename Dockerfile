FROM python:3.5

LABEL creator='FUNNYDMAN'

ENV SOURCE_PATH /source

RUN mkdir $SOURCE_PATH

WORKDIR $SOURCE_PATH

ADD . $SOURCE_PATH/

RUN pip install -r requirements.txt


COPY ./server/entrypoint.sh /source/server/entrypoint.sh

RUN chmod +x /source/server/entrypoint.sh

WORKDIR $SOURCE_PATH/server/

RUN ./entrypoint.sh

WORKDIR $SOURCE_PATH