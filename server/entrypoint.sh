#!/usr/bin/env bash

PYTHON_INTERPRETER=$(which python3)


function run_migrations {
    echo "Running database migrations."
    $PYTHON_INTERPRETER manage.py migrate --noinput
}

function collect_static {
    echo "Collecting application static files."
    $PYTHON_INTERPRETER manage.py collectstatic --noinput
}

function main() {
    run_migrations
    collect_static
}

main

