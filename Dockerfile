FROM python:3.5

ENV SOURCE_PATH /source
RUN mkdir $SOURCE_PATH

ADD . $SOURCE_PATH/

WORKDIR $SOURCE_PATH

RUN pip install -r requirements.txt

RUN chmod +x $SOURCE_PATH/server/entrypoint.sh