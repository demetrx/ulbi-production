cd ~/ulbi-production
npm run build:prod

rm -fr ~/../var/www/ulbi-production/html
mv ~/ulbi-production/build ~/../var/www/ulbi-production/html