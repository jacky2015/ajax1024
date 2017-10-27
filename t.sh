#!/bin/sh



npm run build
scp -r crmplus   root@101.37.160.14:/data/www/
