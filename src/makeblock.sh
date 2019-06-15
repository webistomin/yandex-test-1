#!/bin/bash
touch sass/blocks/$1.sass

echo -e "@import 'blocks/$1'" >> sass/main.sass
echo -e ".$1" >> sass/blocks/$1.sass

echo "Блок $1 создан"
