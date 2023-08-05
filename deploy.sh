echo Switching to branch master
git checkout master

echo Building app...
npm run build:prod

echo Deploying files to server...
scp -r build/* aws:/var/www/demetrxx.com/html

echo "Done!"