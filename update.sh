#!/bin/zsh

bower install qflipper
echo "[done] bower installed qflipper"
rm -r js/qflipper.min.js
echo "[done] rm js/qflipper.min.js"
cp js/qflipper/qflipper.min.js js/
echo "[done] cp js/qflipper/qflipper.min.js js/qflipper.min.js"
echo "updated qflipper.min.js"
