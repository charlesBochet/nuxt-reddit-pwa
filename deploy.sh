echo 'Building project in production environment...'
npm run build
echo 'Project built'

echo 'Compressing project files...'
tar -zcvf reddit.tar.gz dist > /dev/null 2>&1
echo 'Files compressed'

echo 'Copying project to staging server...'
scp reddit.tar.gz ubuntu@cropchat.chbo.io:/home/ubuntu
ssh ubuntu@cropchat.chbo.io rm -Rf /var/www/reddit/current
ssh ubuntu@cropchat.chbo.io mkdir /var/www/reddit/current

echo 'Extracting files...'
ssh ubuntu@cropchat.chbo.io tar -xvzf /home/ubuntu/reddit.tar.gz -C /var/www/reddit/current/ > /dev/null 2>&1
echo 'Files extracted'

echo 'Deployed successfully!'
