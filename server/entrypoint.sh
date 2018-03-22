#!/usr/bin/env bash

PYTHON_INTERPRETER=$(which python3)
APPLICATION_ADDRESS=0.0.0.0
APPLICATION_PORT=8000

function run_migrations {
    echo "Running database migrations."
    $PYTHON_INTERPRETER manage.py migrate --noinput
}

function collect_static {
    echo "Collecting application static files."
    $PYTHON_INTERPRETER manage.py collectstatic --noinput
}
function run_dev_server {
    echo "Running application server. ($APPLICATION_ADDRESS:$APPLICATION_PORT)"
    $PYTHON_INTERPRETER manage.py runserver --nothreading $APPLICATION_ADDRESS:$APPLICATION_PORT
}

function main() {
    run_migrations
    collect_static
#    run_dev_server
}

main

